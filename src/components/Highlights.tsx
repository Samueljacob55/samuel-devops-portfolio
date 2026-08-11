const highlights = [
  {
    text: 'Built a 4-VM CI/CD pipeline automating Docker builds through Kubernetes deployment, with Jenkins and Ansible handling the full path from commit to production.',
    context: 'Project',
    detail: 'E-Commerce K8s Deployment',
  },
  {
    text: 'Designed a highly available AWS architecture spanning multiple Availability Zones, with Auto Scaling, health checks, and CloudWatch alerting wired end to end.',
    context: 'Project',
    detail: 'Scalable AWS Infrastructure',
  },
  {
    text: 'Monitored live infrastructure and applications with Prometheus and Grafana, and collaborated on troubleshooting during a hands-on cloud internship.',
    context: 'Experience',
    detail: 'BDreamz Global Solutions',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <figure key={h.detail} className="liquid-glass rounded-2xl p-6">
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              &ldquo;{h.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-white/50">{h.context}</p>
              <p className="text-sm font-semibold text-white mt-0.5">{h.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
