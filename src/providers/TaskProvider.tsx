import {
	Dispatch,
	FunctionComponent,
	ReactNode,
	SetStateAction,
	createContext,
	useState
} from 'react'

export interface ITaskContext {
	isInteractionPost: boolean
	setIsInteractionPost: Dispatch<SetStateAction<boolean>>
}

export const TaskContext = createContext<ITaskContext | null>(null)

const TaskProvider: FunctionComponent<{ children: ReactNode }> = ({
	children
}) => {
	const [isInteractionPost, setIsInteractionPost] =
		useState<boolean>(false)

	return (
		<TaskContext.Provider
			value={{ isInteractionPost: isInteractionPost, setIsInteractionPost: setIsInteractionPost }}
		>
			{children}
		</TaskContext.Provider>
	)
}

export default TaskProvider
