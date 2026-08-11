import { Check } from 'lucide-react';

type Area = {
  label: string;
  stackLine: string;
  desc: string;
  skills: string[];
  anchor: string;
  pro?: boolean;
};

const areas: Area[] = [
  {
    label: 'Cloud Infrastructure',
    stackLine: 'AWS · Azure',
    desc: 'Designing and deploying scalable cloud architecture across multiple services and Availability Zones.',
    skills: ['EC2 & Auto Scaling', 'VPC & Networking', 'IAM & Security', 'CloudWatch & SNS'],
    anchor: '#work',
  },
  {
    label: 'DevOps & CI/CD',
    stackLine: 'Docker · K8s · Jenkins',
    desc: 'Building automated pipelines that carry a commit all the way to a running deployment.',
    skills: ['Jenkins Pipelines', 'Docker & Kubernetes', 'Ansible Automation', 'Git & GitHub'],
    anchor: '#work',
    pro: true,
  },
  {
    label: 'Monitoring & SRE',
    stackLine: 'Prometheus · Grafana',
    desc: 'Keeping infrastructure observable, reliable, and easy to reason about under load.',
    skills: ['Prometheus & Grafana', 'CloudWatch & CloudTrail', 'Terraform', 'Shell Scripting'],
    anchor: '#skills',
  },
];

export default function FocusAreas() {
  return (
    <section className="c3-pricing-section" id="focus">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves={2} stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope={0.075} />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Cloud.</span>
          <span className="c3-watermark-line-2">Native.</span>
        </div>
      </div>

      <div className="c3-grid">
        {areas.map((area) => (
          <div key={area.label} className={`c3-card ${area.pro ? 'c3-card-pro' : ''}`}>
            <span className="c3-tier-small">{area.label}</span>
            <span className="c3-tier-large" style={{ fontSize: '1.7rem' }}>
              {area.stackLine}
            </span>
            <p className="c3-desc">{area.desc}</p>
            <ul className="c3-list">
              {area.skills.map((skill) => (
                <li key={skill}>
                  <span className="c3-check">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
            <a href={area.anchor} className="c3-btn">
              View related work
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
