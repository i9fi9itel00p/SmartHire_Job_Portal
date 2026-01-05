export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Remote';
  salary: string;
  experience: string;
  description: string;
  skills: string[];
  category: string;
  postedDate: string;
  logo: string;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    experience: '5+ years',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building scalable, performant web applications using modern frameworks and best practices. This role offers exciting challenges and opportunities to work on cutting-edge projects.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
    category: 'IT',
    postedDate: '2 days ago',
    logo: '💻'
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Growth Marketing Inc',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $120k',
    experience: '3-5 years',
    description: 'Join our marketing team as a Marketing Manager. Lead campaigns, analyze metrics, and drive brand growth. You will work closely with cross-functional teams to develop and execute marketing strategies that align with business objectives.',
    skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media', 'Email Marketing'],
    category: 'Marketing',
    postedDate: '1 week ago',
    logo: '📊'
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Studios',
    location: 'Remote',
    type: 'Remote',
    salary: '$80k - $110k',
    experience: '2-4 years',
    description: 'Create beautiful, intuitive user experiences for web and mobile applications. We are seeking a talented designer who can translate complex requirements into elegant, user-friendly designs.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research'],
    category: 'Design',
    postedDate: '3 days ago',
    logo: '🎨'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataMinds AI',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$130k - $170k',
    experience: '4+ years',
    description: 'Analyze complex datasets and build machine learning models to drive business decisions. Work on exciting AI/ML projects in a collaborative environment with access to cutting-edge technology.',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Data Visualization'],
    category: 'IT',
    postedDate: '5 days ago',
    logo: '📈'
  },
  {
    id: '5',
    title: 'Registered Nurse',
    company: 'City General Hospital',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$65k - $85k',
    experience: '1-3 years',
    description: 'Provide quality patient care in a fast-paced hospital environment. We are looking for compassionate nurses who are dedicated to making a difference in patients\' lives.',
    skills: ['Patient Care', 'Medical Records', 'Emergency Response', 'Communication'],
    category: 'Healthcare',
    postedDate: '4 days ago',
    logo: '⚕️'
  },
  {
    id: '6',
    title: 'Financial Analyst',
    company: 'Global Finance Corp',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$75k - $95k',
    experience: '2-3 years',
    description: 'Analyze financial data, prepare reports, and provide insights to support strategic business decisions. Join a dynamic finance team in a fast-growing organization.',
    skills: ['Excel', 'Financial Modeling', 'SQL', 'Power BI', 'Analysis'],
    category: 'Finance',
    postedDate: '1 week ago',
    logo: '💰'
  },
  {
    id: '7',
    title: 'Backend Developer',
    company: 'CloudTech Systems',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110k - $140k',
    experience: '3-5 years',
    description: 'Build and maintain scalable backend systems and APIs. Work with modern technologies and cloud infrastructure to deliver robust solutions.',
    skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs'],
    category: 'IT',
    postedDate: '2 days ago',
    logo: '⚙️'
  },
  {
    id: '8',
    title: 'Content Writer',
    company: 'ContentPro Media',
    location: 'Remote',
    type: 'Part-time',
    salary: '$40k - $60k',
    experience: '1-2 years',
    description: 'Create engaging content for blogs, websites, and social media. We are looking for creative writers with excellent communication skills.',
    skills: ['Copywriting', 'SEO Writing', 'Research', 'Editing', 'WordPress'],
    category: 'Marketing',
    postedDate: '6 days ago',
    logo: '✍️'
  },
  {
    id: '9',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$130k - $160k',
    experience: '5+ years',
    description: 'Lead product strategy and roadmap for our flagship products. Work cross-functionally to deliver features that delight users and drive business growth.',
    skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Stakeholder Management', 'UX'],
    category: 'IT',
    postedDate: '1 day ago',
    logo: '🚀'
  },
  {
    id: '10',
    title: 'Graphic Designer',
    company: 'Design Hub',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$60k - $80k',
    experience: '2-4 years',
    description: 'Create visual concepts and designs for various digital and print media. Join a creative team working on exciting branding and marketing projects.',
    skills: ['Photoshop', 'Illustrator', 'Branding', 'Typography', 'Print Design'],
    category: 'Design',
    postedDate: '3 days ago',
    logo: '🖼️'
  },
  {
    id: '11',
    title: 'DevOps Engineer',
    company: 'Infrastructure Pro',
    location: 'Remote',
    type: 'Remote',
    salary: '$115k - $145k',
    experience: '4+ years',
    description: 'Manage and optimize cloud infrastructure, CI/CD pipelines, and deployment processes. Ensure high availability and performance of production systems.',
    skills: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Linux'],
    category: 'IT',
    postedDate: '1 week ago',
    logo: '☁️'
  },
  {
    id: '12',
    title: 'Marketing Intern',
    company: 'StartUp Ventures',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$20/hour',
    experience: '0-1 years',
    description: 'Learn marketing fundamentals in a fast-paced startup environment. Assist with campaigns, social media, and content creation.',
    skills: ['Social Media', 'Content Creation', 'Communication', 'Microsoft Office'],
    category: 'Marketing',
    postedDate: '2 days ago',
    logo: '📱'
  },
  {
    id: '13',
    title: 'Physical Therapist',
    company: 'HealthCare Plus',
    location: 'Miami, FL',
    type: 'Full-time',
    salary: '$70k - $90k',
    experience: '2-5 years',
    description: 'Provide therapeutic services to patients recovering from injuries or managing chronic conditions. Work in a supportive, patient-centered environment.',
    skills: ['Patient Assessment', 'Treatment Planning', 'Rehabilitation', 'Communication'],
    category: 'Healthcare',
    postedDate: '5 days ago',
    logo: '🏥'
  },
  {
    id: '14',
    title: 'Investment Banker',
    company: 'Elite Capital',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$150k - $200k',
    experience: '3-7 years',
    description: 'Advise clients on financial transactions including mergers, acquisitions, and capital raising. Work on high-profile deals in a challenging environment.',
    skills: ['Financial Analysis', 'Valuation', 'Excel', 'Presentation', 'Negotiation'],
    category: 'Finance',
    postedDate: '4 days ago',
    logo: '💼'
  },
  {
    id: '15',
    title: 'Mobile App Developer',
    company: 'AppWorks Studio',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$100k - $130k',
    experience: '3-5 years',
    description: 'Develop native mobile applications for iOS and Android platforms. Create smooth, intuitive user experiences for millions of users.',
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Mobile UI'],
    category: 'IT',
    postedDate: '1 week ago',
    logo: '📱'
  }
];

export const categories = [
  { name: 'IT', icon: '💻', count: 8 },
  { name: 'Marketing', icon: '📊', count: 3 },
  { name: 'Healthcare', icon: '⚕️', count: 2 },
  { name: 'Finance', icon: '💰', count: 2 },
  { name: 'Design', icon: '🎨', count: 2 },
  { name: 'Sales', icon: '📈', count: 1 }
];
