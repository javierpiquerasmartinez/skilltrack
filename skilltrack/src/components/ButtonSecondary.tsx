import './ButtonSecondary.css'

function ButtonSecondary({ children }: { children: React.ReactNode }) {
    return (
        <button>{children}</button>
    )
}

export default ButtonSecondary