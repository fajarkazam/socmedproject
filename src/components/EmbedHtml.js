import React from 'react';
import atomize from "@quarkly/atomize";

const EmbedHtml = props => <div {...props}>
	Say hello EmbedHtml
</div>;

export default atomize(EmbedHtml)({
	name: "EmbedHtml",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "EmbedHtml — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});