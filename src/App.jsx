// Edit these to change what the home page shows.
const profile = {
  name: 'BigDutch15',
  tagline: 'Welcome to my home page.',
  about:
    'I build front ends with Vue, React, Next.js, and Angular, and back ends in C#. I manage the infrastructure behind them with Terraform, CI/CD pipelines, Docker, and Kubernetes. Outside of work I run a homelab on Proxmox and OpenWRT, where I try out new tools and setups. I also work with Claude Code and run open-source models locally with Ollama. This site is my home base, and my GitHub has the code behind my projects.',
}

const links = [
  { label: 'GitHub', href: 'https://github.com/BigDutch15' },
]

export default function App() {
  return (
    <main className="home">
      <header>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
      </header>

      <section className="about">
        <p>{profile.about}</p>
      </section>

      <nav aria-label="Links">
        <ul className="links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}
