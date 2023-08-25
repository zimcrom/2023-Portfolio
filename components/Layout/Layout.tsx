import Header from "../Header/Header"

function Layout({ children }: { children: React.ReactNode}) {
    return (
<>
<Header />
{children}
</>
    )
}

export default Layout