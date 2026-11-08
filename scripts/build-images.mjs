import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const PHOTO = `${OUT}/Swathi_Vanneladas_Photo.jpeg`;
mkdirSync(OUT, { recursive: true });

async function removeWhiteBackground() {
  const { data, info } = await sharp(PHOTO).rotate().removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const count = width * height;
  const background = new Uint8Array(count);
  const queue = new Int32Array(count);
  let head = 0;
  let tail = 0;

  const isBackground = (pixel) => {
    const offset = pixel * 3;
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    return Math.min(red, green, blue) >= 210 && Math.max(red, green, blue) - Math.min(red, green, blue) <= 24;
  };

  const enqueue = (pixel) => {
    if (background[pixel] || !isBackground(pixel)) return;
    background[pixel] = 1;
    queue[tail++] = pixel;
  };

  for (let x = 0; x < width; x++) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 1; y < height - 1; y++) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    if (x > 0) enqueue(pixel - 1);
    if (x + 1 < width) enqueue(pixel + 1);
    if (pixel >= width) enqueue(pixel - width);
    if (pixel + width < count) enqueue(pixel + width);
  }

  const rgba = Buffer.alloc(count * 4);
  for (let pixel = 0; pixel < count; pixel++) {
    const source = pixel * 3;
    const target = pixel * 4;
    const red = data[source];
    const green = data[source + 1];
    const blue = data[source + 2];
    const alpha = background[pixel]
      ? Math.round(Math.max(0, Math.min(1, (245 - (red + green + blue) / 3) / 40)) * 255)
      : 255;

    rgba[target] = red;
    rgba[target + 1] = green;
    rgba[target + 2] = blue;
    rgba[target + 3] = alpha;
  }

  return sharp(rgba, { raw: { width, height, channels: 4 } });
}

const cutout = await removeWhiteBackground();
for (const width of [1100, 720, 420]) {
  await cutout.clone().resize({ width }).webp({ quality: 86, alphaQuality: 95 }).toFile(`${OUT}/portrait-${width}.webp`);
}

const portrait = await cutout.clone().resize({ height: 630, fit: 'inside' }).png().toBuffer();
const social = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="76%" cy="45%" r="55%">
      <stop offset="0" stop-color="#e5132b" stop-opacity=".32"/>
      <stop offset="1" stop-color="#07070a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#07070a"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="280" fill="#f4f1ec" font-family="Impact, 'Arial Narrow', sans-serif" font-size="82" letter-spacing="3">SWATHI</text>
  <text x="78" y="332" fill="#ff3d5a" font-family="Helvetica, Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="12">THE SERIES</text>
  <text x="78" y="398" fill="#a7a6ad" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600" letter-spacing="3">JAVA FULL-STACK ENGINEER • AWS CERTIFIED</text>
</svg>`);

await sharp(social)
  .composite([{ input: portrait, gravity: 'east' }])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('photo assets built');