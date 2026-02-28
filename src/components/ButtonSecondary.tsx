import './ButtonSecondary.css'

function ButtonSecondary({ children }: { children: React.ReactNode }) {
    return (
        <button className='btn-secondary'>{children}</button>
    )
}

export default ButtonSecondary