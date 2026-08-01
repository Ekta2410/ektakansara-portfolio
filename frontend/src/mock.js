// Mock data for Ekta Kansara's portfolio

import heroImage from './assets/hero.jpeg';
export const profile = {
  name: 'Ekta Kansara',
  first: 'EKTA',
  last: 'KANSARA',
  role: 'Data Analyst | SQL | Python | Power BI',
  location: 'Pune, Maharashtra',
  email: 'ektaa.kansara@gmail.com',
  linkedin: 'https://linkedin.com/in/ekta',
  github: 'https://github.com/Ekta2410',
  resumeUrl: 'https://customer-assets-39nsmqrw.emergentagent.net/job_eaeb679e-c2fe-422b-8341-05c141956c46/artifacts/wkj0zha6_EktaKansara_Resume.pdf',
  tagline: 'Data Analyst skilled in SQL, Python, Power BI and Machine Learning, transforming complex datasets into actionable business insights through dashboards, analytics and predictive models.',
  heroImage,
};

export const stats = [
  { value: '9.98', label: 'MCA CGPA / 10' },
  { value: '96%+', label: 'ML Model Accuracy' },
  { value: '100K+', label: 'Rows Analyzed' },
  { value: '4', label: 'Featured Projects' }
];

export const about = {
  headline: 'Turning raw data into decisions.',
  paragraphs: [
    'I\u2019m a fresher MCA graduate from Ajeenkya DY Patil University, Pune with a strong focus on data analytics and data science. My work sits at the intersection of clean data pipelines, well-designed dashboards, and machine\u2011learning models that solve real problems.',
    'I\u2019ve built ETL warehouses processing 100K+ order records, Power BI and Tableau dashboards that cut reporting time by 15\u201320%, and computer\u2011vision systems achieving 96%+ detection accuracy. I care about the small details \u2014 well-named columns, honest charts, and models you can actually explain.'
  ],
  focus: ['Data Analytics', 'Business Analystics', 'MIS Analyst', 'Computer Vision','Sql Analyst']
};

export const education = [
  {
    school: 'Ajeenkya DY Patil University',
    degree: 'Master of Computer Applications (MCA) \u2014 Data Science',
    period: '2024 \u2014 May 2026',
    location: 'Pune, Maharashtra'
  },
  {
    school: 'Lachoo Memorial College of Science and Technology',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2021 \u2014 May 2024',
    location: 'Jodhpur, Rajasthan'
  }
];

export const experience = [
  {
    role: 'Data Analyst Intern',
    company: 'Elevate Labs',
    period: 'Jan 2026 \u2014 Apr 2026',
    bullets: [
      "Analyzed 50K+ records using SQL and Python to generate actionable business insights.",
      "Performed EDA and automated reporting, reducing reporting time by 15%.",
      "Designed 4 interactive Power BI dashboards for KPI tracking.",
      "Improved internal data quality by 20% through cross-functional collaboration."
    ]
  }
];

export const projects = [
  {
    id: 'p1',
    number: '01',
    title: 'Quick Commerce Analytics Platform',
    stack: ['MySQL', 'SQL', 'Power BI', 'ETL'],
    summary: 'A star\u2011schema data warehouse and Power BI dashboard analyzing 100K+ orders across Blinkit, JioMart and Swiggy Instamart \u2014 covering revenue, delivery performance, and refund analytics.',
    highlights: [
      'Designed a star\u2011schema Quick Commerce warehouse in MySQL with ETL processing 100K+ records.',
      'Wrote advanced SQL to analyze \u20b959M+ revenue, 29.5 min avg delivery time, and refund trends.',
      'Built an interactive Power BI dashboard with KPI, platform and category views.'
    ],
    link: 'https://github.com/Ekta2410/Quick-Commerce-Analytics-Dashboard.git',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
  },
  {
    id: 'p2',
    number: '02',
    title: 'Superstore Sales Analytics Dashboard',
    stack: ['Tableau', 'EDA', 'KPI Reporting'],
    summary: 'Interactive Tableau dashboard analyzing 9k+ sales records with time\u2011series reports, top\u2011N analysis and region\u2011wise KPI tracking.',
    highlights: [
      'Analyzed 9k+ sales records with KPIs for sales, profit and profit margin.',
      'Built 12+ visualizations to identify high\u2011performing and loss\u2011making products.',
      'Automated trend analysis to accelerate seasonal pattern discovery.'
    ],
    link: 'https://public.tableau.com/app/profile/ekta.kansara5248/viz/SUPERSTORE_DASHBOARD_17790913916040/Dashboard1?publish=yes',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  },
  {
    id: 'p3',
    number: '03',
    title: 'Real\u2011Time Object Detection System',
    stack: ['YOLOv8', 'OpenCV', 'Python', 'Label Studio'],
    summary: 'A YOLOv8 + OpenCV pipeline detecting 22 object classes in real time from a webcam feed, trained on a custom 3k\u2011image dataset with 96% validation accuracy.',
    highlights: [
      'Collected and annotated 3k+ images in Label Studio with YOLO\u2011compatible bounding boxes.',
      'Fine\u2011tuned YOLOv8n to 96% detection accuracy on validation data.',
      'Deployed a low\u2011latency webcam inference system using OpenCV.'
    ],
    link: 'https://github.com/Ekta2410/Yolo-Object-Detection',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80'
  },
  {
    id: 'p4',
    number: '04',
    title: 'Sign Language Recognition',
    stack: ['Python', 'OpenCV', 'Deep Learning'],
    summary: 'A computer\u2011vision project recognizing hand\u2011sign gestures to bridge communication for the hearing\u2011impaired, built with Python and OpenCV.',
    highlights: [
      'Trained a CNN classifier on labeled sign\u2011language images.',
      'Real\u2011time gesture recognition from a webcam feed.',
      'End\u2011to\u2011end pipeline from data prep to inference.'
    ],
    link: 'https://github.com/Ekta2410/Sign-Language-Project',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80'
  }
];

export const skills = {
  Languages: ['Python', 'SQL', 'R (Beginner)'],
  'Analytics & BI': ['Power BI', 'Tableau', 'MS Excel', 'EDA', 'KPI Reporting'],
  'Python Libraries': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit\u2011Learn', 'NLTK', 'OpenCV'],
  'Databases & Warehousing': ['MySQL', 'ETL', 'Star Schema', 'Data Warehousing'],
  Tools: ['Git', 'VS Code', 'Jupyter', 'Google Colab', 'Label Studio'],
  Core: ['Business Intelligence', 'Dashboard Development', 'Feature Engineering', 'Computer Vision', 'NLP']
};

export const extras = {
  certifications: [
    {
      title: "IBM: Python Basics for Data Science",
      issuer: "edX",
      link: "https://courses.edx.org/certificates/33cc26c002f44ce1a45b3cbe40eeeacf"
    },
    {
      title: "IBM: SQL for Data Science",
      issuer: "edX",
      link: "https://courses.edx.org/certificates/6b2b7ac7955647248322415afca70180"
    },
    {
      title: "SQL Mastery with Generative AI",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-d9d16fce-ddfd-4a2a-93d6-3429d8ddd858/"
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/32c21eb4b4ca6335de81d956c72ce27a90720d9c2dc1cde59bae75f3a4e40a86"
    }
  ],

  activities: []
};
