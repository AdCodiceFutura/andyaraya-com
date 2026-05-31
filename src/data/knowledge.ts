export const mindscapeDomains = [
  {
    title: 'Creative Technology',
    summary: 'The space where strategy, interaction, digital experiences, and technical experimentation meet.',
    connections: ['Digital Experiences', 'Creative Direction', 'Interaction Systems', 'Product Thinking']
  },
  {
    title: 'AI Automation',
    summary: 'Applied systems for orchestrating tasks, prompts, reviews, and internal workflows.',
    connections: ['n8n', 'Prompt Engineering', 'Workflow Optimization', 'RAG Systems']
  },
  {
    title: 'Software Development',
    summary: 'Formal technical training plus practical implementation across structured logic and tools.',
    connections: ['CENFOTEC', 'Python', 'SQL', 'GitHub']
  },
  {
    title: 'Product Strategy',
    summary: 'Framing problems, shaping useful solutions, and aligning systems with business outcomes.',
    connections: ['AI Product Management', 'Roadmapping', 'Delivery', 'Prioritization']
  },
  {
    title: 'Project Leadership',
    summary: 'The coordination layer between strategy, stakeholders, timelines, and delivery.',
    connections: ['Stakeholder Communication', 'Delivery Planning', 'Team Coordination', 'Execution']
  },
  {
    title: 'Business Strategy',
    summary: 'A business-oriented lens for value creation, process improvement, and digital opportunities.',
    connections: ['Business Process Optimization', 'Entrepreneurship', 'Monetization', 'Operational Thinking']
  },
  {
    title: 'Digital Marketing',
    summary: 'A practical understanding of growth, visibility, and message-to-market alignment.',
    connections: ['SEO', 'Meta Ads', 'Google Ads', 'Campaign Thinking']
  },
  {
    title: 'Content Systems',
    summary: 'Structured approaches to content planning, production, and optimization.',
    connections: ['Content Operations', 'Editorial Workflows', 'Prompt Systems', 'Reuse']
  },
  {
    title: 'Design Thinking',
    summary: 'Problem framing, experience design, and communication clarity shaped by years in creative work.',
    connections: ['Visual Hierarchy', 'Brand Systems', 'UX Thinking', 'Storytelling']
  },
  {
    title: 'Financial Education',
    summary: 'Continuous learning around money, leverage, entrepreneurship, and long-term thinking.',
    connections: ['Books', 'Wealth Building', 'Money Mindset', 'Decision Making']
  },
  {
    title: 'Knowledge Management',
    summary: 'Structured thinking about how information is captured, connected, and made useful over time.',
    connections: ['Certifications', 'Notes', 'Internal Knowledge', 'Retrieval']
  }
] as const;

export const mindmapGraph = {
  center: 'Andy Araya',
  domains: [
    'Creative Technology',
    'AI Automation',
    'Software Development',
    'Product Strategy',
    'Project Leadership',
    'Business Strategy',
    'Digital Marketing',
    'Financial Education',
    'Knowledge Management'
  ],
  concepts: [
    'Python',
    'SQL',
    'GitHub',
    'n8n',
    'RAG',
    'Prompt Engineering',
    'OpenAI',
    'Workflow Design',
    'Entrepreneurship',
    'SEO',
    'Meta Ads',
    'Google Ads',
    'Product Thinking',
    'Books',
    'Certifications'
  ]
} as const;

export const credentialKnowledgeItems = [
  {
    title: 'IBM AI Product Manager Professional Certificate',
    summary: 'Credential in AI product thinking and practical delivery.',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/9C8QYTSB1LQW'
  },
  {
    title: 'Software Development Technician',
    summary: 'Formal software development training through Universidad CENFOTEC.',
    verificationUrl: 'https://www.acreditta.com/credential/3f8315c5-9364-4c23-abcd-abfe36cd9369'
  },
  {
    title: 'Database Programming I & II',
    summary: 'Verified database programming coursework from Universidad CENFOTEC.',
    verificationUrl: 'https://www.acreditta.com/credential/3df52a44-2248-499a-bcdb-ab46783dc2f5'
  }
] as const;
