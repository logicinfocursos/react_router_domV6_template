import {
    Link

} from "react-router-dom"
export const Navbar = () => {
    return (
        <nav>
            <Link to='/'>home</Link>
            <Link to='/products'>produtos</Link>
            <Link to='/login'>login</Link>
            <Link to='/contact'>contato</Link>
        </nav>
    )
}