import commonStyles from './../styles/commonStyle';

const translateProps = props => {
	let _styles = { ...commonStyles.default };
	if (props.disable) {
		_styles = { ..._styles, ...commonStyles.disable };
	}

	const newProps = { ...props, styles: _styles };
	return newProps;
};

export default wrappedComponent => {
	return function WrappedComponent(args) {
		return wrappedComponent(translateProps(args));
	};
};
