import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-all duration-300",
        "hover:bg-secondary active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          weight="fill"
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
            "text-amber-500"
          )}
        />
        <Moon
          size={20}
          weight="fill"
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
            "text-indigo-400"
          )}
        />
      </div>
    </button>
  );
}
