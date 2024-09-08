import { FunctionComponent } from 'react'
import clsx from 'clsx'
import { IButton } from '../../interfaces/interfaces'

import styles from './Button.module.scss'


const Button: FunctionComponent<IButton> = ({
	children,
	onClick,
	disabled,
	variant
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={clsx(styles.btn, {
				[styles.submit]: variant !== 'add-card'
			})}
		>
			{variant === 'add-card' && <span>+</span>}
			{children}
		</button>
	)
}

export default Button
