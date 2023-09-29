
import { useParams, useNavigate } from "react-router-dom"


export default function Product() {



    const handleClick = () =>{

        return navigate('/products')
        
    }



    const { id } = useParams()

    const navigate = useNavigate()



    return (
        <>
            <h1>Product nº { id }</h1>

            <button onClick={handleClick}>lista de produtos</button>
        </>
    )
}