import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { capabilityData, Capability } from '@/lib/capabilityData';
import { STAGE_COLORS } from '@/lib/types';

interface SearchProps {
  onSelect: (id: string) => void;
}

export function Search({ onSelect }: SearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Capability[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const filtered = capabilityData.filter(cap =>
      cap.label.toLowerCase().includes(query.toLowerCase()) ||
      cap.summary.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onSelect(id);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search capabilities..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 bg-white h-11 md:h-10"
          id="search-capabilities"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg border shadow-lg max-h-80 overflow-y-auto z-50">
          {results.map((cap) => (
            <button
              key={cap.id}
              onClick={() => handleSelect(cap.id)}
              className="w-full px-4 py-3 min-h-[56px] text-left hover:bg-muted/50 transition-colors flex items-center gap-3 border-b last:border-b-0"
            >
              <span className={`w-2 h-2 rounded-full ${STAGE_COLORS[cap.stage]}`} />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{cap.label}</p>
                <p className="text-xs text-muted-foreground truncate">{cap.stage}</p>
              </div>
            </button>
          ))}
        </div>
      )}
      
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg border shadow-lg p-4 z-50">
          <p className="text-sm text-muted-foreground text-center">No capabilities found</p>
        </div>
      )}
    </div>
  );
}
