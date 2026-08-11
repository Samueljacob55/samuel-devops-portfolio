import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { ResumeButton, gradientStyle, GithubIcon, LinkedinIcon } from './Primitives';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 pt-14 md:pt-20 pb-16 md:pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-10 items-center">
        {/* Text column */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300/90 bg-emerald-400/5 border border-emerald-400/20 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Cloud / DevOps roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]"
          >
            <span className="block text-white">Samuel —</span>
            <span className="block animate-shiny" style={gradientStyle}>
              Cloud &amp; DevOps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-white/60 max-w-lg mx-auto md:mx-0 text-base leading-[1.6]"
          >
            Aspiring Cloud &amp; DevOps Engineer with hands-on experience across AWS, Linux,
            Jenkins, Docker, Kubernetes, Git, and Python-driven CI/CD automation — building
            reliable, scalable, automated software delivery pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center md:items-start gap-6"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <ResumeButton />
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center gap-5 text-white/50">
              <a
                href="https://github.com/Samueljacob55"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/contact-samuel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:samjacobwilliam23@gmail.com"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-sm"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-2 flex justify-center md:justify-end md:pr-6"
        >
          <div className="relative w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* Decorative dotted orbit ring */}
            <div className="absolute -inset-6 rounded-[2.5rem] border border-dashed border-white/10 pointer-events-none" />

            <motion.div
              className="absolute -inset-2 rounded-[2rem] opacity-80 blur-lg"
              style={{
                background: 'conic-gradient(from 0deg, #00d2ff, #9b6bff, #A4F4FD, #00d2ff)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src="/profile-hero.jpg"
              alt="Samuel"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full rounded-[1.75rem] object-cover border-2 border-white/20 shadow-[0_20px_60px_-15px_rgba(0,210,255,0.5)]"
            />

            {/* Floating tech badges — position on the wrapper, liquid-glass styling on the inner div
                (liquid-glass sets position:relative in CSS, which would otherwise fight the
                Tailwind `absolute` utility if applied to the same element) */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 0.9, duration: 0.6 },
                x: { delay: 0.9, duration: 0.6 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 },
              }}
              className="hidden sm:block absolute top-1 -left-6 z-10"
            >
              <div className="liquid-glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-white/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                AWS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1.05, duration: 0.6 },
                x: { delay: 1.05, duration: 0.6 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.05 },
              }}
              className="hidden sm:block absolute top-8 -right-4 z-10"
            >
              <div className="liquid-glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-white/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9b6bff]" />
                K8s
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{
                opacity: { delay: 1.2, duration: 0.6 },
                x: { delay: 1.2, duration: 0.6 },
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
              }}
              className="hidden sm:block absolute bottom-5 -left-5 z-10"
            >
              <div className="liquid-glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-white/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A4F4FD]" />
                Docker
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 1.35, duration: 0.6 },
                x: { delay: 1.35, duration: 0.6 },
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.35 },
              }}
              className="hidden sm:block absolute bottom-0 -right-2 z-10"
            >
              <div className="liquid-glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono text-white/80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Jenkins
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
