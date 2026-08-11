import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  LayoutGrid,
  Cloud,
  Briefcase,
  FolderGit2,
  Award,
  Search,
  ExternalLink,
  Star,
  MoreHorizontal,
} from 'lucide-react';
import { GithubIcon } from './Primitives';

const navItems = [
  { icon: LayoutGrid, label: 'Overview', active: true },
  { icon: Cloud, label: 'Skills' },
  { icon: Briefcase, label: 'Experience' },
  { icon: FolderGit2, label: 'Projects', count: 2 },
  { icon: Award, label: 'Certifications', count: 3 },
];

const stack = [
  { name: 'AWS', color: '#00d2ff' },
  { name: 'Docker', color: '#A4F4FD' },
  { name: 'Kubernetes', color: '#f59e0b' },
  { name: 'Ansible', color: '#10b981' },
];

type Entry = {
  name: string;
  subject: string;
  preview: string;
  status: string;
  tag: string;
  detail: {
    summary: string;
    paragraphs: string[];
    flow?: string;
    stack: string[];
  };
};

const entries: Entry[] = [
  {
    name: 'Project',
    subject: 'E-Commerce Deployment on Kubernetes',
    preview: 'Jenkins CI/CD → Docker → K8s, monitored with Prometheus & Grafana',
    status: 'Live',
    tag: 'DevOps',
    detail: {
      summary:
        'A 4-VM AWS EC2 DevOps architecture automating the full path from a Git push to a running Kubernetes deployment, with live monitoring.',
      paragraphs: [
        'Designed a 4-VM AWS EC2 DevOps architecture — VM1 (Ansible, Prometheus, Grafana), VM2 (Jenkins, Docker, Git, kubectl), VM3 (Kubernetes Master Node), and VM4 (Kubernetes Worker Node).',
        'Built a CI/CD pipeline using Jenkins to automate the Docker image build, Docker Hub push, and Kubernetes deployment.',
        'Automated configuration using Ansible and monitored application performance using Prometheus & Grafana.',
      ],
      flow: 'Developer → GitHub → Jenkins → Docker Build → Docker Hub → K8s Master → K8s Worker → Deployment → Prometheus → Grafana',
      stack: ['AWS EC2', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'GitHub', 'Prometheus', 'Grafana'],
    },
  },
  {
    name: 'Project',
    subject: 'Scalable & Highly Available AWS Infrastructure',
    preview: 'VPC, ALB, and Auto Scaling across multiple Availability Zones',
    status: 'Live',
    tag: 'Cloud',
    detail: {
      summary:
        'A highly available web application on AWS spanning multiple Availability Zones, with automated provisioning, health checks, and alerting.',
      paragraphs: [
        'Designed and deployed a highly available web application on AWS using VPC, EC2, ALB, and an Auto Scaling Group across multiple Availability Zones.',
        'Configured EC2 instances with Apache HTTP Server, created a custom AMI, and built a Launch Template for automated provisioning.',
        'Implemented ALB, Target Groups, and health checks; configured Auto Scaling (Min: 1, Desired: 2, Max: 3) with CloudWatch, SNS, and Route 53 for monitoring, alerting, and DNS routing.',
      ],
      flow: 'User → Route 53 → ALB → Target Group → EC2 (ASG) → CloudWatch → Alarm → SNS → Email Alert',
      stack: ['VPC', 'EC2', 'ALB', 'Auto Scaling', 'CloudWatch', 'SNS', 'Route 53', 'Apache'],
    },
  },
  {
    name: 'Experience',
    subject: 'Cloud Computing Intern — BDreamz Global Solutions',
    preview: 'Built CI/CD pipelines and monitored infrastructure hands-on',
    status: 'Completed',
    tag: 'Internship',
    detail: {
      summary:
        'Hands-on internship gaining real production experience with AWS cloud services and core DevOps practices.',
      paragraphs: [
        'Built CI/CD pipelines using Jenkins, Docker, Kubernetes, and Ansible.',
        'Monitored infrastructure and applications using Prometheus and Grafana.',
        'Collaborated with the team to troubleshoot issues and streamline software delivery.',
      ],
      stack: ['AWS', 'Linux', 'Jenkins', 'Git', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus', 'Grafana'],
    },
  },
  {
    name: 'Certification',
    subject: 'AWS Cloud Computing & DevOps Training',
    preview: 'Besant Technologies',
    status: 'Certified',
    tag: 'Cert',
    detail: {
      summary: 'Structured training covering AWS cloud fundamentals and core DevOps tooling.',
      paragraphs: ['Issued by Besant Technologies.'],
      stack: ['AWS', 'DevOps'],
    },
  },
  {
    name: 'Certification',
    subject: 'Salesforce Developer',
    preview: 'Salesforce',
    status: 'Certified',
    tag: 'Cert',
    detail: {
      summary: 'Developer-track certification from Salesforce.',
      paragraphs: ['Issued by Salesforce.'],
      stack: ['Salesforce'],
    },
  },
  {
    name: 'Certification',
    subject: 'Networking Essentials',
    preview: 'Cisco',
    status: 'Certified',
    tag: 'Cert',
    detail: {
      summary: 'Foundational networking certification covering TCP/IP, routing, and switching concepts.',
      paragraphs: ['Issued by Cisco.'],
      stack: ['Networking', 'TCP/IP'],
    },
  },
];

export default function DashboardMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = entries[activeIndex];

  return (
    <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        {/* Title bar */}
        <div className="relative h-10 flex items-center px-4 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">
            Samuel — Console
          </span>
        </div>

        <div className="grid grid-cols-12 min-h-[520px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 hidden sm:flex sm:flex-col">
            <div className="rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Cloud &amp; DevOps
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
                    item.active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </span>
                  {item.count && <span className="text-white/40">{item.count}</span>}
                </div>
              ))}
            </nav>

            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-widest text-white/40 px-2.5 mb-2">
                Core Stack
              </p>
              <div className="flex flex-col gap-1.5">
                {stack.map((s) => (
                  <div key={s.name} className="flex items-center gap-2 px-2.5 py-1 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* List */}
          <div className="col-span-12 sm:col-span-9 md:col-span-4 border-r border-white/10 overflow-y-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-xs text-white/50">
              <Search className="w-3.5 h-3.5" />
              <span>Search work &amp; credentials</span>
            </div>
            {entries.map((entry, i) => (
              <button
                key={entry.subject}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-4 py-3 border-b border-white/5 cursor-pointer transition-colors ${
                  i === activeIndex ? 'bg-white/5' : 'hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">{entry.name}</span>
                  <span className="text-[10px] text-white/40">{entry.status}</span>
                </div>
                <p className="text-xs mt-0.5 text-white/90">{entry.subject}</p>
                <p className="text-[11px] text-white/40 mt-0.5 truncate">{entry.preview}</p>
              </button>
            ))}
          </div>

          {/* Reader / detail pane */}
          <div className="hidden md:flex md:col-span-5 flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-1 text-white/60">
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <GithubIcon className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5" />
                </button>
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <h3 className="text-base font-semibold text-white">{active.subject}</h3>
              <div className="flex items-center gap-2.5 mt-3">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold">
                  {active.name[0]}
                </span>
                <div className="text-xs">
                  <span className="text-white font-medium">{active.name}</span>
                  <span className="text-white/40"> · Samuel</span>
                </div>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50">
                  {active.tag}
                </span>
              </div>

              <div className="liquid-glass rounded-lg p-3 mt-5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                  <span className="text-xs font-semibold text-white">Summary</span>
                </div>
                <p className="text-xs text-white/70 leading-[1.5]">{active.detail.summary}</p>
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/75 leading-[1.6]">
                {active.detail.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {active.detail.flow && (
                <div className="mt-5 font-mono text-[11px] text-white/50 leading-[1.9] bg-white/[0.02] border border-dashed border-white/10 rounded-lg p-3">
                  {active.detail.flow}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {active.detail.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-white/60 border border-white/10 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
