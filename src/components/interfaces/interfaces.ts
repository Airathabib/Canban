import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string
}
export interface IField extends InputHTMLAttributes<HTMLInputElement> {}

export  interface IDataTasks {
	block: string
	id: number
	title: string
	description: string
}

export interface ICardTaskFormProps {
	dataTasks: IDataTasks[]
	variant: string
	fieldValue: string
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleChangeInput: (e: React.FormEvent<HTMLInputElement>) => void
	handleCancelClick: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void
	isDuplicateTask: boolean
}

export interface ICardTaskProps {
	dataTasks: IDataTasks[]
	setDataTasks: React.Dispatch<React.SetStateAction<IDataTasks[]>>
	title: string
	variant: string
}

export interface ISelectOPtionProps {
	value: string
	label: string
}

