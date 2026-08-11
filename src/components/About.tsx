import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Cloud, MessageSquare } from 'lucide-react';
import { SectionEyebrow } from './Primitives';

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science & Engineering' },
  { icon: Briefcase, label: 'Experience', value: 'Cloud Computing Internship' },
  { icon: Cloud, label: 'Focus', value: 'AWS · DevOps · SRE Practices' },
  { icon: MessageSquare, label: 'Soft Skills', value: 'Communication · Collaboration · Troubleshooting' },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionEyebrow label="About" />
      </motion.div>

      <div className="mt-8 grid md:grid-cols-[200px_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass rounded-2xl p-2 mx-auto md:mx-0 w-fit"
        >
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Samuel"
            className="w-40 h-52 md:w-full md:h-56 object-cover rounded-xl"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-base leading-[1.7] max-w-md"
          >
            I'm an aspiring Cloud &amp; DevOps Engineer with hands-on experience in AWS, Linux,
            Jenkins, Docker, Kubernetes, Git, Python, and CI/CD automation. Through internship
            and project work I've built experience in infrastructure monitoring, log analysis,
            incident response, and cloud deployments — and I'm continuously learning cloud-native
            and Site Reliability Engineering practices.
            <br />
            <br />
            <span className="text-white/80 font-medium">
              Info Institute of Engineering, Coimbatore
            </span>{' '}
            — B.E. Computer Science and Engineering (2021–2025), affiliated to Anna University.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3"
          >
            {facts.map((fact) => (
              <li
                key={fact.label}
                className="liquid-glass rounded-lg p-4 flex items-center gap-4"
              >
                <fact.icon className="w-4 h-4 text-white/70 flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium text-white mt-0.5">{fact.value}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
