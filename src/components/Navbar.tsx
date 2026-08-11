import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { ResumeButton } from './Primitives';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Focus Areas', href: '#focus' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between"
    >
      <a href="#home" className="flex items-center gap-2.5">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Samuel"
          className="w-8 h-8 rounded-full object-cover border border-white/20"
        />
        <span className="font-semibold tracking-tight hidden sm:inline">Samuel</span>
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <div className="hidden md:block">
        <ResumeButton />
      </div>

      <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
        <Menu className="w-4 h-4 text-white" />
      </button>
    </motion.nav>
  );
}
