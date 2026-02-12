import { Stage } from './types';

export interface Capability {
  id: string;
  stage: Stage;
  label: string;
  summary: string;
  howCopilotHelps: string[];
  demoFlow: string[];
  prompts: {
    title: string;
    promptText: string;
  }[];
  governanceNotes: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export const capabilityData: Capability[] = [
  {
    id: 'issues',
    stage: 'Plan',
    label: 'Issues',
    summary: 'GitHub Issues help teams track bugs, features, and tasks. Copilot enhances issue creation with AI-powered suggestions and automatic labeling.',
    howCopilotHelps: [
      'Suggests issue templates based on content',
      'Auto-generates issue descriptions from brief inputs',
      'Recommends labels and assignees',
      'Links related issues automatically'
    ],
    demoFlow: [
      'Open a new issue in your repository',
      'Type a brief description like "Fix login timeout"',
      'Watch Copilot expand the description with context',
      'Accept suggested labels and assignees',
      'Submit the fully-formed issue'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Help me write an issue for a bug where users are getting logged out after 5 minutes of inactivity. Include steps to reproduce and expected behavior.'
      }
    ],
    governanceNotes: [
      'Issue content is processed within your GitHub environment',
      'Suggestions respect repository visibility settings'
    ],
    links: [
      { label: 'GitHub Issues Docs', url: 'https://docs.github.com/issues' }
    ]
  },
  {
    id: 'projects',
    stage: 'Plan',
    label: 'Projects',
    summary: 'GitHub Projects provides flexible project management with boards, tables, and roadmaps. Copilot helps automate project workflows and generate insights.',
    howCopilotHelps: [
      'Suggests project views and groupings',
      'Automates status updates based on PR activity',
      'Generates sprint summaries',
      'Recommends priority ordering'
    ],
    demoFlow: [
      'Open your project board',
      'Ask Copilot to analyze current sprint progress',
      'Review the generated summary',
      'Use suggestions to reorder priorities',
      'Export the status report'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Analyze this sprint and tell me which items are at risk of not being completed based on their age and complexity.'
      }
    ],
    governanceNotes: [
      'Project data stays within your organization',
      'Analytics are computed on-demand'
    ],
    links: [
      { label: 'GitHub Projects Docs', url: 'https://docs.github.com/issues/planning-and-tracking-with-projects' }
    ]
  },
  {
    id: 'spaces',
    stage: 'Plan',
    label: 'Spaces',
    summary: 'Spaces organize related repositories and resources for teams. Copilot helps navigate and understand complex organizational structures.',
    howCopilotHelps: [
      'Maps dependencies across repositories',
      'Identifies related code and documentation',
      'Suggests team organization patterns',
      'Provides cross-repo search and insights'
    ],
    demoFlow: [
      'Navigate to your organization Spaces',
      'Ask Copilot about repository relationships',
      'View the generated dependency map',
      'Click through to related resources'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Show me all repositories in this space that depend on the authentication service and their current versions.'
      }
    ],
    governanceNotes: [
      'Access respects existing repository permissions',
      'Cross-repo analysis limited to accessible repos'
    ],
    links: [
      { label: 'Spaces Overview', url: 'https://docs.github.com/organizations' }
    ]
  },
  {
    id: 'planning',
    stage: 'Plan',
    label: '/planning',
    summary: 'The /planning skill helps break down high-level goals into actionable issues and tasks, creating comprehensive implementation plans.',
    howCopilotHelps: [
      'Converts feature requests into structured plans',
      'Creates sub-issues with dependencies',
      'Estimates complexity and suggests milestones',
      'Identifies technical requirements'
    ],
    demoFlow: [
      'Open Copilot Chat in your IDE or GitHub',
      'Type /planning followed by your feature description',
      'Review the generated breakdown',
      'Approve to create issues automatically',
      'Assign team members to generated tasks'
    ],
    prompts: [
      {
        title: 'VS Code',
        promptText: '/planning Add user authentication with OAuth support for Google and GitHub, including session management and logout functionality'
      },
      {
        title: 'Copilot Chat',
        promptText: '/planning Break down this epic into implementable user stories with acceptance criteria'
      }
    ],
    governanceNotes: [
      'Plans are generated based on your codebase context',
      'Issue creation requires appropriate permissions'
    ],
    links: [
      { label: 'Copilot Skills', url: 'https://docs.github.com/copilot' }
    ]
  },
  {
    id: 'teams-slack',
    stage: 'Plan',
    label: 'Teams + Slack',
    summary: 'Integration with Microsoft Teams and Slack brings GitHub notifications and Copilot capabilities directly into your team communication channels.',
    howCopilotHelps: [
      'Answers questions about repositories in chat',
      'Provides PR and issue summaries on demand',
      'Notifies teams of important events',
      'Enables code search from messaging apps'
    ],
    demoFlow: [
      'Install the GitHub app in your Slack workspace',
      'Link your GitHub account',
      'Ask @github about a repository or PR',
      'View the AI-generated summary',
      'Click through to take action on GitHub'
    ],
    prompts: [
      {
        title: 'Slack',
        promptText: '@github summarize the open PRs in our frontend repo that need review'
      }
    ],
    governanceNotes: [
      'Slack integration respects GitHub permissions',
      'Conversations are not stored by GitHub'
    ],
    links: [
      { label: 'GitHub for Slack', url: 'https://slack.github.com' }
    ]
  },
  {
    id: 'editor-ides',
    stage: 'Code',
    label: 'Editor/IDEs',
    summary: 'Copilot integrates natively with VS Code, JetBrains IDEs, Neovim, and Visual Studio, providing inline code suggestions as you type.',
    howCopilotHelps: [
      'Generates code completions in real-time',
      'Understands context from open files',
      'Suggests entire functions and classes',
      'Learns from your coding patterns'
    ],
    demoFlow: [
      'Open a file in your IDE',
      'Start typing a function signature',
      'View the ghost text suggestion',
      'Press Tab to accept or keep typing',
      'Use Ctrl+Enter to see alternative suggestions'
    ],
    prompts: [
      {
        title: 'VS Code',
        promptText: '// Create a function that validates email addresses using regex'
      }
    ],
    governanceNotes: [
      'Code context sent to Copilot is not stored',
      'Suggestions are generated in real-time',
      'Enterprise customers can configure data handling'
    ],
    links: [
      { label: 'VS Code Extension', url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot' },
      { label: 'JetBrains Plugin', url: 'https://plugins.jetbrains.com/plugin/17718-github-copilot' }
    ]
  },
  {
    id: 'copilot-cli',
    stage: 'Code',
    label: 'Copilot CLI',
    summary: 'GitHub Copilot in the CLI helps you compose commands, understand error messages, and automate terminal workflows using natural language.',
    howCopilotHelps: [
      'Translates natural language to shell commands',
      'Explains complex command outputs',
      'Suggests git commands for common operations',
      'Helps debug error messages'
    ],
    demoFlow: [
      'Install gh copilot extension',
      'Type gh copilot suggest followed by your intent',
      'Review the suggested command',
      'Press Enter to execute or edit first',
      'Use gh copilot explain for command breakdowns'
    ],
    prompts: [
      {
        title: 'Copilot CLI',
        promptText: 'gh copilot suggest "find all JavaScript files modified in the last week and count lines of code"'
      },
      {
        title: 'Copilot CLI',
        promptText: 'gh copilot explain "git rebase -i HEAD~5"'
      }
    ],
    governanceNotes: [
      'Commands are executed locally',
      'No command history is stored by GitHub'
    ],
    links: [
      { label: 'CLI Documentation', url: 'https://docs.github.com/copilot/github-copilot-in-the-cli' }
    ]
  },
  {
    id: 'coding',
    stage: 'Code',
    label: '/coding',
    summary: 'The /coding skill provides an agentic coding experience where Copilot can make multi-file changes, refactor code, and implement features autonomously.',
    howCopilotHelps: [
      'Makes changes across multiple files',
      'Refactors code with understanding of patterns',
      'Implements features from descriptions',
      'Handles dependencies and imports automatically'
    ],
    demoFlow: [
      'Open Copilot Chat in your IDE',
      'Describe the feature you want to build',
      'Review the proposed changes',
      'Accept individual changes or all at once',
      'Test the implemented feature'
    ],
    prompts: [
      {
        title: 'VS Code',
        promptText: '/coding Add dark mode support to this React app using CSS variables and a toggle component'
      },
      {
        title: 'VS Code',
        promptText: '/coding Refactor this class-based component to use React hooks'
      }
    ],
    governanceNotes: [
      'Changes require developer review before applying',
      'All modifications are tracked in git'
    ],
    links: [
      { label: 'Copilot Edits', url: 'https://docs.github.com/copilot' }
    ]
  },
  {
    id: 'spark-app',
    stage: 'Code',
    label: '/spark-app',
    summary: 'Spark lets you create and deploy micro-apps instantly using natural language. Describe what you need and get a working application.',
    howCopilotHelps: [
      'Generates complete web applications',
      'Creates interactive prototypes quickly',
      'Builds internal tools and dashboards',
      'Deploys apps with one click'
    ],
    demoFlow: [
      'Open GitHub Spark',
      'Describe your app in natural language',
      'Watch the app generate in real-time',
      'Iterate with follow-up instructions',
      'Deploy and share with your team'
    ],
    prompts: [
      {
        title: 'Spark',
        promptText: 'Build a team standup tracker where people can post daily updates and view history by date'
      }
    ],
    governanceNotes: [
      'Spark apps run in isolated environments',
      'Data is stored per-app with user consent'
    ],
    links: [
      { label: 'GitHub Spark', url: 'https://githubnext.com/projects/github-spark' }
    ]
  },
  {
    id: 'custom-agents-code',
    stage: 'Code',
    label: 'Custom agents',
    summary: 'Build custom Copilot agents that understand your specific codebase, tools, and workflows. Extend Copilot with domain-specific knowledge.',
    howCopilotHelps: [
      'Create agents with custom knowledge bases',
      'Connect to internal APIs and tools',
      'Define specialized workflows',
      'Share agents across your organization'
    ],
    demoFlow: [
      'Navigate to Copilot Extensions settings',
      'Create a new custom agent',
      'Define the agent skills and knowledge',
      'Test with sample queries',
      'Deploy to your organization'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: '@my-agent How do I connect to our internal payment service API?'
      }
    ],
    governanceNotes: [
      'Custom agents respect org permissions',
      'Knowledge base data remains within your control'
    ],
    links: [
      { label: 'Copilot Extensions', url: 'https://docs.github.com/copilot/building-copilot-extensions' }
    ]
  },
  {
    id: 'pull-requests',
    stage: 'Verify',
    label: 'Pull Requests',
    summary: 'Copilot enhances the pull request experience with AI-generated summaries, smart review suggestions, and automated documentation.',
    howCopilotHelps: [
      'Generates PR descriptions from commits',
      'Summarizes changes for reviewers',
      'Suggests reviewers based on code ownership',
      'Highlights potential issues'
    ],
    demoFlow: [
      'Create a new pull request',
      'Click "Generate summary" with Copilot',
      'Review the AI-generated description',
      'Adjust and submit the PR',
      'View Copilot suggestions in review'
    ],
    prompts: [
      {
        title: 'PR comment',
        promptText: '@copilot summarize the changes in this PR and highlight any breaking changes'
      }
    ],
    governanceNotes: [
      'PR analysis uses diff content only',
      'Summaries respect repository visibility'
    ],
    links: [
      { label: 'Pull Requests Docs', url: 'https://docs.github.com/pull-requests' }
    ]
  },
  {
    id: 'code-review',
    stage: 'Verify',
    label: '/code-review',
    summary: 'Copilot Code Review provides automated, AI-powered code review that catches bugs, security issues, and suggests improvements before human review.',
    howCopilotHelps: [
      'Reviews code for bugs and anti-patterns',
      'Identifies security vulnerabilities',
      'Suggests performance improvements',
      'Enforces coding standards'
    ],
    demoFlow: [
      'Open a pull request',
      'Request review from Copilot',
      'View inline suggestions and comments',
      'Apply suggested fixes with one click',
      'Re-request review after changes'
    ],
    prompts: [
      {
        title: 'PR comment',
        promptText: '@copilot review this PR focusing on security and performance'
      },
      {
        title: 'VS Code',
        promptText: '/code-review Check this function for potential memory leaks and race conditions'
      }
    ],
    governanceNotes: [
      'Review findings stay within GitHub',
      'Can be configured to require human approval',
      'Audit logs track all review activities'
    ],
    links: [
      { label: 'Code Review Docs', url: 'https://docs.github.com/copilot/using-github-copilot/code-review' }
    ]
  },
  {
    id: 'secure-autofix',
    stage: 'Verify',
    label: '/secure + /auto-fix',
    summary: 'Copilot security scanning identifies vulnerabilities and generates fixes automatically, shifting security left in the development process.',
    howCopilotHelps: [
      'Scans for OWASP Top 10 vulnerabilities',
      'Generates secure code replacements',
      'Explains vulnerability impact',
      'Prevents insecure patterns in suggestions'
    ],
    demoFlow: [
      'Push code with a security issue',
      'View the Copilot security alert',
      'Click "View suggested fix"',
      'Review the secure replacement code',
      'Apply fix and verify resolution'
    ],
    prompts: [
      {
        title: 'VS Code',
        promptText: '/secure Scan this authentication code for security vulnerabilities'
      },
      {
        title: 'Copilot Chat',
        promptText: 'Explain this SQL injection vulnerability and show me the secure version'
      }
    ],
    governanceNotes: [
      'Security findings are confidential',
      'Integrates with existing security policies',
      'Compliance reporting available'
    ],
    links: [
      { label: 'Code Scanning', url: 'https://docs.github.com/code-security/code-scanning' }
    ]
  },
  {
    id: 'testing',
    stage: 'Verify',
    label: '/testing',
    summary: 'Copilot generates comprehensive test suites, helping achieve better code coverage with unit tests, integration tests, and edge case handling.',
    howCopilotHelps: [
      'Generates unit tests for functions',
      'Creates integration test scaffolds',
      'Identifies edge cases to test',
      'Mocks dependencies automatically'
    ],
    demoFlow: [
      'Select a function or class',
      'Use /testing to generate tests',
      'Review generated test cases',
      'Add to your test suite',
      'Run and verify coverage increase'
    ],
    prompts: [
      {
        title: 'VS Code',
        promptText: '/testing Generate comprehensive unit tests for this UserService class including edge cases'
      },
      {
        title: 'VS Code',
        promptText: '/testing Write integration tests for this API endpoint with mocked database'
      }
    ],
    governanceNotes: [
      'Test generation uses code context only',
      'No production data is used'
    ],
    links: [
      { label: 'Testing Best Practices', url: 'https://docs.github.com/actions/automating-builds-and-tests' }
    ]
  },
  {
    id: 'preview-deploys',
    stage: 'Verify',
    label: 'Preview deploys',
    summary: 'Automatic preview deployments let you see and test changes in isolated environments before merging to production.',
    howCopilotHelps: [
      'Suggests preview deployment configurations',
      'Generates environment setup code',
      'Creates deployment status checks',
      'Links previews to PRs automatically'
    ],
    demoFlow: [
      'Open a PR with frontend changes',
      'Wait for preview deployment to build',
      'Click the preview URL in PR checks',
      'Test the changes in isolation',
      'Share link with stakeholders'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Generate a GitHub Actions workflow for preview deployments on PRs using Vercel'
      }
    ],
    governanceNotes: [
      'Preview environments are temporary',
      'Access can be restricted to team members'
    ],
    links: [
      { label: 'Deployment Docs', url: 'https://docs.github.com/actions/deployment' }
    ]
  },
  {
    id: 'actions-cicd',
    stage: 'Deploy',
    label: 'Actions (CI/CD)',
    summary: 'GitHub Actions automates your build, test, and deployment pipeline. Copilot helps write workflows, debug failures, and optimize performance.',
    howCopilotHelps: [
      'Generates workflow YAML from descriptions',
      'Debugs failed workflow runs',
      'Suggests caching strategies',
      'Optimizes parallel job execution'
    ],
    demoFlow: [
      'Describe your deployment needs',
      'Use Copilot to generate the workflow',
      'Review and customize the YAML',
      'Commit to .github/workflows/',
      'Monitor the first run'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Create a GitHub Actions workflow that builds a Node.js app, runs tests, and deploys to AWS on push to main'
      },
      {
        title: 'VS Code',
        promptText: 'Why is this GitHub Actions workflow failing and how can I fix it?'
      }
    ],
    governanceNotes: [
      'Workflow secrets are encrypted',
      'Audit logs track all deployments',
      'Required reviewers can be enforced'
    ],
    links: [
      { label: 'Actions Documentation', url: 'https://docs.github.com/actions' }
    ]
  },
  {
    id: 'releases',
    stage: 'Deploy',
    label: 'Releases',
    summary: 'GitHub Releases helps package and distribute software versions. Copilot generates release notes and changelog entries automatically.',
    howCopilotHelps: [
      'Generates release notes from commits',
      'Categorizes changes by type',
      'Highlights breaking changes',
      'Creates user-friendly changelogs'
    ],
    demoFlow: [
      'Navigate to Releases in your repo',
      'Click "Draft a new release"',
      'Click "Generate release notes"',
      'Review and edit the generated content',
      'Publish the release'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Generate release notes for v2.0.0 based on all commits since v1.9.0, grouped by feature, fix, and breaking change'
      }
    ],
    governanceNotes: [
      'Release notes are public for public repos',
      'Signing can be enforced for releases'
    ],
    links: [
      { label: 'Releases Docs', url: 'https://docs.github.com/repositories/releasing-projects-on-github' }
    ]
  },
  {
    id: 'apps',
    stage: 'Deploy',
    label: 'Apps',
    summary: 'GitHub Apps extend GitHub\'s functionality with custom integrations. Copilot helps build, configure, and troubleshoot apps.',
    howCopilotHelps: [
      'Generates app boilerplate code',
      'Explains webhook payload handling',
      'Suggests permission configurations',
      'Debugs app authentication issues'
    ],
    demoFlow: [
      'Go to Developer Settings > GitHub Apps',
      'Create a new app',
      'Ask Copilot to generate webhook handlers',
      'Implement the app logic',
      'Test with Smee or similar tool'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Generate a GitHub App webhook handler in Node.js that auto-labels issues based on keywords in the title'
      }
    ],
    governanceNotes: [
      'Apps have scoped permissions',
      'Installation requires org approval',
      'API usage is logged'
    ],
    links: [
      { label: 'GitHub Apps Docs', url: 'https://docs.github.com/apps' }
    ]
  },
  {
    id: 'ai-workflows',
    stage: 'Deploy',
    label: 'AI Workflows',
    summary: 'AI-powered workflows in GitHub Actions enable intelligent automation, from code generation to deployment decisions.',
    howCopilotHelps: [
      'Integrates LLMs into CI/CD pipelines',
      'Automates content generation',
      'Makes intelligent deployment decisions',
      'Processes and summarizes data'
    ],
    demoFlow: [
      'Create a new workflow file',
      'Add AI-powered action steps',
      'Configure model and prompts',
      'Set up triggers and conditions',
      'Monitor AI-enhanced automation'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Create a workflow that uses AI to generate a weekly summary of repository activity and posts it to Slack'
      }
    ],
    governanceNotes: [
      'AI actions use organization-approved models',
      'Token usage is tracked and billed',
      'Outputs should be reviewed for accuracy'
    ],
    links: [
      { label: 'Actions AI', url: 'https://docs.github.com/actions' }
    ]
  },
  {
    id: 'custom-agents-deploy',
    stage: 'Deploy',
    label: 'Custom agents',
    summary: 'Deploy custom Copilot agents for CI/CD operations, enabling AI-assisted deployments and infrastructure management.',
    howCopilotHelps: [
      'Creates deployment-specific agents',
      'Integrates with infrastructure tools',
      'Automates runbook execution',
      'Provides deployment intelligence'
    ],
    demoFlow: [
      'Define agent capabilities for deployment',
      'Connect to infrastructure APIs',
      'Create deployment commands',
      'Test in staging environment',
      'Roll out to production workflows'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: '@deploy-agent Roll back the payment service to the previous stable version'
      }
    ],
    governanceNotes: [
      'Deployment agents require elevated permissions',
      'All actions are audit logged',
      'Approval gates can be configured'
    ],
    links: [
      { label: 'Copilot Extensions', url: 'https://docs.github.com/copilot/building-copilot-extensions' }
    ]
  },
  {
    id: 'metrics-roi',
    stage: 'Operate',
    label: 'Metrics/ROI',
    summary: 'Track Copilot adoption and impact with detailed metrics dashboards. Measure productivity gains and demonstrate ROI.',
    howCopilotHelps: [
      'Shows acceptance rate analytics',
      'Tracks time saved estimates',
      'Compares team productivity trends',
      'Generates executive reports'
    ],
    demoFlow: [
      'Navigate to Organization Settings',
      'Open Copilot metrics dashboard',
      'View adoption by team and user',
      'Analyze suggestion acceptance rates',
      'Export data for reporting'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Summarize our organization Copilot usage for last quarter including active users, acceptance rates, and estimated time saved'
      }
    ],
    governanceNotes: [
      'Metrics are aggregated, not individual',
      'Data retention follows org policies',
      'Export requires admin permissions'
    ],
    links: [
      { label: 'Copilot Metrics', url: 'https://docs.github.com/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-github-copilot-in-your-enterprise' }
    ]
  },
  {
    id: 'spark-runtime',
    stage: 'Operate',
    label: 'Spark Runtime',
    summary: 'The Spark Runtime hosts and operates micro-apps created with GitHub Spark, providing scalable and secure execution.',
    howCopilotHelps: [
      'Monitors app health and performance',
      'Suggests optimization opportunities',
      'Debugs runtime issues',
      'Manages data persistence'
    ],
    demoFlow: [
      'Deploy a Spark app',
      'View the runtime dashboard',
      'Monitor usage and performance',
      'Check error logs if issues occur',
      'Scale or update as needed'
    ],
    prompts: [
      {
        title: 'Spark',
        promptText: 'Show me the performance metrics for this app over the last week'
      }
    ],
    governanceNotes: [
      'Apps run in isolated containers',
      'Data is encrypted at rest',
      'Access logs are maintained'
    ],
    links: [
      { label: 'GitHub Spark', url: 'https://githubnext.com/projects/github-spark' }
    ]
  },
  {
    id: 'sre-agent',
    stage: 'Operate',
    label: 'SRE Agent',
    summary: 'The SRE Agent provides AI-powered incident response, helping diagnose issues, suggest mitigations, and automate remediation.',
    howCopilotHelps: [
      'Analyzes incident patterns',
      'Suggests root cause hypotheses',
      'Recommends remediation steps',
      'Automates runbook execution'
    ],
    demoFlow: [
      'Configure SRE Agent with your stack',
      'Connect monitoring and alerting tools',
      'Trigger a test incident',
      'View AI-generated diagnosis',
      'Execute suggested remediation'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: '@sre-agent The API response times increased 10x in the last hour. Help me diagnose the root cause.'
      }
    ],
    governanceNotes: [
      'Agent actions can require approval',
      'All remediations are logged',
      'Integrates with existing ITSM'
    ],
    links: [
      { label: 'Copilot for Operations', url: 'https://docs.github.com/copilot' }
    ]
  },
  {
    id: 'mcp-integrations',
    stage: 'Operate',
    label: 'MCP Integrations',
    summary: 'Model Context Protocol (MCP) integrations connect Copilot to external tools and services, extending its operational capabilities.',
    howCopilotHelps: [
      'Connects to monitoring platforms',
      'Integrates with ticketing systems',
      'Links to documentation tools',
      'Extends with custom data sources'
    ],
    demoFlow: [
      'Browse available MCP servers',
      'Configure connection credentials',
      'Test the integration',
      'Use @mentions to access tools',
      'Build workflows using MCP data'
    ],
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: '@datadog Show me the top 5 errors from production in the last 24 hours with stack traces'
      }
    ],
    governanceNotes: [
      'MCP connections use org-approved servers',
      'Credentials are securely stored',
      'Data access follows existing policies'
    ],
    links: [
      { label: 'MCP Overview', url: 'https://modelcontextprotocol.io' }
    ]
  }
];

export const getCapabilityById = (id: string): Capability | undefined => {
  return capabilityData.find(cap => cap.id === id);
};

export const getCapabilitiesByStage = (stage: Stage): Capability[] => {
  return capabilityData.filter(cap => cap.stage === stage);
};
