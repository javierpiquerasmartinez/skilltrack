import './ButtonCTA.css'

function ButtonCTA({ children }: { children: React.ReactNode }) {
    return (
        <button className='btn-cta'>{children}</button>
    )
}

export default ButtonCTA