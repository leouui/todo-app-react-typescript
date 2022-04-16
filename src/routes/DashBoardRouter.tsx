import { Route, Routes } from "react-router-dom"
import { NavBar, Header } from "../layout"
import { TaskContextHOC } from "../stateManagment/context"
import { dashBoardRoutes } from "./routes"

const DashBoardRouter = () => {
    return <TaskContextHOC>
        <main className="bg-dashboard">
            <div className="wid-page">
                <Header/>
                
                <NavBar/>
                
                    <Routes>
                        {
                            dashBoardRoutes.map(({path,Component,name})=> (
                                <Route key={name} path={path} element={<Component/>}/>
                            ))
                        }
                    </Routes>
            </div>
        </main>
    </TaskContextHOC>
}

export default DashBoardRouter