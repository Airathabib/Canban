import { FunctionComponent, ReactNode } from 'react'

import Header from './header/Header'
import Footer from './footer/Footer'

import styles from './Layout.module.scss'

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
	return (
		<section className={styles.layout}>
			<Header />
			{children}
			<Footer />
		</section>
	)
}

export default Layout
