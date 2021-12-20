import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {CarouselPortada} from "../carouselportada/CarouselPortada"
import { Paralelogramos } from "../paralelogramos/Paralelogramos"
import { ParalelogramosGroup } from "../paralelogramosgroup/ParalelogramosGroup"





export const ViewContainer = () => {
    const {cat} = useParams()

    return (
        <>
           
            <CarouselPortada></CarouselPortada>
            {/* <ParalelogramosGroup></ParalelogramosGroup> */}
            <p>Hola {cat}</p>
            {/* <Paralelogramos categoria={"FECHA"} dato={"22/11"} color_cuadro={"#ffff33"}></Paralelogramos> */}
           
        </>
    )
}
