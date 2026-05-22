import FadeUp from '@/components/FadeUp'

interface Post {
  title: string
  link: string
  pubDate: string
  description: string
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://danandari.substack.com/feed', {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return []
    const xml = await res.text()
    return parseRSS(xml, 3)
  } catch {
    return []
  }
}

function parseRSS(xml: string, count: number): Post[] {
  const posts: Post[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xml)) !== null && posts.length < count) {
    const item = match[1]

    const title = (
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ??
      item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ??
      ''
    ).trim()

    const link = (item.match(/<link>(.*?)<\/link>/)?.[1] ?? '').trim()

    const pubDate = (item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? '').trim()

    const rawDesc =
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ??
      item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ??
      ''

    const description = stripHtml(rawDesc).slice(0, 140).trimEnd() + '…'

    if (title && link) {
      posts.push({ title, link, pubDate, description })
    }
  }

  return posts
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

export default async function Writing() {
  const posts = await getPosts()

  return (
    <section id="writing" className="py-24 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <FadeUp>
          <p className="section-label mb-10">Writing</p>

          <p className="text-primary/90 text-[17px] leading-[1.75] mb-10">
            Dan &amp; Ari is a Substack about physics, written with my son Ari, who is 7 and
            wants to be an astrophysicist. Not an astronaut. He is very clear about that. We
            write about the cosmos, how things work, and why the universe behaves the way it
            does. The physics is accurate. The writing is for everyone.
          </p>

          {posts.length === 0 ? (
            <div className="py-12 text-center text-secondary text-sm">
              No posts yet. Check back soon.
            </div>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-border rounded-xl p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C5C0B8] transition-all duration-300 block group"
                >
                  {post.pubDate && (
                    <p className="text-xs text-secondary mb-2">{formatDate(post.pubDate)}</p>
                  )}
                  <h3 className="font-heading font-semibold text-primary text-[17px] leading-snug group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{post.description}</p>
                </a>
              ))}
            </div>
          )}

          <div className="mt-8 mb-10">
            <a
              href="https://substack.com/@danandari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm font-medium hover:underline underline-offset-4"
            >
              Read all posts &rarr;
            </a>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-heading font-semibold text-primary text-[17px] leading-snug">
                Dragons Don&rsquo;t Eat Ice Cream
              </h3>
              <div className="flex items-center gap-2 shrink-0 mt-0.5">
                <span className="text-xs font-medium text-secondary border border-border rounded-full px-2.5 py-0.5">
                  Book
                </span>
                <span className="text-xs font-medium rounded-full px-2.5 py-0.5 border bg-badge-progress/10 text-badge-progress border-badge-progress/25">
                  In Progress
                </span>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              An anaphylaxis awareness story for kids and the parents who love them.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
