
export default ({ children, dialog }: { children: React.ReactNode, dialog: React.ReactNode }) => {
    return (
        <div>
            {dialog}
            {children}
        </div>
    )
}
