import { useState, useEffect, useRef } from 'react';
import { Capability } from '@/lib/capabilityData';
import { STAGE_COLORS, STAGE_TEXT_COLORS } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Copy, Check, ArrowSquareOut } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface DetailPanelProps {
  capability: Capability | null;
}

function PromptBlock({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Prompt copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-muted rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-muted/80 border-b border-border">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-xs"
        >
          {copied ? (
            <>
              <Check size={14} className="mr-1 text-accent" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} className="mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <pre className="prompt-block p-3 text-sm overflow-x-auto whitespace-pre-wrap break-words">
        {text}
      </pre>
    </div>
  );
}

export function DetailPanel({ capability }: DetailPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (capability && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [capability?.id]);

  if (!capability) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-muted-foreground">Select a capability to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={cn(
              "px-2.5 py-1 rounded-full text-xs font-medium text-white",
              STAGE_COLORS[capability.stage]
            )}>
              {capability.stage}
            </span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">{capability.label}</h2>
          <p className="text-muted-foreground leading-relaxed">{capability.summary}</p>
        </div>

        <Separator />

        <section>
          <h3 className={cn(
            "text-xs font-semibold uppercase tracking-wide mb-3",
            STAGE_TEXT_COLORS[capability.stage]
          )}>
            How Copilot Helps
          </h3>
          <ul className="space-y-2">
            {capability.howCopilotHelps.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className={cn(
                  "w-1.5 h-1.5 rounded-full mt-2 shrink-0",
                  STAGE_COLORS[capability.stage]
                )} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section>
          <h3 className={cn(
            "text-xs font-semibold uppercase tracking-wide mb-3",
            STAGE_TEXT_COLORS[capability.stage]
          )}>
            Demo Flow
          </h3>
          <ol className="space-y-2">
            {capability.demoFlow.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white shrink-0",
                  STAGE_COLORS[capability.stage]
                )}>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <Separator />

        <section>
          <h3 className={cn(
            "text-xs font-semibold uppercase tracking-wide mb-3",
            STAGE_TEXT_COLORS[capability.stage]
          )}>
            Prompts
          </h3>
          <div className="space-y-3">
            {capability.prompts.map((prompt, i) => (
              <PromptBlock key={i} title={prompt.title} text={prompt.promptText} />
            ))}
          </div>
        </section>

        <Separator />

        <section>
          <h3 className={cn(
            "text-xs font-semibold uppercase tracking-wide mb-3",
            STAGE_TEXT_COLORS[capability.stage]
          )}>
            Governance Notes
          </h3>
          <ul className="space-y-2">
            {capability.governanceNotes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </section>

        {capability.links.length > 0 && (
          <>
            <Separator />
            <section>
              <h3 className={cn(
                "text-xs font-semibold uppercase tracking-wide mb-3",
                STAGE_TEXT_COLORS[capability.stage]
              )}>
                Resources
              </h3>
              <div className="flex flex-wrap gap-2">
                {capability.links.map((link, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ArrowSquareOut size={14} className="ml-1.5" />
                    </a>
                  </Button>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
