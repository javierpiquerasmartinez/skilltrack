import './Header.css'

function Header() {
    return (
        <header>
            <h3>SkillTrack</h3>
            <nav>
                <a href="">Dashboard</a>
                <a href="">Objetivos</a>
                <a href="">Estadísticas</a>
            </nav>
            <div>
                <button className='theme-toggle'>🌙</button>
            </div>
        </header>
    )
}

export default Header