import { useParams } from "react-router-dom"


export const ViewContainer = () => {
    const {cat} = useParams()

    return (
        <div className="pt-5">
            <p>Hola {cat}</p>
        </div>
    )
}
