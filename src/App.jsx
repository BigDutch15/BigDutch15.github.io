// Edit these to change what the home page shows.
const profile = {
  name: 'BigDutch15',
  tagline: 'Welcome to my home page.',
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
