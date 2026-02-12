import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { CapabilityMap } from '@/components/CapabilityMap';
import { DetailPanel } from '@/components/DetailPanel';
import { Search } from '@/components/Search';
import { Filters } from '@/components/Filters';
import { capabilityData, getCapabilityById } from '@/lib/capabilityData';
import { Stage } from '@/lib/types';
import { useIsMobile } from '@/hooks/use-mobile';

function App() {
  const [selectedId, setSelectedId] = useState<string>('code-review');
  const [activeStage, setActiveStage] = useState<Stage | null>(null);
  const isMobile = useIsMobile();
  
  const selectedCapability = selectedId ? getCapabilityById(selectedId) ?? null : null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const cap = capabilityData.find(c => c.id === id);
    if (cap && activeStage && cap.stage !== activeStage) {
      setActiveStage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">Copilot Capability Map</h1>
          <p className="text-sm text-muted-foreground">Click a capability to see what Copilot does and how to demo it</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6`}>
          <div className={`${isMobile ? 'w-full' : 'flex-1'} space-y-4`}>
            <Filters activeStage={activeStage} onStageChange={setActiveStage} />
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border shadow-sm">
              <CapabilityMap 
                selectedId={selectedId}
                activeStage={activeStage}
                onSelect={handleSelect}
              />
            </div>
          </div>
          
          <div className={`${isMobile ? 'w-full' : 'w-[400px]'} shrink-0`}>
            <div className="sticky top-24 bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <Search onSelect={handleSelect} />
              </div>
              <div className="h-[calc(100vh-220px)] min-h-[500px]">
                <DetailPanel capability={selectedCapability} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
