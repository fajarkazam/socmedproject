import React from 'react';
import atomize from "@quarkly/atomize";

const Form = props => <div {...props}>
	Say hello Form
</div>;

export default atomize(Form)({
	name: "Form",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Form — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});