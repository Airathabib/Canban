import { FunctionComponent } from 'react'

import Layout from '../../layout/Layout'

import styles from './NotFound.module.scss'

const NotFound: FunctionComponent = () => {
	return (
		<Layout>
			<main>
				<div className='container'>
					<div className={styles.not_found}>Pages Not Found</div>
				</div>
			</main>
		</Layout>
	)
}

export default NotFound
