
import { useParams } from "react-router-dom"
import { CarouselView } from "../carouselview/CarouselView"
import { Home } from "../home/Home"





export const ViewContainer = () => {
    const {cat} = useParams()

    return (
        <>
           <CarouselView></CarouselView>
            {/* <CarouselPortada></CarouselPortada> */}
            {/* <ParalelogramosGroup></ParalelogramosGroup> */}
            {/* <p>Hola {cat}</p> */}
            {/* <Paralelogramos categoria={"FECHA"} dato={"22/11"} color_cuadro={"#ffff33"}></Paralelogramos> */}
            {/* <Home></Home> */}

        </>
    )
}
