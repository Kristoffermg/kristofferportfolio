import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    const path = window.location.pathname;
    return <nav className="nav">
        <Link to="/" className="site-name">KMG Portfolio</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}: {to: string; children: string}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}