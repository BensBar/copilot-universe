import { Stage, STAGES, STAGE_COLORS } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FiltersProps {
  activeStage: Stage | null;
  onStageChange: (stage: Stage | null) => void;
}

export function Filters({ activeStage, onStageChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onStageChange(null)}
        className={cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
          activeStage === null
            ? "bg-foreground text-background"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        All
      </button>
      {STAGES.map((stage) => (
        <button
          key={stage}
          onClick={() => onStageChange(activeStage === stage ? null : stage)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
            activeStage === stage
              ? `${STAGE_COLORS[stage]} text-white`
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {stage}
        </button>
      ))}
    </div>
  );
}
