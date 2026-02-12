export interface HotspotPosition {
  id: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

export const hotspotConfig: HotspotPosition[] = [
  { id: 'issues', top: '33%', left: '4.5%', width: '11%', height: '8%' },
  { id: 'projects', top: '43%', left: '4.5%', width: '11%', height: '8%' },
  { id: 'spaces', top: '53%', left: '4.5%', width: '11%', height: '8%' },
  { id: 'planning', top: '63%', left: '4.5%', width: '11%', height: '8%' },
  { id: 'teams-slack', top: '73%', left: '4.5%', width: '11%', height: '8%' },
  
  { id: 'editor-ides', top: '33%', left: '22%', width: '12%', height: '8%' },
  { id: 'copilot-cli', top: '43%', left: '22%', width: '12%', height: '8%' },
  { id: 'coding', top: '53%', left: '22%', width: '12%', height: '8%' },
  { id: 'spark-app', top: '63%', left: '22%', width: '12%', height: '8%' },
  { id: 'custom-agents-code', top: '73%', left: '22%', width: '12%', height: '8%' },
  
  { id: 'pull-requests', top: '33%', left: '40%', width: '13%', height: '8%' },
  { id: 'code-review', top: '43%', left: '40%', width: '13%', height: '8%' },
  { id: 'secure-autofix', top: '53%', left: '40%', width: '13%', height: '8%' },
  { id: 'testing', top: '63%', left: '40%', width: '13%', height: '8%' },
  { id: 'preview-deploys', top: '73%', left: '40%', width: '13%', height: '8%' },
  
  { id: 'actions-cicd', top: '33%', left: '58.5%', width: '13%', height: '8%' },
  { id: 'releases', top: '43%', left: '58.5%', width: '13%', height: '8%' },
  { id: 'apps', top: '53%', left: '58.5%', width: '13%', height: '8%' },
  { id: 'ai-workflows', top: '63%', left: '58.5%', width: '13%', height: '8%' },
  { id: 'custom-agents-deploy', top: '73%', left: '58.5%', width: '13%', height: '8%' },
  
  { id: 'metrics-roi', top: '33%', left: '77%', width: '13%', height: '8%' },
  { id: 'spark-runtime', top: '43%', left: '77%', width: '13%', height: '8%' },
  { id: 'sre-agent', top: '53%', left: '77%', width: '13%', height: '8%' },
  { id: 'mcp-integrations', top: '63%', left: '77%', width: '13%', height: '8%' },
];
