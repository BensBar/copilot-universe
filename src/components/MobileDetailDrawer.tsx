import { Drawer } from 'vaul';
import { DetailPanel } from '@/components/DetailPanel';
import { Capability } from '@/lib/capabilityData';
import { X } from '@phosphor-icons/react';

interface MobileDetailDrawerProps {
  capability: Capability | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileDetailDrawer({ capability, open, onOpenChange }: MobileDetailDrawerProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} dismissible={true}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40 transition-colors duration-300" />
        <Drawer.Content className="bg-white dark:bg-neutral-900 flex flex-col rounded-t-[16px] h-[90vh] mt-24 fixed bottom-0 left-0 right-0 z-50 focus:outline-none transition-colors duration-300">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-t-[16px] flex-shrink-0 border-b dark:border-neutral-800 transition-colors duration-300">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700 mb-4" />
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                {capability ? capability.label : 'Details'}
              </h2>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors active:scale-95"
                aria-label="Close"
              >
                <X size={20} className="text-neutral-600 dark:text-neutral-400" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <DetailPanel capability={capability} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
