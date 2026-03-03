import './ButtonSecondary.css'

function ButtonSecondary({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className='btn-secondary' {...props}>
            {children}
        </button>
    )
}

export default ButtonSecondary