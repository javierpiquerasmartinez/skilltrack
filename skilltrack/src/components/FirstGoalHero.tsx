import ButtonCTA from "./ButtonCTA.tsx"
import './FirstGoalHero.css'

export default function FirstGoalHero() {
    return (
        <>
            <div className="first-goal-hero">
                <h1>Aún no hay objetivos por aquí...</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none" role="img" aria-label="Empty state icon" width="80" height="80">
                    <g stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="56" cy="56" r="34" />
                        <path d="M80 80 L110 110" />
                        <circle cx="56" cy="56" r="20" />
                        <path d="M48 52 L48 52" />
                        <path d="M64 52 L64 52" />
                        <path d="M46 68 Q56 60 66 68" />
                    </g>
                    <circle cx="110" cy="110" r="6" fill="currentColor" opacity="0.25" />
                </svg>
                <ButtonCTA>¡Crea el primero!</ButtonCTA>
            </div>
        </>
    )
}
