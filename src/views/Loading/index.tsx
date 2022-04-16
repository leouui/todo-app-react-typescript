import { Spinner } from "../../components"

const LoadingScreen = () => {
    return <div className="bg-auth" style={{color:"#fff",gap:"10px"}}>
        <Spinner/>
        <h2>Cargando...</h2>
    </div>
}

export default LoadingScreen