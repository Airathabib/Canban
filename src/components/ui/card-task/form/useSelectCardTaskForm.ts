import { useState, useEffect, useMemo } from 'react'

import { IDataTasks, ISelectOPtionProps  } from '../../../interfaces/interfaces'

export const useSelectCardTaskForm = (
	dataTasks: IDataTasks[],
	variant: string
) => {
	const [selectOptions, setSelectOptions] = useState<ISelectOPtionProps[]>([])
	const [selectValue, setSelectValue] = useState<string>('')

	useEffect(() => {
		const selectOptions = [] as ISelectOPtionProps[]

		dataTasks.forEach(data => {
			if (
				(data.block === 'backlog' && variant === 'ready') ||
				(data.block === 'ready' && variant === 'progress') ||
				(data.block === 'progress' && variant === 'finished')
			) {
				selectOptions.push({ value: data.title, label: data.title })
			}
		})

		setSelectOptions(selectOptions)
	}, [dataTasks])

	return useMemo(
		() => ({
			selectOptions,
			selectValue,
			setSelectValue
		}),
		[selectOptions, selectValue]
	)
}
