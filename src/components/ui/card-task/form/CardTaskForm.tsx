import { FunctionComponent } from 'react'
import Select from 'react-select'

import { useSelectCardTaskForm } from './useSelectCardTaskForm'
import styles from './CardTaskForm.module.scss'
import Button from '../../button/Button'
import Field from '../../field/Field'
import { ICardTaskFormProps } from '../../../interfaces/interfaces'

const CardTaskForm: FunctionComponent<ICardTaskFormProps> = ({
	dataTasks,
	variant,
	fieldValue,
	handleSubmit,
	handleChangeInput,
	handleCancelClick,
	isDuplicateTask
}) => {
	const { selectOptions, selectValue, setSelectValue } = useSelectCardTaskForm(
		dataTasks,
		variant
	)

	return (
		<form className={styles.card_task_from} onSubmit={handleSubmit}>
			{variant === 'backlog' ? (
				<Field
					type='text'
					name='title'
					onInput={handleChangeInput}
				/>
			) : (
				<Select
					name='title'
					options={selectOptions}
					required
					placeholder=''
					classNamePrefix='select'
					onChange={e => setSelectValue(e!.label)}
				/>
			)}

			<div>
				{isDuplicateTask && (
					<div className='validation'>The task is already on the list</div>
				)}
				<Button
					children={fieldValue.length || selectValue ? 'Submit' : 'Add card'}
					disabled={fieldValue.length || variant !== 'backlog' ? false : true}
					variant={fieldValue.length || selectValue ? 'submit' : 'add-card'}
				/>
				<Button
					children='Cancel'
					variant='cancel'
					onClick={handleCancelClick}
				/>
			</div>
		</form>
	)
}

export default CardTaskForm
