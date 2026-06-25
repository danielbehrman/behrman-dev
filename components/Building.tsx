import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

type Status = 'Dogfooding' | 'Coming Soon'

interface Project {
  name: string
  description: string
  type: string
  status: Status
  icon: string
  href?: string
  iosSoon?: boolean
}

const projects: Project[] = [
  {
    name: 'Covered',
    icon: '/covered-icon.svg',
    description: "PTO and family calendar planner — so school days off don't catch you off guard.",
    type: 'Web App',
    status: 'Dogfooding',
    href: 'https://covered.behrman.dev/signup',
  },
  {
    name: 'TIP Pal',
    icon: '/tippal-icon.png',
    description: 'A daily dosing assistant for families in food allergy tolerance induction programs.',
    type: 'Web App',
    status: 'Dogfooding',
    href: 'https://tippal.behrman.dev',
    iosSoon: true,
  },
  {
    name: 'Liftoff Lab',
    icon: '/appstore-placeholder.svg',
    description: 'A physics-based rocket builder game for kids, co-designed with a 7-year-old.',
    type: 'iOS Game',
    status: 'Coming Soon',
  },
]

const statusClass: Record<Status, string> = {
  'Dogfooding': 'bg-badge-dogfood/10 text-badge-dogfood border-badge-dogfood/25',
  'Coming Soon': 'bg-badge-soon/10 text-badge-soon border-badge-soon/25',
}

const cardClass =
  'flex items-stretch bg-surface border border-border rounded-xl overflow-hidden hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C5C0B8] transition-all duration-300'

export default function Building() {
  return (
    <section id="building" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10">Building</p>
          <div className="grid gap-4">
            {projects.map((project) => {
              const content = (
                <>
                  <div className="w-20 shrink-0 flex items-center justify-center p-3 bg-[#F7F5F2] border-r border-border">
                    <Image
                      src={project.icon}
                      alt={`${project.name} icon`}
                      width={64}
                      height={64}
                      className="w-full aspect-square rounded-xl object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 px-5 py-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-heading font-semibold text-primary text-[17px] leading-snug">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-secondary border border-border rounded-full px-2.5 py-0.5">
                          {project.type}
                        </span>
                        <span
                          className={`text-xs font-medium rounded-full px-2.5 py-0.5 border ${statusClass[project.status]}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                    {project.iosSoon && (
                      <p className="text-xs text-secondary mt-2 opacity-70">iOS coming soon</p>
                    )}
                  </div>
                </>
              )

              return project.href ? (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${cardClass}`}
                >
                  {content}
                </a>
              ) : (
                <div key={project.name} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
