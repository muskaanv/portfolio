export const profile = {
  name: "Muskaan Verma",
  initials: "MV",
  role: "Senior Software Engineer",
  location: "Delhi NCR, India",
  email: "muskaanv1111@gmail.com",
  phone: "+91 8800590122",
  linkedin: "linkedin.com/in/muskaanverma28",
  linkedinUrl: "https://linkedin.com/in/muskaanverma28",
  github: "muskaanv",
  githubUrl: "https://github.com/muskaanv",
};

export const hero = {
  eyebrow: "Portfolio — Vol. 01",
  headline: "Hi, I am Muskaan.",
  accent: "I am interested in building a life as much as I am in building things.",
  headline2: "AT SCALE.",
  sub: "Five years into Software Engineering, and still endlessly curious about what else can I build. I like discovering places, trying things, making ideas happen, and leaving a little room for the unexpected :) ",
  availability: "Open to new Opportunities",
};

export const about = {
  heading: "Code, Ideas and Things worth",
  accent: "Building.",
  bio: [
    "I'm a software engineer who likes thinking beyond the code. I build systems, untangle complicated problems, and spend an unreasonable amount of time wondering what I could build next.",
    // "Most days that means Java, Kubernetes, and stored procedures. Some days it means teaching a model to flag a catastrophic health claim before a human ever sees it. I like the days where both happen at once.",
  ],
  note: "I don't really have everything figured out and I am okay with that. I like learning,asking questions, trying things, getting things wrong, and figuring them out along the way. That's probably what I enjoy most about what I do. If that's the kind of person you're looking for, let's talk.",
  principles: [
    {
      title: "Build Things That Matter",
      body: "I like taking an idea, figuring out how it should work, and turning it into something real - whether that's a software, a solution, or eventually something of my own. ",
    },
    {
      title: "Stay Curious",
      body: "Technology is my profession, but curiosity goes well beyond it. I like learning, exploring new places, trying new things, and following ideas just to see where they lead."
    },
    {
      title: "Live A Little",
      body: "Good food, great people, spontaneous plans, travel, style, and experiences worth remembering. Work is a big part of my life - just not the whole thing.",
    },
  ],
};

export const education = {
  eyebrow: "Education",
  school: "SRM Institute of Science and Technology",
  location: "Delhi NCR",
  degree: "B.Tech in Computer Science Engineering",
  period: "Apr 2017 — May 2021",
};

export const career = [
  {
    id: "ch01",
    chapter: "CH.01",
    period: "Mar 2026 — Now",
    title: "Senior Software Engineer",
    org: "Optum UHG",
    summary:
      "Leading the migration of legacy Big Data processes to Java and PostgreSQL stored procedures, and architecting the AI/ML pipeline behind catastrophic claims detection.",
    bullets: [
      "Leading migration of legacy Big Data processes to Java and PostgreSQL stored procedures, improving maintainability and cutting technical debt across 10+ production pipelines.",
      "Architecting and deploying migrated services end-to-end on Kubernetes and Docker, with zero-downtime rollouts through GitHub Actions CI/CD.",
      "Contributing to an AI/ML catastrophic claims detection project — building pipelines that flag high-risk claim patterns for early clinical intervention.",
    ],
    stats: [
      { value: "20+", label: "pipelines migrated" },
      { value: "0", label: "downtime rollouts" },
    ],
    tags: ["Java", "PostgreSQL", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    id: "ch02",
    chapter: "CH.02",
    period: "Jul 2021 — Feb 2026",
    title: "Software Engineer",
    org: "Optum UHG",
    summary:
      "Owned automation and migration work across eligibility and membership data, and built an AI/ML file-comparison tool that secured $3M in follow-on funding.",
    bullets: [
      "Automated generation of state-specific health plans across 12–14 Big Data processes, cutting manual effort — and headcount needs — by 50%.",
      "Debugged and optimized Big Data eligibility and membership processes, migrating from Scala to Java on Kubernetes and Docker.",
      "Moved the team from Jenkins to GitHub CI/CD, streamlining job execution and improving reliability.",
      "Built an AI/ML-powered file-comparison tool across PDF, Word, Excel and text formats — cutting manual workload 70% and securing $3M in funding.",
    ],
    stats: [
      { value: "70%", label: "less manual work" },
      { value: "$3M", label: "funding secured" },
    ],
    tags: ["Scala", "Java", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    id: "ch03",
    chapter: "CH.03",
    period: "Jan 2021 — May 2021",
    title: "Program Analyst Trainee",
    org: "Cognizant",
    summary:
      "Built full-stack Java applications end to end — from Spring Boot services to the UI consuming them.",
    bullets: [
      "Developed full-stack Java applications using Spring Boot, HTML, CSS, Microservices, AWS, JavaScript, Node.js and REST APIs.",
    ],
    stats: [],
    tags: ["Spring Boot", "Java", "AWS", "REST API"],
  },
  {
    id: "ch04",
    chapter: "CH.04",
    period: "Dec 2019 — Jan 2020",
    title: "Intern",
    org: "SAIL, Delhi",
    summary:
      "First real exposure to production data work — network analysis and database management.",
    bullets: [
      "Conducted network analysis and built a database-management project using SQL.",
      "Compiled data and generated reports that supported project decision-making.",
    ],
    stats: [],
    tags: ["SQL", "Network Analysis"],
  },
];

export const projects = [
  {
    id: "claims",
    category: "ML & Automation",
    year: "Ongoing",
    title: "Catastrophic Claims Automation",
    description:
      "Collaborated with Microsoft: an end-to-end automation workflow that reduces heavy manual review on high-cost healthcare claims, targeting $400K+ cases and lowering the threshold toward $250K without adding headcount.",
    stats: ["20,000+ monthly records analyzed", "60–70% review inefficiency identified"],
    tags: ["Python", "Azure", "SQL"],
  },
  {
    id: "chatbot",
    category: "Full-Stack",
    year: "2025",
    title: "AI File-Comparison Chatbot",
    description:
      "An AI/ML-powered tool that compares documents across PDF, Word, Excel and text formats using GPT-4 and prompt engineering, built to speed up audit verification at scale.",
    stats: ["1st place hackathon win", "24K+ members audited across 10+ states"],
    tags: ["React", "Node.js", "SQL", "Bootstrap"],
  },
];

export const projectCategories = ["All", "ML & Automation", "Full-Stack"];

export const skillGroups = [
  {
    title: "Languages & Data",
    skills: [
      { name: "SQL (Postgres)", level: 92 },
      { name: "Java", level: 90 },
      { name: "Scala", level: 88 },
      { name: "Spark / Hive / HBase", level: 85 },
      { name: "Snowflake", level: 78 },
      { name: "Databricks", level: 80 },
      { name: "Python", level: 82 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Kubernetes", level: 88 },
      { name: "Docker", level: 88 },
      { name: "GitHub Actions", level: 85 },
      { name: "Azure", level: 78 },
    ],
  },
  {
    title: "Web & Tooling",
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS / Bootstrap", level: 82 },
      { name: "Git", level: 90 },
      { name: "Shell Script", level: 75 },
    ],
  },
];

export const certifications = [
  "AI Dojo",
  "Microsoft Azure Fundamentals",
  "Create an Agent with Microsoft Copilot Studio and Dataverse for Teams",
];
