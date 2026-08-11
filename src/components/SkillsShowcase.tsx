import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

const chips = ['Infrastructure as Code', 'CI/CD Automation', 'Container Orchestration', 'Observability'];

const skillGroups = [
  {
    label: 'Cloud Platforms',
    count: 14,
    color: '#ffffff',
    items: 'AWS EC2, Lambda, S3, VPC, Route 53, IAM, CloudWatch, RDS, Azure',
  },
  {
    label: 'DevOps & CI/CD',
    count: 3,
    color: '#e5e5e5',
    items: 'Docker, Jenkins, Kubernetes',
  },
  {
    label: 'Monitoring & IaC',
    count: 4,
    color: '#a3a3a3',
    items: 'Prometheus, Grafana, Ansible, Terraform',
  },
  {
    label: 'Programming & VC',
    count: 3,
    color: '#525252',
    items: 'Python, Git, GitHub',
  },
];

export default function SkillsShowcase() {
  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow label="Skills" tag="Cloud-native" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Automate everything,
            <br />
            monitor what matters.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Experienced in infrastructure monitoring, log analysis, incident response, and
            cloud deployments through internship and project work — continuously learning
            cloud-native and Site Reliability Engineering practices.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass rounded-2xl p-5"
        >
          <p className="text-xs text-white/50 mb-4">Skill inventory · 24 technologies</p>
          <div className="space-y-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="liquid-glass rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: group.color }}>
                    {group.label}
                  </span>
                  <span className="text-xs text-white/40">{group.count}</span>
                </div>
                <p className="text-xs text-white/50 leading-[1.5]">{group.items}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
