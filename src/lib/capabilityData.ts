import { Stage } from './types';

export interface Capability {
  id: string;
  stage: Stage;
  label: string;
  summary: string;
  howCopilotHelps: string[];
  demoFlow: string[];
  videoUrl?: string;
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
      'Use Copilot Chat to draft the issue body',
      'Copy the generated content into the issue',
      'Manually add labels and assignees',
      'Submit the issue'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=1VbCLPr9SDM',
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
      'N/A - Project analytics features are not yet available',
      'Use Copilot Chat to manually summarize project status',
      'Ask Copilot to help prioritize based on issue details'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=pRqXyYmN-Sk',
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
    summary: 'Copilot Spaces let you organize the context that Copilot uses to answer your questions. Spaces can include repositories, code, pull requests, issues, free-text content, images, and file uploads. Ask Copilot questions grounded in that context, or share the space with your team.',
    howCopilotHelps: [
      'Gets more relevant, specific answers by grounding Copilot in curated context',
      'Reduces repeated questions by sharing knowledge with your team',
      'Supports onboarding with self-service context that lives beyond chat history',
      'Stays in sync as your project evolves - GitHub sources auto-update',
      'Available in Copilot Chat on GitHub.com and in IDEs via the GitHub MCP server'
    ],
    demoFlow: [
      'Go to github.com/copilot/spaces and click "Create space"',
      'Name your space and choose ownership (personal or organization)',
      'Add instructions describing what Copilot should focus on',
      'Add sources: repositories, files, PRs, issues, uploads, or free text',
      'Ask Copilot questions grounded in the space context',
      'Share the space with team members (admin, editor, or viewer access)'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=a0LWEWLUt48',
    prompts: [
      {
        title: 'Copilot Spaces',
        promptText: 'What are the main architectural patterns used across these repositories?'
      },
      {
        title: 'Copilot Spaces',
        promptText: 'Summarize the recent changes in the authentication service and any related issues'
      }
    ],
    governanceNotes: [
      'Available to anyone with a Copilot license, including Copilot Free',
      'Viewers can only see sources they have access to',
      'Organization-owned spaces use GitHub built-in permission model (admin, editor, viewer)',
      'Individual-owned spaces can be shared publicly, with specific users, or kept private',
      'Questions in spaces count as Copilot Chat requests; premium models count against quota'
    ],
    links: [
      { label: 'About Copilot Spaces', url: 'https://docs.github.com/en/copilot/concepts/context/spaces' },
      { label: 'Creating Copilot Spaces', url: 'https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces' }
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
      'Open Copilot Chat in VS Code or github.com',
      'Type a feature description to break down',
      'Copilot suggests tasks and sub-tasks',
      'Manually create issues from the suggestions',
      'Assign team members to tasks'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dhfTaSGYQ4o',
    prompts: [
      {
        title: 'VS Code',
        promptText: 'Help me plan the implementation of user authentication with OAuth support for Google and GitHub, including session management'
      },
      {
        title: 'Copilot Chat',
        promptText: 'Break down this epic into implementable user stories with acceptance criteria'
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
      'Install the GitHub app in Slack workspace',
      'Run /github signin to link your account',
      'Use /github subscribe owner/repo to get notifications',
      'Type /github followed by commands like "prs" or "issues"',
      'Click links to view details on GitHub'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=jXp5D5ZnxGM',
    prompts: [
      {
        title: 'Slack',
        promptText: '/github prs owner/repo'
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
    summary: 'Copilot integrates natively with VS Code, JetBrains IDEs, Visual Studio, Eclipse, Xcode, and Neovim, providing inline code suggestions as you type.',
    howCopilotHelps: [
      'Generates code completions in real-time',
      'Understands context from open files and your project',
      'Suggests entire functions and classes',
      'Supports multiple languages and frameworks',
      'Works across VS Code, JetBrains, Visual Studio, Eclipse, Xcode, and Neovim'
    ],
    demoFlow: [
      'Open a file in VS Code (or your IDE) with Copilot enabled',
      'Start typing a function signature or comment',
      'View the gray ghost text suggestion',
      'Press Tab to accept or Esc to dismiss',
      'Use Alt+] / Alt+[ (Option+] / Option+[ on Mac) to cycle through alternatives'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Fi3AJZZregI',
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
    summary: 'GitHub Copilot CLI is a standalone command-line agent that allows you to use Copilot directly from your terminal. It can make multi-file changes, create pull requests, manage issues, and interact with GitHub - all without leaving the command line.',
    howCopilotHelps: [
      'Makes code changes across multiple files from natural language requests',
      'Creates branches, commits, and pull requests autonomously',
      'Manages GitHub issues and pull requests from the terminal',
      'Provides interactive and programmatic modes for different workflows',
      'Includes plan mode to build structured implementation plans before coding',
      'Works iteratively with automatic context management for long sessions',
      'Customizable with custom instructions, MCP servers, hooks, skills, and memory',
      'Supports ACP (Agent Client Protocol) for integration with third-party tools'
    ],
    demoFlow: [
      'Install via npm: npm install -g @github/copilot',
      'Start interactive session: copilot (first launch prompts for authentication)',
      'Confirm you trust the current directory when prompted',
      'Ask Copilot to perform tasks: "Add error handling to server.js"',
      'Switch to plan mode (Shift+Tab) for complex multi-step tasks',
      'Or use programmatically: copilot -p "Create a PR that updates the README" --allow-tool \'shell(git)\'',
      'Review and approve tool usage (file changes, shell commands, etc.)',
      'Use /compact to manage context, /model to switch models (default: Claude Sonnet 4.5)'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=VkOibxsQ1oU',
    prompts: [
      {
        title: 'Interactive Mode',
        promptText: 'copilot\n> Change the background-color of H1 headings to dark blue'
      },
      {
        title: 'Create Pull Request',
        promptText: 'copilot -p "Create a PR that adds TypeScript types to all JavaScript files"'
      },
      {
        title: 'Work on Issue',
        promptText: 'copilot\n> I\'ve been assigned issue #42. Start working on this for me in a new branch.'
      },
      {
        title: 'Local Development',
        promptText: 'copilot\n> Create a Next.js dashboard app using the GitHub API to track build metrics'
      }
    ],
    governanceNotes: [
      'Copilot CLI is in public preview with data protection',
      'Available with all Copilot plans; org admins can enable/disable via policy',
      'All file modifications and shell commands require approval unless explicitly allowed',
      'Launch only from trusted directories - scoped to current working directory',
      'Use --allow-tool and --deny-tool flags to control permissions (e.g., --deny-tool \'shell(rm)\')',
      'Default model: Claude Sonnet 4.5 (changeable via /model); each prompt uses 1 premium request'
    ],
    links: [
      { label: 'GitHub Copilot CLI Documentation', url: 'https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli' },
      { label: 'Install Copilot CLI', url: 'https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli' }
    ]
  },
  {
    id: 'coding',
    stage: 'Code',
    label: 'Agent Mode',
    summary: 'Agent mode in VS Code provides an agentic coding experience where Copilot can autonomously plan, make multi-file changes, run terminal commands, and implement features. Runs locally, in the background, or in the cloud.',
    howCopilotHelps: [
      'Makes changes across multiple files autonomously',
      'Runs terminal commands (install deps, build, test)',
      'Plans and implements features from descriptions',
      'Handles dependencies and imports automatically',
      'Supports local, background, and cloud execution modes',
      'Can hand off sessions between execution modes mid-conversation'
    ],
    demoFlow: [
      'Open the Chat view in VS Code (Ctrl+Cmd+I on Mac, Ctrl+Alt+I on Windows/Linux)',
      'Select "Agent" from the agent picker dropdown',
      'Describe the changes you want across files',
      'Agent autonomously edits files and runs terminal commands',
      'Review proposed changes using inline diffs',
      'Use Keep or Undo controls for each file change',
      'Use checkpoints to roll back to a previous state if needed'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=hPVatUSvZq0',
    prompts: [
      {
        title: 'VS Code Agent',
        promptText: 'Add dark mode support to this React app using CSS variables and a toggle component'
      },
      {
        title: 'VS Code Agent',
        promptText: 'Refactor this class-based component to use React hooks'
      }
    ],
    governanceNotes: [
      'Changes require developer review before accepting via inline diffs',
      'All modifications are tracked in git',
      'Checkpoints allow rolling back to previous state'
    ],
    links: [
      { label: 'VS Code Chat Overview', url: 'https://code.visualstudio.com/docs/copilot/chat/copilot-chat' },
      { label: 'Agents Overview', url: 'https://code.visualstudio.com/docs/copilot/agents/overview' }
    ]
  },
  {
    id: 'spark-app',
    stage: 'Code',
    label: 'GitHub Spark',
    summary: 'GitHub Spark is an AI-powered tool for creating and sharing personalized micro-apps ("sparks") using natural language, with a managed runtime, PWA dashboard, and deployment-free hosting. Now in public preview.',
    howCopilotHelps: [
      'Generates complete web applications from natural language descriptions',
      'Provides interactive live preview as you iterate',
      'Offers revision variants (3-6 alternatives) for ambiguous requests',
      'Includes persistent key-value data storage (useKV)',
      'Built-in theming system (accent color, border radius, light/dark mode)',
      'Integrated LLM prompting via GitHub Models for AI-powered app features',
      'Auto-deploys as PWA - usable on desktop, tablet, and mobile'
    ],
    demoFlow: [
      'Go to github.com/features/spark',
      'Click "New Spark" and describe your app idea in natural language',
      'Watch the app generate with an interactive live preview',
      'Iterate by typing follow-up changes or requesting variants',
      'Use the theme editor to customize colors, spacing, and mode',
      'View and edit stored data with the built-in data editor',
      'Share with others (read-only or read-write) or remix'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=zB-izOTcQ6s',
    prompts: [
      {
        title: 'Spark',
        promptText: 'Build a team standup tracker where people can post daily updates and view history by date'
      }
    ],
    governanceNotes: [
      'Now in public preview',
      'Apps run in isolated managed runtime environments',
      'Data stored per-app in encrypted key-value store',
      'Automatic version history for every revision',
      'Sharing with granular read-only or read-write permissions'
    ],
    links: [
      { label: 'GitHub Spark', url: 'https://github.com/features/spark' },
      { label: 'GitHub Spark Overview', url: 'https://githubnext.com/projects/github-spark' }
    ]
  },
  {
    id: 'custom-agents-code',
    stage: 'Code',
    label: 'Custom agents',
    summary: 'Custom agents are specialized versions of the Copilot coding agent that you tailor to your unique workflows, coding conventions, and use cases. They act like tailored teammates that follow your standards, use the right tools, and implement team-specific practices.',
    howCopilotHelps: [
      'Define agents once instead of repeatedly providing the same instructions',
      'Encode team conventions, frameworks, and coding standards directly into Copilot',
      'Create specialized agents for specific tasks (e.g., README specialist, test writer, refactoring expert)',
      'Configure agents with custom prompts, tools, and MCP servers',
      'Share agents at repository, organization, or enterprise level',
      'Use agents in VS Code, JetBrains IDEs, Eclipse, Xcode, GitHub.com, and Copilot CLI'
    ],
    demoFlow: [
      'Create agent profile: .github/agents/my-agent.md with YAML frontmatter and Markdown instructions',
      'Define name, description, and custom prompt for the agent\'s behavior',
      'Optional: Specify allowed tools and MCP servers',
      'For org-wide agents: Create in .github-private/agents/ repository',
      'Use agent in VS Code: @my-agent or select from agent picker',
      'Use on GitHub.com: Assign agent to issues, use in Agents tab',
      'Use in CLI: copilot with agent delegation'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=5NxGqnTazR8&t=620s',
    prompts: [
      {
        title: 'README Specialist',
        promptText: '@readme-creator Improve the README.md with installation instructions and usage examples'
      },
      {
        title: 'Test Agent',
        promptText: '@test-specialist Add comprehensive unit tests for the UserService class'
      },
      {
        title: 'Architecture Agent',
        promptText: '@architect Review this pull request for adherence to our microservices architecture patterns'
      }
    ],
    governanceNotes: [
      'GA in VS Code and on GitHub.com; public preview for JetBrains IDEs, Eclipse, and Xcode',
      'Repository-level agents: .github/agents/AGENT-NAME.md',
      'Org/enterprise agents: .github-private/agents/AGENT-NAME.md (can include MCP server configs)',
      'Agent profiles respect organization permissions and policies',
      'Agents can be restricted to specific tools via agent profile configuration'
    ],
    links: [
      { label: 'About Custom Agents', url: 'https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents' },
      { label: 'Creating Custom Agents', url: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents' },
      { label: 'VS Code Custom Agents', url: 'https://code.visualstudio.com/docs/copilot/customization/custom-agents' }
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
      'Create a pull request with code changes',
      'Click "Generate" next to the description field',
      'Copilot creates a summary from your commits',
      'Edit the generated description as needed',
      'Submit the PR'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=yLHWRegFg-I',
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
    label: 'Code Review',
    summary: 'Copilot Code Review provides automated, AI-powered code review on pull requests and in your IDE. It catches bugs, suggests improvements, and provides fix suggestions you can apply with a click.',
    howCopilotHelps: [
      'Reviews pull request diffs for bugs and anti-patterns',
      'Provides inline comments with suggested code changes',
      'Can be configured for automatic review on all PRs',
      'Customizable with repository instructions (.github/copilot-instructions.md) and path-specific rules',
      'Available on GitHub.com, VS Code, JetBrains, Visual Studio, Xcode, and Mobile',
      'Can invoke coding agent to implement suggestions ("Implement suggestion" button)'
    ],
    demoFlow: [
      'Open a pull request on GitHub.com',
      'Under Reviewers, select "Copilot"',
      'Wait for Copilot to review (usually <30 seconds)',
      'Scroll down to read inline comments with suggestions',
      'Click "Commit suggestion" to apply fixes directly, or "Implement suggestion" to invoke coding agent',
      'Provide feedback with thumbs up/down on each comment',
      'Optionally enable automatic reviews in repository settings'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=lW44NYHZDto',
    prompts: [
      {
        title: 'VS Code',
        promptText: '/code-review Check this function for potential memory leaks and race conditions'
      }
    ],
    governanceNotes: [
      'Review findings stay within GitHub',
      'Copilot leaves "Comment" reviews only - does not approve or request changes, does not block merging',
      'Also available to org members without a Copilot license (when enabled by admin)',
      'Customizable with .github/copilot-instructions.md and path-specific .instructions.md files',
      'Audit logs track all review activities'
    ],
    links: [
      { label: 'Using Copilot Code Review', url: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review' }
    ]
  },
  {
    id: 'secure-autofix',
    stage: 'Verify',
    label: 'Copilot Autofix',
    summary: 'Copilot Autofix for code scanning generates targeted fix suggestions for security vulnerabilities found by CodeQL. It provides code changes you can review and commit directly to your pull request.',
    howCopilotHelps: [
      'Generates fix suggestions for CodeQL security alerts on pull requests',
      'Supports C#, C/C++, Go, Java/Kotlin, Swift, JavaScript/TypeScript, Python, Ruby, and Rust',
      'Provides explanatory text with each suggested fix',
      'Fixes can be committed directly from the alert page',
      'Works automatically - no user interaction needed beyond enabling code scanning',
      'Available on all public repos and orgs with GitHub Code Security'
    ],
    demoFlow: [
      'Enable Code Scanning with CodeQL in repository Settings > Code security',
      'Push code or open a pull request to trigger a scan',
      'View alerts under Security > Code scanning alerts',
      'Copilot Autofix automatically generates fix suggestions alongside alerts',
      'Review the suggested code changes and explanation',
      'Click "Commit suggestion" to apply the fix, or edit as needed',
      'Verify CI tests still pass after applying the fix'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=jNLASUQIJAs',
    prompts: [
      {
        title: 'Code Scanning Alert',
        promptText: 'Review the Copilot Autofix suggestion on the SQL injection alert and commit the fix'
      },
      {
        title: 'Copilot Chat',
        promptText: 'Explain this SQL injection vulnerability and show me the secure version'
      }
    ],
    governanceNotes: [
      'No Copilot subscription required - available with GitHub Code Security or on all public repos',
      'Fixes are suggestions only - developer must review and approve',
      'Data is not used for LLM training',
      'Autofix can be disabled at repository, org, or enterprise level',
      'Developer retains responsibility for reviewing AI-suggested changes'
    ],
    links: [
      { label: 'Responsible Use of Copilot Autofix', url: 'https://docs.github.com/en/code-security/responsible-use/responsible-use-autofix-code-scanning' },
      { label: 'Code Scanning Docs', url: 'https://docs.github.com/en/code-security/code-scanning' }
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
      'Open a file in VS Code and select a function or class',
      'Open Copilot Chat and ask: "Generate tests for this function"',
      'Or use Agent mode: "Add comprehensive tests for UserService"',
      'Agent creates test file, writes tests, and runs them',
      'Review generated test cases and adjust as needed',
      'Run tests to verify coverage with your test framework'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=smdBqEu7fx4',
    prompts: [
      {
        title: 'VS Code',
        promptText: 'Generate comprehensive unit tests for this UserService class including edge cases'
      },
      {
        title: 'VS Code',
        promptText: 'Write integration tests for this API endpoint with mocked database'
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
      'Configure deployment in your hosting provider (Vercel, Netlify, etc.)',
      'Link your GitHub repository',
      'Open a PR - preview URL is auto-generated',
      'Click the deployment link in PR checks',
      'Test changes before merging'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Ul1FynLT78Q',
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
      'Go to repo Actions tab and click "New workflow"',
      'Browse starter workflows or ask Copilot Chat to generate one',
      'Review the YAML configuration',
      'Commit to .github/workflows/',
      'Push code to trigger the workflow'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=ljINpvCvHnQ',
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
      'Go to repo > Releases > "Draft a new release"',
      'Choose a tag or create a new one',
      'Click "Generate release notes" button',
      'Review auto-generated notes from commits',
      'Publish the release'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Ob9llKkv6II',
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
      'Go to Settings > Developer settings > GitHub Apps',
      'Click "New GitHub App"',
      'Configure permissions and webhook URL',
      'Use Copilot Chat to help write webhook handlers',
      'Install the app on a test repository'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=YX_2m1pKFjQ',
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
    label: 'Agentic Workflows',
    summary: 'GitHub Agentic Workflows bring coding agents into GitHub Actions for intelligent repository automation. Write workflows in plain Markdown to automate triage, documentation, code quality, testing, and more - with built-in guardrails and sandboxed execution.',
    howCopilotHelps: [
      'Automates continuous triage: summarize, label, and route issues',
      'Keeps documentation aligned with code changes automatically',
      'Continuously identifies code improvements and opens PRs',
      'Assesses test coverage and adds high-value tests',
      'Investigates CI failures and proposes targeted fixes',
      'Creates regular reports on repository health and trends',
      'Runs with read-only permissions by default with safe outputs for write operations'
    ],
    demoFlow: [
      'Install: gh extension install github/gh-aw',
      'Quick start: gh aw add-wizard githubnext/agentics/daily-repo-status (interactive setup)',
      'Wizard checks prerequisites, selects AI engine (Copilot, Claude, or Codex), sets up secrets',
      'Or manually: create a workflow in .github/workflows/my-workflow.md with YAML frontmatter and Markdown instructions',
      'Compile manually: gh aw compile (creates lock file)',
      'Commit and push to repository',
      'Workflow runs on schedule or trigger (issue_comment, pull_request, etc.)',
      'Review outputs: issues, comments, or PRs created by the agent (2-3 min per run)'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Ul1FynLT78Q',
    prompts: [
      {
        title: 'Create Daily Report',
        promptText: 'Generate a workflow that creates a daily status report for maintainers with recent activity, progress, and actionable next steps'
      },
      {
        title: 'Auto Triage Issues',
        promptText: 'Create an agentic workflow that automatically triages new issues by analyzing content, adding labels, and assigning to the right team'
      },
      {
        title: 'Documentation Sync',
        promptText: 'Build a workflow that keeps README and docs updated when code changes are merged'
      },
      {
        title: 'Continuous Testing',
        promptText: 'Design a workflow that identifies gaps in test coverage and creates PRs with new test cases'
      }
    ],
    governanceNotes: [
      'Now in technical preview - available for testing',
      'Workflows run in sandboxed GitHub Actions with read-only permissions by default',
      'Write operations require explicit safe-outputs configuration',
      'Tool allowlisting and network isolation prevent unintended actions',
      'Pull requests are never merged automatically - human review required',
      'Defense-in-depth security against prompt injection attacks',
      'Each workflow run typically incurs 2 premium Copilot requests (work + guardrail check)'
    ],
    links: [
      { label: 'GitHub Agentic Workflows', url: 'https://github.github.io/gh-aw/' },
      { label: 'Quick Start Guide', url: 'https://github.github.io/gh-aw/setup/quick-start/' },
      { label: 'Creating Workflows', url: 'https://github.github.io/gh-aw/setup/creating-workflows/' },
      { label: 'Peli\'s Agent Factory', url: 'https://github.github.io/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/' }
    ]
  },
  {
    id: 'custom-agents-deploy',
    stage: 'Deploy',
    label: 'Custom agents',
    summary: 'Custom agents can be specialized for deployment and operations tasks, creating deployment-specific assistants that follow your infrastructure patterns, deployment procedures, and operational workflows.',
    howCopilotHelps: [
      'Create deployment-focused agents with runbook knowledge',
      'Define agents that understand your infrastructure patterns (Kubernetes, AWS, Azure, etc.)',
      'Build agents specialized in incident response and troubleshooting',
      'Configure agents with access to deployment tools and MCP servers',
      'Encode deployment best practices and approval workflows',
      'Share operational knowledge across teams'
    ],
    demoFlow: [
      'Create deployment agent: .github/agents/deploy-agent.md',
      'Configure with deployment-specific instructions and tool access',
      'Define MCP servers for infrastructure tools (kubectl, terraform, etc.)',
      'Set up tool restrictions for safe operations',
      'Use in operations: @deploy-agent or assign to deployment issues',
      'Review agent actions through audit logs'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=5NxGqnTazR8&t=620s',
    prompts: [
      {
        title: 'Deployment Agent',
        promptText: '@deploy-agent Deploy the payment service to production following our standard procedure'
      },
      {
        title: 'Rollback Agent',
        promptText: '@ops-agent Roll back the API gateway to the previous stable version'
      },
      {
        title: 'Infrastructure Agent',
        promptText: '@infra-agent Review this Terraform configuration for compliance with our security policies'
      }
    ],
    governanceNotes: [
      'Same configuration as Code stage - agent profiles work across all contexts',
      'Deployment agents should have carefully configured tool restrictions',
      'Use MCP servers to safely integrate with infrastructure tools',
      'All agent actions are logged and auditable',
      'Can require approval gates for sensitive operations',
      'Organization policies apply to all custom agents regardless of use case'
    ],
    links: [
      { label: 'About Custom Agents', url: 'https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents' },
      { label: 'Creating Custom Agents', url: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents' }
    ]
  },
  {
    id: 'metrics-roi',
    stage: 'Operate',
    label: 'Metrics/ROI',
    summary: 'Track Copilot adoption and impact with usage data and activity reports. Review seat assignments, last activity dates, and generate CSV reports for custom analysis.',
    howCopilotHelps: [
      'Shows seat assignment overview and estimated monthly cost',
      'Tracks last activity date per user',
      'Generates downloadable CSV activity reports',
      'Provides usage data via REST API for custom dashboards',
      'Helps identify inactive seats for reassignment'
    ],
    demoFlow: [
      'Go to Organization Settings > Copilot > Access',
      'View seat overview: assigned seats, usage, estimated cost',
      'Sort users by last Copilot activity date',
      'Click "Activity report" to generate and download a CSV',
      'Use the REST API to retrieve seat assignment data programmatically',
      'Review metrics to make informed decisions about seat allocation'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=43yFNFT8-R4',
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: 'Summarize our organization Copilot usage for last quarter including active users and seat utilization'
      }
    ],
    governanceNotes: [
      'Metrics are aggregated at the organization level',
      'Activity report requires organization owner permissions and Copilot Business plan',
      'API access requires appropriate authentication scopes',
      'Data retention follows organization policies',
      'Troubleshoot last_activity_at by ensuring telemetry is enabled in IDE settings'
    ],
    links: [
      { label: 'Reviewing User Activity Data', url: 'https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/review-activity/review-user-activity-data' },
      { label: 'Copilot Metrics API', url: 'https://docs.github.com/en/rest/copilot' }
    ]
  },
  {
    id: 'spark-runtime',
    stage: 'Operate',
    label: 'Spark Runtime',
    summary: 'The Spark managed runtime environment hosts micro-apps created with GitHub Spark, providing deployment-free hosting, persistent data storage, theming, and integrated LLM prompting via GitHub Models.',
    howCopilotHelps: [
      'Deployment-free hosting: changes auto-deploy as PWAs for desktop, tablet, and mobile',
      'Persistent key-value data storage with built-in data editor',
      'Themable design system with accent colors, spacing, border radius, and light/dark mode',
      'Integrated LLM prompting via GitHub Models for AI-powered app features',
      'Built-in UI components for polished out-of-the-box look and feel'
    ],
    demoFlow: [
      'Create and iterate on a Spark app (see GitHub Spark)',
      'App is automatically deployed - no build/deploy steps needed',
      'Install as a PWA on any device from the Spark dashboard',
      'Use the data editor to view and edit key-value data your app stores',
      'Use the theme editor to customize appearance',
      'Use the prompt editor to view and adjust AI prompts your app uses',
      'Share via read-only or read-write links; recipients can remix'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=zB-izOTcQ6s',
    prompts: [
      {
        title: 'Spark',
        promptText: 'Build an app that summarizes daily HackerNews posts using AI'
      }
    ],
    governanceNotes: [
      'Apps run in isolated managed runtime environments',
      'Data stored per-app in encrypted key-value store',
      'Sharing with granular permissions (read-only or read-write)',
      'Automatic version history for every revision'
    ],
    links: [
      { label: 'GitHub Spark', url: 'https://github.com/features/spark' },
      { label: 'GitHub Spark Overview', url: 'https://githubnext.com/projects/github-spark' }
    ]
  },
  {
    id: 'sre-agent',
    stage: 'Operate',
    label: 'SRE Agent',
    summary: 'NeuBird\'s agentic AI SRE delivers autonomous incident resolution, helping teams cut MTTR up to 90% and reclaim engineering hours lost to troubleshooting. Provides real-time root cause analysis (RCA) and remediation across hybrid and multi-cloud environments.',
    howCopilotHelps: [
      'Autonomous incident resolution with up to 90% MTTR reduction',
      'Real-time root cause analysis (RCA) across hybrid and multi-cloud',
      'Automatic remediation without human intervention',
      'Reclaims engineering hours lost to troubleshooting',
      'Works across complex distributed systems'
    ],
    demoFlow: [
      'Integrate NeuBird AI with your monitoring and observability tools',
      'When an incident occurs, NeuBird automatically begins analysis',
      'AI agent investigates across logs, metrics, and traces',
      'Receives real-time RCA with confidence scores',
      'Agent can auto-remediate or suggest fixes',
      'View incident timeline and resolution in dashboard'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=cSShCjsqRcE',
    prompts: [
      {
        title: 'NeuBird AI',
        promptText: 'Analyze the current production incident affecting API response times and provide autonomous remediation'
      },
      {
        title: 'Root Cause Analysis',
        promptText: 'Show me the RCA for incidents in the last 24 hours across all cloud environments'
      }
    ],
    governanceNotes: [
      'Autonomous actions can require approval based on policy',
      'All investigations and remediations are fully logged',
      'Works across hybrid and multi-cloud environments',
      'Integrates with existing monitoring and ITSM tools'
    ],
    links: [
      { label: 'NeuBird Agentic AI SRE', url: 'https://neubird.ai/' }
    ]
  },
  {
    id: 'mcp-integrations',
    stage: 'Operate',
    label: 'MCP Integrations',
    summary: 'Model Context Protocol (MCP) integrations connect Copilot to external tools and services, extending its capabilities with custom data sources, monitoring, ticketing, and more. Organizations can manage MCP usage via registries and policies.',
    howCopilotHelps: [
      'Connects to monitoring platforms, ticketing systems, and documentation tools',
      'Extends Copilot with custom data sources and APIs',
      'Organizations can curate approved servers via MCP registries',
      'Policy settings control which MCP servers developers can access',
      'Supported in VS Code, JetBrains, Visual Studio, Eclipse, Xcode, and Copilot CLI'
    ],
    demoFlow: [
      'In VS Code, add MCP server configuration in settings or .vscode/mcp.json',
      'Provide server URL, transport type, and authentication',
      'Restart Copilot Chat to discover available tools',
      'Use @server-name in chat or let the agent auto-select tools',
      'Org admins: configure MCP registry URL in Copilot policies',
      'Optionally restrict access to registry-listed servers only'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=HN47tveqfQU',
    prompts: [
      {
        title: 'Copilot Chat',
        promptText: '@datadog Show me the top 5 errors from production in the last 24 hours with stack traces'
      }
    ],
    governanceNotes: [
      'Organizations can manage MCP usage via policy settings on GitHub.com',
      'MCP registries let admins curate approved servers for discoverability and compliance',
      'Option to restrict access to only registry-listed servers',
      'Credentials are securely stored; data access follows existing org policies',
      'MCP management supported in VS Code, JetBrains, Visual Studio, Eclipse, and Xcode'
    ],
    links: [
      { label: 'MCP Overview', url: 'https://modelcontextprotocol.io' },
      { label: 'MCP Server Management', url: 'https://docs.github.com/en/copilot/concepts/mcp-management' }
    ]
  }
];

export const getCapabilityById = (id: string): Capability | undefined => {
  return capabilityData.find(cap => cap.id === id);
};

export const getCapabilitiesByStage = (stage: Stage): Capability[] => {
  return capabilityData.filter(cap => cap.stage === stage);
};
