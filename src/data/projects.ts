export const projects = [
  {
    title: 'AI Content Engine',
    status: 'Concept',
    summary: 'A structured workflow concept for ideation, prompts, review, and content production using AI-assisted processes.',
    businessProblem: 'Content teams often lose time across scattered ideation, revision, and publishing steps.',
    outcome: 'A clearer workflow for faster production, better review loops, and more consistent content outputs.',
    stack: ['Prompt Systems', 'Content Ops', 'Automation'],
    value: 'Improves content consistency and reduces manual production overhead.',
    href: '#'
  },
  {
    title: 'RAG Knowledge Assistant',
    status: 'Prototype',
    summary: 'An experimental retrieval-based assistant concept for organizing documents, notes, and internal knowledge.',
    businessProblem: 'Internal knowledge is often fragmented across documents, notes, and disconnected repositories.',
    outcome: 'A retrieval-first concept that helps teams find context faster and reduce repeated information hunts.',
    stack: ['RAG', 'Knowledge Management', 'Python'],
    value: 'Makes internal information easier to retrieve and reuse in day-to-day work.',
    href: '#'
  },
  {
    title: 'Automation Workflow Toolkit',
    status: 'Experiment',
    summary: 'Reusable automation patterns for reducing repetitive work and improving operational efficiency.',
    businessProblem: 'Operational work often depends on repetitive manual steps that drain time and introduce inconsistency.',
    outcome: 'A modular toolkit approach for automating recurring tasks and creating more reliable execution patterns.',
    stack: ['n8n', 'Workflow Design', 'AI Automation'],
    value: 'Cuts repetitive effort and creates more reliable execution across recurring tasks.',
    href: '#'
  }
] as const;
