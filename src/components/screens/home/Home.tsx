import { FunctionComponent, useEffect, useState } from 'react'

import Layout from '../../layout/Layout'
import CardTask from '../../ui/card-task/CardTask';
import { IDataTasks } from '../../interfaces/interfaces';

import styles from './Home.module.scss'

const Home: FunctionComponent = () => {
	const [dataTasks, setDataTasks] = useState<IDataTasks[]>([])

	useEffect(() => {
		if (localStorage.getItem('tasks')) {
			setDataTasks(JSON.parse(localStorage.getItem('tasks') as string))
		}
	}, [])

	return (
		<Layout>
			<main>
				<div className='container'>
					<section className={styles.kanban_board}>
						<CardTask
							dataTasks={dataTasks}
							setDataTasks={setDataTasks}
							title='Backlog'
							variant='backlog'
						/>
						<CardTask
							dataTasks={dataTasks}
							setDataTasks={setDataTasks}
							title='Ready'
							variant='ready'
						/>
						<CardTask
							dataTasks={dataTasks}
							setDataTasks={setDataTasks}
							title='In Progress'
							variant='progress'
						/>
						<CardTask
							dataTasks={dataTasks}
							setDataTasks={setDataTasks}
							title='Finished'
							variant='finished'
						/>
					</section>
				</div>
			</main>
		</Layout>
	)
}

export default Home
