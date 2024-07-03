import { Link } from "react-router-dom"
import { routes } from "../../router/routes"
import { ButtonNF, ContainerNF, Img } from "./notfound.styled"

export const NotFound = () => {
    return (
        <ContainerNF>
            <Img src="public/404.png" alt="404" />
            <Link to={routes.main}><ButtonNF>Перейти на главную</ButtonNF></Link>
        </ContainerNF>
         
    )
}