import { FunctionComponent } from 'react'

import Layout from '../../layout/Layout'

import TasksInfo from './info/TasksInfo'
import styles from './Tasks.module.scss'
import { useTasks } from './useTasks'

const Tasks: FunctionComponent = () => {
	const { isNotFoundTaskId, ...rest } = useTasks()

	return (
		<>
			  (
				<Layout>
					<main>
						<div className='container'>
							<section className={styles.task_wrapper}>
								<TasksInfo {...rest} />
							</section>
						</div>
					</main>
				</Layout>
			)
		</>
	)
}

export default Tasks
