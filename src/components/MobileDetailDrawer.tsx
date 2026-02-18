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
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[16px] h-[90vh] mt-24 fixed bottom-0 left-0 right-0 z-50 focus:outline-none">
          <div className="p-4 bg-white rounded-t-[16px] flex-shrink-0 border-b">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-neutral-300 mb-4" />
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                {capability ? capability.label : 'Details'}
              </h2>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-full p-2 hover:bg-neutral-100 transition-colors active:scale-95"
                aria-label="Close"
              >
                <X size={20} className="text-neutral-600" />
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
