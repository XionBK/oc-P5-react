import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function ErrorPage () {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("404")
    }, []);
    
    return <div className="error404">
        <h1>404</h1>
        <h2 className="title">Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/">Retourner sur la page d’accueil</a>
    </div>
}