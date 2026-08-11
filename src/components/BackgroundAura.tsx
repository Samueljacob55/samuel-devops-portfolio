import { motion } from 'motion/react';

/**
 * A fixed, fullscreen animated backdrop — an original CSS/Framer-Motion
 * gradient-ribbon effect (not the Aura reference video, which belongs to
 * that product). Evokes the same cinematic blue/purple motion feel.
 */
export default function BackgroundAura() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0c0c0c]">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,210,255,0.28), transparent 65%)',
        }}
        animate={{
          x: ['0%', '15%', '-5%', '0%'],
          y: ['0%', '10%', '-10%', '0%'],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(11,37,81,0.55), transparent 65%)',
        }}
        animate={{
          x: ['0%', '-12%', '8%', '0%'],
          y: ['0%', '-8%', '12%', '0%'],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/4 w-[50vw] h-[50vw] rounded-full blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(164,244,253,0.14), transparent 65%)',
        }}
        animate={{
          x: ['0%', '10%', '-10%', '0%'],
          y: ['0%', '-6%', '6%', '0%'],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[#0c0c0c]/40" />
    </div>
  );
}
