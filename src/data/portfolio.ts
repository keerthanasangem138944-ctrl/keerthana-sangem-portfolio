export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Cybersecurity' | 'Software Development';
  features: string[];
  githubUrl?: string;
  verified: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Cybersecurity' | 'Developer Tools';
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'Education' | 'Technical Experience' | 'Project Milestone';
  description: string[];
  highlights: string[];
}

export const PERSONAL_INFO = {
  fullName: 'Keerthana Sangem',
  initials: 'KS',
  headline: 'Cybersecurity Student | Java & Python Developer',
  eyebrow: 'CYBERSECURITY • SOFTWARE DEVELOPMENT',
  tagline: 'Building reliable software and exploring the foundations of digital security.',
  location: 'Rajkot, Gujarat, India',
  email: 'sangemkeerthana0803@gmail.com',
  github: 'https://github.com/keerthanasangem138944-ctrl',
  linkedin: 'https://www.linkedin.com/in/keerthana-sangem-a03175384',
  profileImagePath: '/images/keerthana-profile.jpg',
  resumePath: '/resume/Keerthana_Sangem_Resume.pdf',
  resumeFileName: 'Keerthana_Sangem_Resume.pdf',
  careerObjective:
    'Seeking internship opportunities in cybersecurity or software development to apply theoretical knowledge to practical security challenges, build robust software, and develop real-world engineering experience.',
  about: `I am a B.Tech Computer Science Engineering student specializing in Cyber Security at Marwadi University (2025–2029). I have a solid programming foundation in Java, Python, and C, and I am deeply interested in understanding how software vulnerabilities arise and how to construct secure, dependable systems. I leverage Git and GitHub for version-controlled development workflows and have applied my programming knowledge in projects such as a Python-based Password Strength Checker and technical project work at Decode Labs. I am actively seeking internship roles where I can collaborate with seasoned mentors, contribute to real-world software, and grow as a cybersecurity professional.`,
  education: {
    degree: 'B.Tech in Computer Science Engineering — Cyber Security',
    institution: 'Marwadi University',
    location: 'Rajkot, Gujarat, India',
    period: 'July 2025 – May 2029',
    status: 'Currently Enrolled (Undergraduate)',
  },
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    category: 'Programming',
    description: 'Object-oriented programming, data structures, and core application development.',
    iconName: 'Code',
  },
  {
    name: 'Python',
    category: 'Programming',
    description: 'Scripting, algorithm design, security automation, and string analysis.',
    iconName: 'Terminal',
  },
  {
    name: 'C',
    category: 'Programming',
    description: 'Low-level programming, memory management fundamentals, and foundational computer science.',
    iconName: 'Cpu',
  },
  {
    name: 'Advanced Java',
    category: 'Programming',
    description: 'Advanced OOP principles, collections framework, and multi-tier application logic.',
    iconName: 'Layers',
  },

  // Cybersecurity
  {
    name: 'Cybersecurity Fundamentals',
    category: 'Cybersecurity',
    description: 'Core concepts in information security, authentication, CIA triad, and defense-in-depth principles.',
    iconName: 'Shield',
  },
  {
    name: 'Password Strength Analysis',
    category: 'Cybersecurity',
    description: 'Evaluating password complexity, entropy rules, character space distribution, and mitigation against brute-force attacks.',
    iconName: 'KeyRound',
  },

  // Developer Tools
  {
    name: 'Git',
    category: 'Developer Tools',
    description: 'Distributed version control, repository setup, branching workflows, and commit management.',
    iconName: 'GitBranch',
  },
  {
    name: 'Git Commands',
    category: 'Developer Tools',
    description: 'Command-line execution of status, diff, rebase, merge, stash, and remote repository synchronization.',
    iconName: 'Command',
  },
  {
    name: 'GitHub',
    category: 'Developer Tools',
    description: 'Remote code collaboration, pull requests, issue tracking, and open-source project management.',
    iconName: 'Github',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'password-strength-checker',
    title: 'Password Strength Checker',
    tagline: 'Python-based security utility evaluating password complexity and entropy',
    description:
      'A Python utility that evaluates password complexity and provides feedback to help users understand password-strength characteristics.',
    longDescription:
      'This project implements a practical password evaluation engine in Python. It assesses user-provided credentials against critical security vectors: character length, presence of uppercase and lowercase letters, numeric digits, and special characters. It generates actionable feedback to educate users on resistance against dictionary and brute-force attacks.',
    technologies: ['Python', 'Cybersecurity', 'Password Analysis', 'RegEx', 'CLI'],
    category: 'Cybersecurity',
    features: [
      'Multi-factor evaluation: Length checks, uppercase/lowercase distribution, digits, and special symbols',
      'Instant strength classification: Weak, Moderate, Strong, and Very Strong ratings',
      'Actionable recommendations: Pinpoints exact deficiencies to improve password resilience',
      'Clean modular architecture: Written with readable Python functions suitable for integration into authentication flows',
    ],
    githubUrl: 'https://github.com/keerthanasangem138944-ctrl',
    verified: true,
  },
];

