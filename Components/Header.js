import Link from 'next/link'
function Header() {
  return (
    <header>
      <h1>Pat's Salmon Cookies: Admin Hub</h1>
      <Link href="/overview"><a>Overview</a></Link>
    </header>
  )
}

export default Header