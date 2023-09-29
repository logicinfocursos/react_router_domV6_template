import { Link } from "react-router-dom";

export default function Products() {
    return (
        <>
            <nav>
            <Link to='/'>home</Link>
            <Link to='/product/1'>produto 1</Link>
            <Link to='/product/2'>produto 2</Link>
            <Link to='/product/3'>produto 3</Link>
        </nav>
        </>
    )
}