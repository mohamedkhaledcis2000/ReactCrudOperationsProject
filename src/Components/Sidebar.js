import { Link } from "react-router-dom"

export default function Sidebar (){
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to={'/products'}>Get All Products</Link>
                </li>
                <li>
                    <a href ='#'>Get All Categories</a>
                </li>
            </ul>
        </>
    )
}