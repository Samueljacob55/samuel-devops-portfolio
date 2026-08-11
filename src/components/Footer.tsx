import { Mail } from 'lucide-react';
import { LogoMark, GithubIcon, LinkedinIcon } from './Primitives';

export default function Footer() {
  return (
    <footer className="relative z-10 max-w-6xl mx-auto px-6 py-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
      <a href="#home" className="flex items-center gap-2">
        <LogoMark className="w-5 h-5" />
        <span className="text-sm font-semibold text-white/80">Samuel</span>
      </a>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Samueljacob55"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/contact-samuel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <a
          href="mailto:samjacobwilliam23@gmail.com"
          aria-label="Email"
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <p className="text-xs text-white/40">© {new Date().getFullYear()} Samuel</p>
    </footer>
  );
}
