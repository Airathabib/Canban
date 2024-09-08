import { FunctionComponent } from 'react'

import { IField } from '../../interfaces/interfaces'


const Field: FunctionComponent<IField> = ({ ...rest }) => {
	return <input {...rest} />
}

export default Field
