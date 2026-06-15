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
    connections: ['Strategic Reading', 'Wealth Building', 'Money Mindset', 'Decision Making']
  },
  {
    title: 'Knowledge Management',
    summary: 'Structured thinking about how information is captured, connected, and made useful over time.',
    connections: ['Certifications', 'Notes', 'Internal Knowledge', 'Retrieval']
  }
] as const;

export type MindmapAccent = 'cyan' | 'purple' | 'green' | 'amber' | 'rose';

export type MindmapItem = {
  id: string;
  label: string;
  x: number;
  y: number;
};

export type MindmapCategory = {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: MindmapAccent;
  items: readonly MindmapItem[];
};

export type MindmapRelation = {
  from: string;
  to: string;
  kind: 'primary' | 'secondary' | 'bridge';
};

export type MindmapGraph = {
  center: {
    id: 'andy';
    label: string;
    x: number;
    y: number;
  };
  categories: readonly MindmapCategory[];
  relations: readonly MindmapRelation[];
};

export const mindmapGraph = {
  center: { id: 'andy', label: 'Andy Araya', x: 50, y: 50 },
  categories: [
    {
      id: 'business',
      label: 'Business Strategy',
      x: 50,
      y: 16,
      accent: 'amber',
      items: [
        { id: 'business-models', label: 'Business Models', x: 34, y: 8 },
        { id: 'digital-product-strategy', label: 'Digital Product Strategy', x: 43, y: 6 },
        { id: 'monetization', label: 'Monetization', x: 54, y: 6 },
        { id: 'passive-income', label: 'Passive Income', x: 64, y: 8 },
        { id: 'market-positioning', label: 'Market Positioning', x: 30, y: 16 },
        { id: 'value-proposition', label: 'Value Proposition', x: 70, y: 16 },
        { id: 'pricing-strategy', label: 'Pricing Strategy', x: 38, y: 23 },
        { id: 'scalable-services', label: 'Scalable Services', x: 62, y: 23 }
      ]
    },
    {
      id: 'software',
      label: 'Software Development',
      x: 78,
      y: 32,
      accent: 'green',
      items: [
        { id: 'frontend', label: 'Frontend', x: 86, y: 16 },
        { id: 'backend-logic', label: 'Backend Logic', x: 92, y: 24 },
        { id: 'astro', label: 'Astro', x: 70, y: 20 },
        { id: 'typescript', label: 'TypeScript', x: 81, y: 21 },
        { id: 'javascript', label: 'JavaScript', x: 92, y: 34 },
        { id: 'react', label: 'React', x: 67, y: 33 },
        { id: 'tailwind', label: 'Tailwind CSS', x: 89, y: 44 },
        { id: 'html-css', label: 'HTML/CSS', x: 70, y: 44 },
        { id: 'api-integrations', label: 'API Integrations', x: 93, y: 54 },
        { id: 'database-thinking', label: 'Database Thinking', x: 78, y: 48 },
        { id: 'supabase', label: 'Supabase', x: 65, y: 54 },
        { id: 'sql-mysql', label: 'SQL / MySQL', x: 82, y: 59 },
        { id: 'system-architecture', label: 'System Architecture', x: 72, y: 63 }
      ]
    },
    {
      id: 'ai-systems',
      label: 'AI Systems & Automation',
      x: 61,
      y: 42,
      accent: 'purple',
      items: [
        { id: 'ai-workflows', label: 'AI Workflows', x: 48, y: 28 },
        { id: 'n8n', label: 'n8n', x: 54, y: 31 },
        { id: 'ai-agents', label: 'AI Agents', x: 64, y: 28 },
        { id: 'rag-systems', label: 'RAG Systems', x: 56, y: 36 },
        { id: 'prompt-engineering', label: 'Prompt Engineering', x: 67, y: 37 },
        { id: 'whatsapp-automation', label: 'WhatsApp Automation', x: 45, y: 39 },
        { id: 'crm-automation', label: 'CRM Automation', x: 53, y: 45 },
        { id: 'process-automation', label: 'Process Automation', x: 68, y: 48 },
        { id: 'openai-api', label: 'OpenAI API', x: 44, y: 50 },
        { id: 'local-ai', label: 'Local AI', x: 58, y: 53 },
        { id: 'comfyui', label: 'ComfyUI', x: 70, y: 57 },
        { id: 'ollama', label: 'Ollama', x: 51, y: 58 },
        { id: 'agentic-workflows', label: 'Agentic Workflows', x: 62, y: 62 }
      ]
    },
    {
      id: 'marketing-growth',
      label: 'Marketing & Growth',
      x: 22,
      y: 32,
      accent: 'cyan',
      items: [
        { id: 'digital-marketing', label: 'Digital Marketing', x: 10, y: 16 },
        { id: 'social-strategy', label: 'Social Strategy', x: 19, y: 18 },
        { id: 'content-strategy', label: 'Content Strategy', x: 28, y: 18 },
        { id: 'paid-media', label: 'Paid Media', x: 8, y: 28 },
        { id: 'brand-positioning', label: 'Brand Positioning', x: 34, y: 28 },
        { id: 'community-building', label: 'Community Building', x: 13, y: 40 },
        { id: 'influencer-marketing', label: 'Influencer Marketing', x: 31, y: 40 },
        { id: 'ugc-strategy', label: 'UGC Strategy', x: 7, y: 50 },
        { id: 'campaign-strategy', label: 'Campaign Strategy', x: 22, y: 51 },
        { id: 'funnel-design', label: 'Funnel Design', x: 35, y: 50 },
        { id: 'conversion-optimization', label: 'Conversion Optimization', x: 21, y: 60 }
      ]
    },
    {
      id: 'creative-production',
      label: 'Creative Production',
      x: 22,
      y: 70,
      accent: 'rose',
      items: [
        { id: 'graphic-design', label: 'Graphic Design', x: 9, y: 63 },
        { id: 'web-design', label: 'Web Design', x: 17, y: 58 },
        { id: 'ux-ui', label: 'UX/UI Design', x: 30, y: 61 },
        { id: 'animation-2d', label: '2D Animation', x: 8, y: 73 },
        { id: 'motion-graphics', label: 'Motion Graphics', x: 19, y: 80 },
        { id: 'modeling-3d', label: '3D Modeling', x: 33, y: 74 },
        { id: 'photography', label: 'Photography', x: 9, y: 86 },
        { id: 'video-production', label: 'Video Production', x: 21, y: 91 },
        { id: 'art-direction', label: 'Art Direction', x: 35, y: 86 },
        { id: 'visual-storytelling', label: 'Visual Storytelling', x: 45, y: 82 },
        { id: 'voice-over', label: 'Voice Over', x: 36, y: 94 }
      ]
    },
    {
      id: 'product-leadership',
      label: 'Product & Project Leadership',
      x: 78,
      y: 70,
      accent: 'purple',
      items: [
        { id: 'project-management', label: 'Project Management', x: 66, y: 70 },
        { id: 'product-thinking', label: 'Product Thinking', x: 75, y: 64 },
        { id: 'client-strategy', label: 'Client Strategy', x: 86, y: 64 },
        { id: 'mvp-definition', label: 'MVP Definition', x: 92, y: 70 },
        { id: 'roadmap-planning', label: 'Roadmap Planning', x: 67, y: 80 },
        { id: 'technical-scoping', label: 'Technical Scoping', x: 80, y: 82 },
        { id: 'cross-functional', label: 'Cross-functional Execution', x: 92, y: 82 },
        { id: 'strategic-consulting', label: 'Strategic Consulting', x: 70, y: 91 },
        { id: 'requirements-analysis', label: 'Requirements Analysis', x: 86, y: 92 }
      ]
    },
    {
      id: 'legal-analytical',
      label: 'Legal & Analytical Thinking',
      x: 50,
      y: 84,
      accent: 'green',
      items: [
        { id: 'legal-studies', label: 'Legal Studies', x: 39, y: 70 },
        { id: 'contract-awareness', label: 'Contract Awareness', x: 50, y: 72 },
        { id: 'risk-analysis', label: 'Risk Analysis', x: 60, y: 71 },
        { id: 'structured-reasoning', label: 'Structured Reasoning', x: 43, y: 79 },
        { id: 'systems-thinking', label: 'Systems Thinking', x: 57, y: 79 },
        { id: 'financial-education', label: 'Financial Education', x: 40, y: 90 },
        { id: 'business-analysis', label: 'Business Analysis', x: 60, y: 90 }
      ]
    },
    {
      id: 'strategic-reading',
      label: 'Strategic Reading',
      x: 50,
      y: 64,
      accent: 'amber',
      items: [
        { id: 'book-ai-superpowers', label: 'AI Superpowers', x: 42, y: 54 },
        { id: 'book-blue-ocean-strategy', label: 'Blue Ocean Strategy', x: 49, y: 51 },
        { id: 'book-money-code', label: 'The Money Code', x: 58, y: 54 },
        { id: 'book-profit-first', label: 'Profit First', x: 42, y: 63 },
        { id: 'book-rich-dad-poor-dad', label: 'Rich Dad Poor Dad', x: 58, y: 63 },
        { id: 'book-10x-rule', label: 'The 10X Rule', x: 43, y: 72 },
        { id: 'book-lean-startup', label: 'The Lean Startup', x: 50, y: 75 },
        { id: 'book-think-like-amazon', label: 'Think Like Amazon', x: 57, y: 72 },
        { id: 'data-advantage', label: 'Data Advantage', x: 39, y: 58 },
        { id: 'market-creation', label: 'Market Creation', x: 47, y: 56 },
        { id: 'market-value', label: 'Market Value', x: 61, y: 58 },
        { id: 'profit-discipline', label: 'Profit Discipline', x: 39, y: 67 },
        { id: 'investment-mindset', label: 'Investment Mindset', x: 61, y: 67 },
        { id: 'ownership', label: 'Ownership', x: 42, y: 78 },
        { id: 'validated-learning', label: 'Validated Learning', x: 50, y: 81 },
        { id: 'customer-superpowers', label: 'Customer Superpowers', x: 59, y: 78 }
      ]
    }
  ],
  relations: [
    { from: 'andy', to: 'business', kind: 'primary' },
    { from: 'andy', to: 'software', kind: 'primary' },
    { from: 'andy', to: 'ai-systems', kind: 'primary' },
    { from: 'andy', to: 'marketing-growth', kind: 'primary' },
    { from: 'andy', to: 'creative-production', kind: 'primary' },
    { from: 'andy', to: 'product-leadership', kind: 'primary' },
    { from: 'andy', to: 'legal-analytical', kind: 'primary' },
    { from: 'andy', to: 'strategic-reading', kind: 'primary' },
    { from: 'business', to: 'digital-product-strategy', kind: 'secondary' },
    { from: 'business', to: 'business-models', kind: 'secondary' },
    { from: 'business', to: 'monetization', kind: 'secondary' },
    { from: 'business', to: 'passive-income', kind: 'secondary' },
    { from: 'business', to: 'market-positioning', kind: 'secondary' },
    { from: 'business', to: 'value-proposition', kind: 'secondary' },
    { from: 'business', to: 'pricing-strategy', kind: 'secondary' },
    { from: 'business', to: 'scalable-services', kind: 'secondary' },
    { from: 'software', to: 'frontend', kind: 'secondary' },
    { from: 'software', to: 'backend-logic', kind: 'secondary' },
    { from: 'software', to: 'astro', kind: 'secondary' },
    { from: 'software', to: 'typescript', kind: 'secondary' },
    { from: 'software', to: 'javascript', kind: 'secondary' },
    { from: 'software', to: 'react', kind: 'secondary' },
    { from: 'software', to: 'tailwind', kind: 'secondary' },
    { from: 'software', to: 'html-css', kind: 'secondary' },
    { from: 'software', to: 'api-integrations', kind: 'secondary' },
    { from: 'software', to: 'database-thinking', kind: 'secondary' },
    { from: 'software', to: 'supabase', kind: 'secondary' },
    { from: 'software', to: 'sql-mysql', kind: 'secondary' },
    { from: 'software', to: 'system-architecture', kind: 'secondary' },
    { from: 'ai-systems', to: 'ai-workflows', kind: 'secondary' },
    { from: 'ai-systems', to: 'n8n', kind: 'secondary' },
    { from: 'ai-systems', to: 'ai-agents', kind: 'secondary' },
    { from: 'ai-systems', to: 'rag-systems', kind: 'secondary' },
    { from: 'ai-systems', to: 'prompt-engineering', kind: 'secondary' },
    { from: 'ai-systems', to: 'whatsapp-automation', kind: 'secondary' },
    { from: 'ai-systems', to: 'crm-automation', kind: 'secondary' },
    { from: 'ai-systems', to: 'process-automation', kind: 'secondary' },
    { from: 'ai-systems', to: 'openai-api', kind: 'secondary' },
    { from: 'ai-systems', to: 'local-ai', kind: 'secondary' },
    { from: 'ai-systems', to: 'comfyui', kind: 'secondary' },
    { from: 'ai-systems', to: 'ollama', kind: 'secondary' },
    { from: 'ai-systems', to: 'agentic-workflows', kind: 'secondary' },
    { from: 'marketing-growth', to: 'digital-marketing', kind: 'secondary' },
    { from: 'marketing-growth', to: 'social-strategy', kind: 'secondary' },
    { from: 'marketing-growth', to: 'content-strategy', kind: 'secondary' },
    { from: 'marketing-growth', to: 'paid-media', kind: 'secondary' },
    { from: 'marketing-growth', to: 'brand-positioning', kind: 'secondary' },
    { from: 'marketing-growth', to: 'community-building', kind: 'secondary' },
    { from: 'marketing-growth', to: 'influencer-marketing', kind: 'secondary' },
    { from: 'marketing-growth', to: 'ugc-strategy', kind: 'secondary' },
    { from: 'marketing-growth', to: 'campaign-strategy', kind: 'secondary' },
    { from: 'marketing-growth', to: 'funnel-design', kind: 'secondary' },
    { from: 'marketing-growth', to: 'conversion-optimization', kind: 'secondary' },
    { from: 'creative-production', to: 'graphic-design', kind: 'secondary' },
    { from: 'creative-production', to: 'web-design', kind: 'secondary' },
    { from: 'creative-production', to: 'ux-ui', kind: 'secondary' },
    { from: 'creative-production', to: 'animation-2d', kind: 'secondary' },
    { from: 'creative-production', to: 'motion-graphics', kind: 'secondary' },
    { from: 'creative-production', to: 'modeling-3d', kind: 'secondary' },
    { from: 'creative-production', to: 'photography', kind: 'secondary' },
    { from: 'creative-production', to: 'video-production', kind: 'secondary' },
    { from: 'creative-production', to: 'art-direction', kind: 'secondary' },
    { from: 'creative-production', to: 'visual-storytelling', kind: 'secondary' },
    { from: 'creative-production', to: 'voice-over', kind: 'secondary' },
    { from: 'product-leadership', to: 'project-management', kind: 'secondary' },
    { from: 'product-leadership', to: 'product-thinking', kind: 'secondary' },
    { from: 'product-leadership', to: 'client-strategy', kind: 'secondary' },
    { from: 'product-leadership', to: 'mvp-definition', kind: 'secondary' },
    { from: 'product-leadership', to: 'roadmap-planning', kind: 'secondary' },
    { from: 'product-leadership', to: 'technical-scoping', kind: 'secondary' },
    { from: 'product-leadership', to: 'cross-functional', kind: 'secondary' },
    { from: 'product-leadership', to: 'strategic-consulting', kind: 'secondary' },
    { from: 'product-leadership', to: 'requirements-analysis', kind: 'secondary' },
    { from: 'legal-analytical', to: 'legal-studies', kind: 'secondary' },
    { from: 'legal-analytical', to: 'contract-awareness', kind: 'secondary' },
    { from: 'legal-analytical', to: 'risk-analysis', kind: 'secondary' },
    { from: 'legal-analytical', to: 'structured-reasoning', kind: 'secondary' },
    { from: 'legal-analytical', to: 'systems-thinking', kind: 'secondary' },
    { from: 'legal-analytical', to: 'financial-education', kind: 'secondary' },
    { from: 'legal-analytical', to: 'business-analysis', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-ai-superpowers', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-blue-ocean-strategy', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-money-code', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-profit-first', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-rich-dad-poor-dad', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-10x-rule', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-lean-startup', kind: 'secondary' },
    { from: 'strategic-reading', to: 'book-think-like-amazon', kind: 'secondary' },
    { from: 'strategic-reading', to: 'data-advantage', kind: 'secondary' },
    { from: 'strategic-reading', to: 'market-creation', kind: 'secondary' },
    { from: 'strategic-reading', to: 'market-value', kind: 'secondary' },
    { from: 'strategic-reading', to: 'profit-discipline', kind: 'secondary' },
    { from: 'strategic-reading', to: 'investment-mindset', kind: 'secondary' },
    { from: 'strategic-reading', to: 'ownership', kind: 'secondary' },
    { from: 'strategic-reading', to: 'validated-learning', kind: 'secondary' },
    { from: 'strategic-reading', to: 'customer-superpowers', kind: 'secondary' },
    { from: 'digital-product-strategy', to: 'product-thinking', kind: 'bridge' },
    { from: 'system-architecture', to: 'ai-workflows', kind: 'bridge' },
    { from: 'api-integrations', to: 'openai-api', kind: 'bridge' },
    { from: 'content-strategy', to: 'visual-storytelling', kind: 'bridge' },
    { from: 'funnel-design', to: 'conversion-optimization', kind: 'bridge' },
    { from: 'risk-analysis', to: 'technical-scoping', kind: 'bridge' },
    { from: 'systems-thinking', to: 'process-automation', kind: 'bridge' },
    { from: 'book-ai-superpowers', to: 'data-advantage', kind: 'bridge' },
    { from: 'book-ai-superpowers', to: 'ai-systems', kind: 'bridge' },
    { from: 'book-ai-superpowers', to: 'process-automation', kind: 'bridge' },
    { from: 'book-ai-superpowers', to: 'business-analysis', kind: 'bridge' },
    { from: 'book-blue-ocean-strategy', to: 'market-creation', kind: 'bridge' },
    { from: 'book-blue-ocean-strategy', to: 'business', kind: 'bridge' },
    { from: 'book-blue-ocean-strategy', to: 'market-positioning', kind: 'bridge' },
    { from: 'book-blue-ocean-strategy', to: 'value-proposition', kind: 'bridge' },
    { from: 'book-money-code', to: 'market-value', kind: 'bridge' },
    { from: 'book-money-code', to: 'financial-education', kind: 'bridge' },
    { from: 'book-money-code', to: 'business-models', kind: 'bridge' },
    { from: 'book-profit-first', to: 'profit-discipline', kind: 'bridge' },
    { from: 'book-profit-first', to: 'monetization', kind: 'bridge' },
    { from: 'book-profit-first', to: 'client-strategy', kind: 'bridge' },
    { from: 'book-rich-dad-poor-dad', to: 'investment-mindset', kind: 'bridge' },
    { from: 'book-rich-dad-poor-dad', to: 'financial-education', kind: 'bridge' },
    { from: 'book-rich-dad-poor-dad', to: 'risk-analysis', kind: 'bridge' },
    { from: 'book-10x-rule', to: 'ownership', kind: 'bridge' },
    { from: 'book-10x-rule', to: 'cross-functional', kind: 'bridge' },
    { from: 'book-10x-rule', to: 'conversion-optimization', kind: 'bridge' },
    { from: 'book-lean-startup', to: 'validated-learning', kind: 'bridge' },
    { from: 'book-lean-startup', to: 'product-thinking', kind: 'bridge' },
    { from: 'book-lean-startup', to: 'mvp-definition', kind: 'bridge' },
    { from: 'book-lean-startup', to: 'digital-product-strategy', kind: 'bridge' },
    { from: 'book-think-like-amazon', to: 'customer-superpowers', kind: 'bridge' },
    { from: 'book-think-like-amazon', to: 'value-proposition', kind: 'bridge' },
    { from: 'book-think-like-amazon', to: 'digital-product-strategy', kind: 'bridge' },
    { from: 'book-think-like-amazon', to: 'process-automation', kind: 'bridge' },
    { from: 'data-advantage', to: 'ai-workflows', kind: 'bridge' },
    { from: 'market-creation', to: 'market-positioning', kind: 'bridge' },
    { from: 'market-value', to: 'value-proposition', kind: 'bridge' },
    { from: 'profit-discipline', to: 'monetization', kind: 'bridge' },
    { from: 'investment-mindset', to: 'financial-education', kind: 'bridge' },
    { from: 'ownership', to: 'cross-functional', kind: 'bridge' },
    { from: 'validated-learning', to: 'mvp-definition', kind: 'bridge' },
    { from: 'customer-superpowers', to: 'digital-product-strategy', kind: 'bridge' }
  ]
} satisfies MindmapGraph;

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
