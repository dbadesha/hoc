import React from 'react';
import styleWrapper from './../hoc/styleWrapper';

const Button = props => {
	return <button style={props.styles}>I am a Button One</button>;
};
export default styleWrapper(Button); // Export as HOC wrapper
