import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/screens/home/Home'
import NotFound from '../components/screens/not-found/NotFound'
import Tasks from '../components/tasks/Tasks'

const Router: FunctionComponent = () => {
	return (

			<Routes>
					<Route
						key={'/kanban-board'}
						path={'/kanban-board'}
						element={<Home/>}
					/>
					<Route
						key={'/kanban-board/tasks/:id'}
						path={'/kanban-board/tasks/:id'}
						element={<Tasks/>}
					/>
				<Route path='*' element={<NotFound/>} />
			</Routes>

	)
}

export default Router
