export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Swathi Vanneladas',
  displayName: 'Swathi Vanneladas',
  firstName: 'SWATHI',
  initials: 'SV',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SWATHI ORIGINAL',
  role: 'Java Full-Stack Engineer',
  tagline: ['Java Full-Stack Engineer', 'AWS Certified', 'Cloud-Native Systems'],
  intro:
    'AWS Certified Java Full-Stack Engineer with 2+ years of experience at JPMorgan Chase, building cloud-native, enterprise-scale platforms with Java, Spring Boot, React, AWS and event-driven architecture.',
  email: 'swathivanneladas@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/swathi-vanneladas-0a4587209',
    github: undefined,
  },
  resumePdf: '/assets/Swathi_Vanneladas_Resume.pdf',
  resumeFileName: 'Swathi_Vanneladas_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Swathi Vanneladas',
  },
  interests: ['Distributed Systems', 'Cloud Architecture', 'Financial Technology'],
};

export const education = [
  {
    school: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology',
    degree: 'Bachelor of Technology — Electronics and Communication Engineering',
    period: '2020 – 2024',
    score: 'CGPA 8.9',
  },
];

export const experience = [
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer I',
    period: 'July 2024 – Present',
    points: [
      'Contribute to Chase’s enterprise-scale Card Product Lifecycle system, used by 1,500+ business and operations teams.',
      'Develop backend microservices with Java, Spring Boot and REST APIs, and contribute React microfrontends for product inventory, feature storefront and lifecycle views.',
      'Improve API performance and product-update workflows; optimize Redis caching, strengthen logging and Jest unit-test coverage, and lead resiliency testing.',
      'Build automated functional tests with Selenium and Cucumber, contribute to non-functional requirements, support EAC migration and work with DynamoDB.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer Program (SEP) Intern',
    period: 'January 2024 – June 2024',
    points: [
      'Contributed to the Card Product Lifecycle system using Java, Spring Boot, REST APIs and React microfrontends.',
      'Received SEP recognition.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Summer Intern',
    period: 'June 2023 – July 2023',
    points: [
      'Built an AI-based placement prediction model from student academic scores, skills and company hiring data.',
      'Cleaned and preprocessed datasets; implemented Logistic Regression, Random Forest and KNN models and evaluated them using accuracy, precision and F1-score.',
      'Created a pipeline for feature selection, training, validation and deployment to identify skills associated with placement outcomes.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'card-product-lifecycle',
    title: 'Card Product Lifecycle',
    year: '2024 – Present',
    genre: 'Fintech • Enterprise • Microservices',
    logline: 'Enterprise platform for credit-card product configuration and lifecycle automation.',
    stack: ['Java', 'Spring Boot', 'React', 'REST APIs', 'Redis', 'DynamoDB'],
    build: [
      'Contribute to Chase’s enterprise-scale credit-card product lifecycle system, used by more than 1,500 business and operations teams.',
      'Develop backend microservices and REST APIs for product configuration and lifecycle automation, alongside React microfrontends for inventory, feature storefront and lifecycle views.',
      'Improve performance and operational workflows through Redis cache optimization, enhanced logging, stronger Jest coverage and resiliency testing.',
    ],
    features: [
      'Product configuration and lifecycle automation',
      'React microfrontends for inventory, storefront and lifecycle views',
      'Redis cache optimization and API performance improvements',
      'Automated functional tests with Selenium and Cucumber',
      'EAC migration support and DynamoDB experience',
    ],
    metrics: [{ value: '1,500+', label: 'business and operations teams' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'placement-prediction',
    title: 'AI Placement Prediction',
    year: '2023',
    genre: 'Machine Learning • Data Science',
    logline: 'A model that predicts company placement outcomes from student skills and academic history.',
    stack: ['Python', 'Logistic Regression', 'Random Forest', 'KNN'],
    build: [
      'Developed a placement prediction model using historical student skill data, academic scores and company hiring patterns.',
      'Cleaned and preprocessed datasets, compared Logistic Regression, Random Forest and KNN, and evaluated results with accuracy, precision and F1-score.',
      'Created a workflow for feature selection, model training, validation and deployment.',
    ],
    features: [
      'Student academic and technical-skill data preparation',
      'Logistic Regression, Random Forest and KNN',
      'Accuracy, precision and F1-score evaluation',
      'Feature selection, training and validation workflow',
    ],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'digital-learning-solution',
    title: 'Digital Learning Solution',
    year: '2022',
    genre: 'Code for Good • Education • Web',
    logline: 'A centralized platform concept for tracking and assessing a digital-learning initiative.',
    stack: ['React', 'PostgreSQL', 'Web Applications'],
    build: [
      'Designed a centralized digital platform concept for Kotak Education Foundation’s initiative serving 200+ partner schools in Mumbai.',
      'Structured beneficiary mapping from schools to teachers to students, with support for audio, video, image and assessment data.',
      'Designed workflows for teacher surveys, attendance, submissions, analytics sessions and post-test evaluations, consolidating information previously scattered across Google Drive and WhatsApp.',
    ],
    features: [
      'School → teacher → student beneficiary mapping',
      'Multi-format data collection and assessments',
      'Teacher surveys, attendance and submission workflows',
      'Beneficiary history and impact-tracking concept',
    ],
    metrics: [{ value: '200+', label: 'partner schools in Mumbai' }],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'code-for-good',
    title: 'Finalist',
    org: 'JPMorgan Chase Code for Good 2022',
    detail: 'Selected through the Code for Good hackathon and developed a digital-learning solution concept for Kotak Education Foundation.',
    laurel: 'Hackathon Finalist',
    link: 'https://drive.google.com/file/d/1QNCIY30GBqhaAoQkiOdgxBto7SBfnSO/view?usp=sharing',
  },
  {
    id: 'sep-recognition',
    title: 'SEP Recognition',
    org: 'JPMorgan Chase & Co.',
    detail: 'Recognized during the Software Engineer Program internship.',
    laurel: 'Professional Recognition',
  },
  {
    id: 'hackathon-mentor',
    title: 'Hackathon Volunteer & Mentor',
    org: 'College and community events',
    detail: 'Volunteered and mentored at Smart India Hackathon, college hackathons, IoT Sprint and Convergence contests.',
    laurel: 'Community',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Cloud Practitioner (2024)' },
  { issuer: 'Udemy', name: 'C Programming, Python Advanced, HTML5, CSS and JavaScript' },
  { issuer: 'Unschool', name: 'Data Science Workshop' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'C', mono: 'C' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Services & APIs',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Spring Framework', mono: 'Sf' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Node.js', mono: 'No' },
      { name: 'AWS Lambda', mono: 'La' },
      { name: 'Amazon API Gateway', mono: 'Ag' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web applications & microfrontends',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'AngularJS', mono: 'An' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bt' },
      { name: 'Microfrontends', mono: 'Mf' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    subtitle: 'Quality & resiliency',
    skills: [
      { name: 'Jest', mono: 'Je' },
      { name: 'Selenium', mono: 'Se' },
      { name: 'Cucumber', mono: 'Cu' },
      { name: 'JUnit', mono: 'Ju' },
      { name: 'Mockito', mono: 'Mo' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'AWS, delivery & infrastructure',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'DynamoDB', mono: 'Dy' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Spinnaker', mono: 'Sp' },
      { name: 'Terraform', mono: 'Tf' },
    ],
  },
  {
    id: 'data-tools',
    title: 'Data & Tools',
    subtitle: 'Databases, APIs & collaboration',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Bitbucket', mono: 'Bb' },
    ],
  },
  {
    id: 'practices',
    title: 'Practices',
    subtitle: 'Engineering foundations',
    skills: [
      { name: 'Event-Driven Architecture', mono: 'Ed' },
      { name: 'Distributed Systems', mono: 'Ds' },
      { name: 'API Design', mono: 'Ap' },
      { name: 'CI/CD', mono: 'Ci' },
      { name: 'Agile & Scrum', mono: 'Ag' },
      { name: 'SOLID Principles', mono: 'So' },
      { name: 'Data Structures', mono: 'Dq' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Card Product Lifecycle', 'Spring Boot services'],
  'Spring Boot': ['Card Product Lifecycle'],
  React: ['Card Product Lifecycle', 'Digital Learning Solution'],
  'REST APIs': ['Card Product Lifecycle'],
  Redis: ['Card Product Lifecycle'],
  DynamoDB: ['Card Product Lifecycle'],
  Python: ['AI Placement Prediction'],
  'AWS Lambda': ['AWS cloud and serverless development'],
  PostgreSQL: ['Digital Learning Solution'],
  Jest: ['Card Product Lifecycle'],
  Selenium: ['Automated functional testing'],
  Cucumber: ['Automated functional testing'],
  'Distributed Systems': ['Cloud-native enterprise platform work'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2024',
    synopsis: 'Electronics and Communication Engineering at VNR VJIET.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Completed a B.Tech in Electronics and Communication Engineering with an 8.9 CGPA.',
        tags: ['B.Tech', 'Electronics & Communication', 'CGPA 8.9'],
        runtime: '2020 – 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The First Builds',
    period: '2022 – 2023',
    synopsis: 'A Code for Good finalist and an early machine-learning project.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Finalist',
        description: 'JPMorgan Chase Code for Good 2022 — a digital-learning solution concept for Kotak Education Foundation.',
        tags: ['Code for Good', 'React', 'PostgreSQL'],
        runtime: 'September 2022',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The Predictor',
        description: 'Built and evaluated an AI-based placement prediction model using student skill and academic data.',
        tags: ['Machine Learning', 'Python', 'Data Science'],
        runtime: 'Summer 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Into the Enterprise',
    period: '2023 – 2024',
    synopsis: 'Summer and Software Engineer Program internships at JPMorgan Chase.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Summer Intern',
        description: 'Worked on an AI-based placement prediction model and a pipeline for model training and evaluation.',
        tags: ['JPMorgan Chase', 'AI', 'Machine Learning'],
        runtime: 'June – July 2023',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The SEP Intern',
        description: 'Joined the Card Product Lifecycle team, contributing to Java services and React microfrontends.',
        tags: ['JPMorgan Chase', 'Java', 'React'],
        runtime: 'January – June 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building at Scale',
    period: '2024 – Present',
    synopsis: 'Software Engineer I at JPMorgan Chase, contributing to an enterprise credit-card product platform.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Engineer',
        description: 'Develops Java and Spring Boot microservices and contributes to React microfrontends for the Card Product Lifecycle system.',
        tags: ['Java', 'Spring Boot', 'React'],
        runtime: 'July 2024 – Present',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'The Reliability Arc',
        description: 'Improves Redis caching, logging, automated tests and resiliency, and supports EAC migration and DynamoDB work.',
        tags: ['Redis', 'Selenium', 'Cucumber', 'DynamoDB'],
        runtime: 'Now streaming',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Software Engineer I', detail: 'JPMorgan Chase & Co.', palette: ocean },
  { label: 'Enterprise platform', title: 'Card Product Lifecycle', detail: 'Used by 1,500+ teams', palette: crimson },
  { label: 'Primary stack', title: 'Java + Spring', detail: 'Microservices and REST APIs', palette: amber },
  { label: 'Frontend', title: 'React', detail: 'Microfrontends for product workflows', palette: violet },
  { label: 'Cloud credential', title: 'AWS', detail: 'Certified Cloud Practitioner · 2024', palette: jade },
  { label: 'Hackathon', title: 'Code for Good', detail: 'JPMorgan Chase finalist · 2022', palette: ocean },
  { label: 'Academic arc', title: 'B.Tech ECE', detail: 'CGPA 8.9 · 2020–2024', palette: amber },
  { label: 'AI project', title: 'Placement Prediction', detail: 'Logistic Regression · Random Forest · KNN', palette: crimson },
  { label: 'Reliability', title: 'Testing & Resiliency', detail: 'Selenium · Cucumber · Jest', palette: jade },
  { label: 'Engineering', title: 'Cloud-Native Systems', detail: 'Distributed systems · API design', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Experience',
    title: 'Software Engineer I',
    lines: ['JPMorgan Chase & Co.', 'Card Product Lifecycle · July 2024 – Present'],
    chips: ['1,500+ teams'],
  },
  {
    kicker: 'Engineering',
    title: 'Java + Spring Boot',
    lines: ['Backend microservices and REST APIs', 'React microfrontends · Redis · DynamoDB'],
    chips: ['Java', 'Spring Boot', 'React', 'AWS'],
  },
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['VNR VJIET', '2020 – 2024'],
    chips: ['CGPA 8.9'],
  },
  {
    kicker: 'Projects',
    title: 'Three Builds',
    lines: ['Card Product Lifecycle — enterprise fintech platform', 'AI Placement Prediction — machine learning', 'Digital Learning Solution — Code for Good'],
  },
  {
    kicker: 'Recognition',
    title: 'Code for Good Finalist',
    lines: ['JPMorgan Chase · 2022', 'Volunteer and mentor at hackathons'],
  },
  {
    kicker: 'Certified',
    title: 'AWS Cloud Practitioner',
    lines: ['AWS Certified Cloud Practitioner · 2024', 'Udemy coursework · Unschool Data Science workshop'],
  },
];

export type ProfileId = 'swathi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'swathi',
    name: 'Swathi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & engineering first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • 2022–Present`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
