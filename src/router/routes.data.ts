import Home from '../components/pages/main/Main'
import Tasks from '../components/tasks/Tasks'
import { IRoutes } from '../components/interfaces/interfaces'

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
