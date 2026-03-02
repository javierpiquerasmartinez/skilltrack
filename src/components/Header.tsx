import './Header.css'

function Header() {
    return (
        <header>
            <a href="/">
                <h3>
                    SkillTrack
                </h3>
            </a>
            <nav>
                <a href="">Dashboard</a>
                <a href="/search">Objetivos</a>
                <a href="">Estadísticas</a>
            </nav>
            <div>
                <button className='theme-toggle'>🌙</button>
            </div>
        </header>
    )
}

export default Header