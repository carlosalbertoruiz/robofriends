import React from 'react';

const Scroll = (props) => {
	console.log(props);
	return (
		<div style={ {overflow: 'scroll', border: '1px solid purple', height: '1080px'} }>
			{props.children}
		</div>
	);
}; 

export default Scroll;