export const TIMELINE_DATA: ExperienceItem[] = [
  {
    id: 'marwadi-university',
    title: 'B.Tech in Computer Science Engineering (Cyber Security)',
    organization: 'Marwadi University',
    period: 'July 2025 – May 2029',
    location: 'Rajkot, Gujarat, India',
    type: 'Education',
    description: [
      'Pursuing an undergraduate engineering degree with a specialization in Cyber Security.',
      'Studying computer science fundamentals, data structures, network security, operating systems, and cryptography.',
    ],
    highlights: ['Specialization: Cyber Security', 'Undergraduate Degree', 'Rajkot, Gujarat'],
  },
  {
    id: 'decode-labs',
    title: 'Technical Project Experience',
    organization: 'Decode Labs',
    period: 'Documented on LinkedIn',
    location: 'India',
    type: 'Technical Experience',
    description: [
      'Participated in technical project development as documented in my professional LinkedIn profile.',
      'Applied software development fundamentals, collaborating on technical tasks and reinforcing practical engineering principles.',
    ],
    highlights: ['Technical Project Work', 'Software Development Practice', 'Decode Labs Collaboration'],
  },
  {
    id: 'password-checker-milestone',
    title: 'Python Password Strength Checker Development',
    organization: 'Independent Security Project',
    period: 'Core Project',
    location: 'Rajkot, Gujarat, India',
    type: 'Project Milestone',
    description: [
      'Engineered a security-focused tool in Python to analyze password complexity and vulnerability factors.',
      'Created structured validation rules to guide users toward safer credential habits.',
    ],
    highlights: ['Python Development', 'Security Analysis', 'Version Controlled via Git'],
  },
];

export const SYSTEM_PORTFOLIO_CONTEXT = `
You are Ask Sangem AI, the official AI assistant on Keerthana Sangem's personal portfolio website.
Answer questions accurately using only the verified information below:

Full Name: Keerthana Sangem
Professional Headline: Cybersecurity Student | Java & Python Developer
Career Direction: Cybersecurity and software development.
Location: Rajkot, Gujarat, India
Email: sangemkeerthana0803@gmail.com
GitHub: https://github.com/keerthanasangem138944-ctrl
LinkedIn: https://www.linkedin.com/in/keerthana-sangem-a03175384
Resume path on site: /resume/Keerthana_Sangem_Resume.pdf

Education:
- B.Tech in Computer Science Engineering — Cyber Security at Marwadi University, Rajkot, Gujarat (July 2025 to May 2029).

Technical Skills:
- Programming: Java, Python, C, Advanced Java.
- Cybersecurity: Cybersecurity fundamentals, Password strength evaluation.
- Developer Tools: Git, Git commands and version control, GitHub.

Verified Projects:
- Password Strength Checker: A Python utility that evaluates password complexity and provides feedback to help users understand password-strength characteristics (length, character variety, numbers, symbols, attack resistance).

Verified Experience:
- Technical project experience at Decode Labs, as described in her LinkedIn profile.

Career Objective:
- Seeking internship opportunities in cybersecurity or software development, applying technical knowledge to practical problems, developing real-world experience, and contributing to secure and reliable software.

Guidelines for Ask Sangem AI:
1. Always maintain a polite, articulate, professional, and trustworthy tone.
2. Answer based solely on Keerthana's verified credentials above.
3. NEVER invent or assume additional work experience, certifications, GPAs, contest ranks, employment dates, or projects not listed above.
4. If a visitor asks something not covered in her portfolio (e.g., specific salary requirements or unverified credentials), explain politely that the information is not currently listed and encourage them to connect with Keerthana directly via email (sangemkeerthana0803@gmail.com) or LinkedIn.
5. Provide concise, clear, and well-structured responses.
`;
