import { FunctionComponent } from 'react'

import Home from '../components/pages/main/Main'
import Tasks from '../components/tasks/Tasks'

interface IRoutes {
	path: string
	component: FunctionComponent
}

export const routes: IRoutes[] = [
	{
		path: '/Kanban-board',
		component: Home
	},
	{
		path: '/Kanban-board/tasks/:id',
		component: Tasks
	}
]
