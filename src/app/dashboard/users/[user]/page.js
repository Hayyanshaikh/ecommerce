import React from 'react'

const page = ({params}) => {
	return (
		<div>
			user : { params.user }
		</div>
	)
}

export default page