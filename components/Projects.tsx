import FadeUp from '@/components/FadeUp'

const projects = [
  {
    name: 'Covered',
    description: "PTO and family calendar planner — so school days off don't catch you off guard.",
    type: 'App',
    status: 'Coming Soon' as const,
  },
  {
    name: 'Liftoff Lab',
    description: 'A physics-based rocket builder game for kids, co-designed with a 7-year-old.',
    type: 'Game',
    status: 'Coming Soon' as const,
  },
  {
    name: "Dragons Don't Eat Ice Cream",
    description: 'An anaphylaxis awareness story for kids and the parents who love them.',
    type: 'Book',
    status: 'In Progress' as const,
  },
]

export default function Projects() {
  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10">Work</p>
          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-surface border border-border rounded-xl p-6 hover:shadow-[0_4px_32px_rgba(0,0,0,0.5)] hover:border-[#333] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading font-semibold text-primary text-[17px] leading-snug">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-secondary border border-border rounded-full px-2.5 py-0.5">
                      {project.type}
                    </span>
                    <span
                      className={`text-xs font-medium rounded-full px-2.5 py-0.5 border ${
                        project.status === 'Coming Soon'
                          ? 'bg-badge-soon/10 text-badge-soon border-badge-soon/25'
                          : 'bg-badge-progress/10 text-badge-progress border-badge-progress/25'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
