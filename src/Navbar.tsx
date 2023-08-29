export default function NavBar() {
    const path = window.location.pathname;
    // const executeScroll = () => myRef.current.scrollIntoView()  
    return <nav id='nav' className="nav">
        <a href={'#nav'} className='site-name'>Kristoffer Gregersen</a>
        <ul>
            <li><a href={'#aboutme'}>About Me</a></li>
            <li><a href={'#projects'}>Projects</a></li>
            
            {/* <CustomLink to="/about">About</CustomLink>
            <CustomLink to="#projects">Projects</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink> */}
        </ul>
    </nav>
}

