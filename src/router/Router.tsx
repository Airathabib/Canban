import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import NotFound from '../components/pages/not-found/NotFound'

import { routes } from './routes.data'

const Router: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default Router
