import { capabilityData } from '@/lib/capabilityData';
import { Stage, STAGES } from '@/lib/types';
import { cn } from '@/lib/utils';
import { 
  ListBullets, 
  Kanban, 
  Cube, 
  PencilSimple, 
  UsersThree,
  Code,
  Terminal,
  Lightning,
  Sparkle,
  Robot,
  GitPullRequest,
  MagnifyingGlass,
  ShieldCheck,
  TestTube,
  Eye,
  Rocket,
  Tag,
  AppWindow,
  Cpu,
  ChartBar,
  Gauge,
  Heartbeat,
  Plugs
} from '@phosphor-icons/react';

interface CapabilityMapProps {
  selectedId: string | null;
  activeStage: Stage | null;
  onSelect: (id: string) => void;
}

const stageConfig: Record<Stage, { bg: string; header: string; headerText: string; darkBg: string; darkHeader: string }> = {
  Plan: { 
    bg: 'bg-pink-50', 
    header: 'bg-gradient-to-r from-pink-400 to-pink-300', 
    headerText: 'text-white',
    darkBg: 'dark:bg-pink-950/30',
    darkHeader: 'dark:from-pink-500 dark:to-pink-400'
  },
  Code: { 
    bg: 'bg-orange-50', 
    header: 'bg-gradient-to-r from-orange-400 to-orange-300', 
    headerText: 'text-white',
    darkBg: 'dark:bg-orange-950/30',
    darkHeader: 'dark:from-orange-500 dark:to-orange-400'
  },
  Verify: { 
    bg: 'bg-green-50', 
    header: 'bg-gradient-to-r from-green-400 to-green-300', 
    headerText: 'text-white',
    darkBg: 'dark:bg-green-950/30',
    darkHeader: 'dark:from-green-500 dark:to-green-400'
  },
  Deploy: { 
    bg: 'bg-purple-50', 
    header: 'bg-gradient-to-r from-purple-400 to-purple-300', 
    headerText: 'text-white',
    darkBg: 'dark:bg-purple-950/30',
    darkHeader: 'dark:from-purple-500 dark:to-purple-400'
  },
  Operate: { 
    bg: 'bg-teal-50', 
    header: 'bg-gradient-to-r from-teal-400 to-teal-300', 
    headerText: 'text-white',
    darkBg: 'dark:bg-teal-950/30',
    darkHeader: 'dark:from-teal-500 dark:to-teal-400'
  },
};

const stageIcons: Record<Stage, React.ElementType> = {
  Plan: ListBullets,
  Code: Code,
  Verify: ShieldCheck,
  Deploy: Rocket,
  Operate: ChartBar,
};

const capabilityIcons: Record<string, React.ElementType> = {
  'issues': ListBullets,
  'projects': Kanban,
  'spaces': Cube,
  'planning': PencilSimple,
  'teams-slack': UsersThree,
  'editor-ides': Code,
  'copilot-cli': Terminal,
  'coding': Lightning,
  'spark-app': Sparkle,
  'custom-agents-code': Robot,
  'pull-requests': GitPullRequest,
  'code-review': MagnifyingGlass,
  'secure-autofix': ShieldCheck,
  'testing': TestTube,
  'preview-deploys': Eye,
  'actions-cicd': Rocket,
  'releases': Tag,
  'apps': AppWindow,
  'ai-workflows': Cpu,
  'custom-agents-deploy': Robot,
  'metrics-roi': ChartBar,
  'spark-runtime': Gauge,
  'sre-agent': Heartbeat,
  'mcp-integrations': Plugs,
};

export function CapabilityMap({ selectedId, activeStage, onSelect }: CapabilityMapProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">AI-powered Developer Platform</h2>
        <p className="text-muted-foreground text-sm">Scale & Governance</p>
      </div>
      
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto w-full">
        {STAGES.map((stage) => {
          const config = stageConfig[stage];
          const StageIcon = stageIcons[stage];
          const stageCapabilities = capabilityData.filter(c => c.stage === stage);
          const isStageFiltered = activeStage && activeStage !== stage;
          
          return (
            <div 
              key={stage} 
              className={cn(
                "rounded-xl overflow-hidden transition-all duration-300",
                config.bg,
                config.darkBg,
                isStageFiltered && "opacity-30"
              )}
            >
              <div className={cn("px-3 md:px-4 py-3 flex items-center gap-2 transition-all duration-300", config.header, config.darkHeader)}>
                <StageIcon size={18} weight="bold" className={config.headerText} />
                <span className={cn("font-semibold text-sm", config.headerText)}>{stage}</span>
              </div>
              
              <div className="p-2 md:p-3 space-y-2">
                {stageCapabilities.map((cap) => {
                  const Icon = capabilityIcons[cap.id] || ListBullets;
                  const isSelected = selectedId === cap.id;
                  
                  return (
                    <button
                      key={cap.id}
                      onClick={() => onSelect(cap.id)}
                      className={cn(
                        "w-full px-3 py-3 md:py-2.5 rounded-lg bg-white dark:bg-neutral-800 text-left text-xs md:text-xs font-medium transition-all duration-200 flex items-center gap-2 shadow-sm min-h-[48px] md:min-h-0",
                        "hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
                        "dark:hover:shadow-lg dark:hover:shadow-primary/20",
                        isSelected && "hotspot-glow ring-2 ring-primary dark:ring-primary/80 dark:shadow-primary/30"
                      )}
                    >
                      <Icon size={16} weight="duotone" className="text-muted-foreground dark:text-neutral-400 shrink-0" />
                      <span className="break-words leading-tight dark:text-neutral-100">{cap.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
