import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Search, TerminalSquare } from 'lucide-react';

const menuItems = ['whoami', 'skills', 'experience', 'projects', 'certifications', 'contact'];

export default function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          weekday: 'short',
          hour: 'numeric',
          minute: '2-digit',
        })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <TerminalSquare className="w-3.5 h-3.5 text-white/80" />
          <span className="font-bold text-white">samuel@devops</span>
          {menuItems.map((item, i) => {
            const visibility = i > 3 ? 'hidden md:inline' : i > 2 ? 'hidden sm:inline' : '';
            return (
              <span key={item} className={`text-white/60 font-mono ${visibility}`}>
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex items-center gap-2 text-white/60">
          <Search className="w-3.5 h-3.5" />
          <span>{time || '—'}</span>
        </div>
      </div>
    </motion.div>
  );
}
