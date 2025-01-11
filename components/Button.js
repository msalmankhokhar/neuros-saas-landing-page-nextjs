
export default function Button({variant, icon, children}) {
    return (
        <>
            <button className={`btn ${variant} ${icon && 'btn-icon'}`}>
                {icon && icon}
                <span>{children}</span>
            </button>
        </>
    )
}
