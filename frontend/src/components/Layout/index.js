import Header from "./header/header";
const Layout = ({data, children}) => {
    return (
        <div>
            <Header headerMenus={data?.menus?.headerMenus} />
            {children}
        </div>
    )
}

export default Layout;