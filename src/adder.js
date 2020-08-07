import React from 'react';

const Adder = (props) => {
	return (
		<div>
			<p>{props.number1+props.number2}</p>
		</div>
    );
}

export default Adder