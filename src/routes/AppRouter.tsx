import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useCheck } from "../hooks"
import { PrivateRoute,PublicRoute } from "./components"
import { LocationWatcher } from "./LocationWatcher"
import { LoadingScreen } from "../views"
import { routes } from "./routes"

const AppRouter = () => {
	const {loading,isAuthenticated} = useCheck()

	if(loading) return <LoadingScreen/>

	return <BrowserRouter>
		<LocationWatcher/>
		<Suspense fallback={<LoadingScreen/>}>
			<Routes>
				{routes.map(({path,Component,name,isPrivate})=> {					
					return <Route key={name} path={path} element={
						isPrivate 
							? <PrivateRoute isPrivate={isAuthenticated} element={<Component/>}/>
							: <PublicRoute  isPrivate={isAuthenticated} element={<Component/>}/>
					}/>
				})}
			</Routes>
		</Suspense>
	</BrowserRouter>
}

export default AppRouter