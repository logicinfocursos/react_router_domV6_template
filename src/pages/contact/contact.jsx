import { useNavigate } from "react-router-dom"


export default function Contact() {

    const navigate = useNavigate()

    return (
        <>
            <h1>Contact</h1>
            <br/><br/><br/>
            <button onClick={()=>navigate('/')}>home</button>
        </>
    )
}