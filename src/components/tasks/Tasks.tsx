import { FunctionComponent } from 'react'

import Layout from '../layout/Layout'

import TasksInfo from './taskInfo/TasksInfo'
import styles from './Tasks.module.scss'
import { useTasks } from './useTasks'
import NotFound from '../pages/not-found/NotFound'

const Tasks: FunctionComponent = () => {
	const { isNotFoundTaskId, ...rest } = useTasks()

	return (
		<>
			{isNotFoundTaskId ? (
				<NotFound />
			) : (
				<Layout>
					<main>
						<div className='container'>
							<section className={styles.task_wrapper}>
								<TasksInfo {...rest} />
							</section>
						</div>
					</main>
				</Layout>
			)}
		</>
	)
}

export default Tasks
