import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Button, Image, Box, Section, Input, Hr, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import * as Components from "components";
import { BsPhone } from "react-icons/bs";
import { FaRegFileImage, FaWarehouse } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"socmed1"} />
		<Helmet>
			<title>
				AB Digital Marketing
			</title>
			<meta name={"description"} content={"Social Media Planner Template"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
		</Helmet>
		<Section
			padding="112px 0 0px 0"
			background="#ffffff"
			md-padding="96px 0 0px 0"
			sm-padding="72px 0 0px 0"
			sm-min-width="100%"
			sm-background="#ffffff"
			flex-wrap="no-wrap"
			quarkly-title="Hero"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0 0px"
				padding="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				sm-background="#ffffff"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="#000000"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 900 36px/120% --fontFamily-sans"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100px"
					sm-min-width="100%"
				>
					<Span
						sm-font="--headline3"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Strong
							sm-font="--headline2"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--headline1"
						>
							Social Media Organizer Template
						</Strong>
					</Span>
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#000000"
					font="--lead"
					lg-text-align="center"
					text-align="center"
					width="60%"
					sm-display="block"
					sm-width="fit-content"
				>
					Streamline your content planning, scheduling, and collaboration effortlessly
				</Text>
				<Button
					sm-background="--color-dark"
					sm-border-radius="15px"
					sm-padding="15px 24px 15px 24px"
					background="--color-dark"
					sm-margin="0px 0px 15px 0px"
				>
					<Strong>
						Get the Template
					</Strong>
				</Button>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Notion-Social-Media-Calendar-Template.webp?v=2023-06-05T05:56:42.055Z"
					display="block"
					sm-min-width="100%"
					sm-background="#ffffff"
					max-width="100%"
					overflow-x="visible"
					overflow-y="visible"
					position="static"
					object-fit="contain"
					sm-align-self="center"
					sm-flex="0 1 auto"
					sm-order="1"
					sm-display="inline-block"
				/>
			</Box>
		</Section>
		<Section
			background="#FFFFFF"
			color="--dark"
			padding="64px 0 64px 0"
			display="block"
			quarkly-title="Subscribe"
			sm-max-width="100%"
		>
			<Override slot="SectionContent" sm-margin="0px 0 0px 0" sm-max-width="100%" />
			<Box text-align="center" sm-display="block">
				<Text
					font="--headline2"
					margin="10px 0 15px 0"
					sm-margin="10px 0 15px 20px"
					display="inline-block"
					sm-display="block"
					sm-font="--headline3"
					sm-text-align="left"
					sm-align-items="center"
					sm-flex-direction="row"
					sm-justify-content="flex-start"
					sm-max-width="100%"
					width="100%"
					text-align="center"
					sm-width="100%"
				>
					Subscribe
				</Text>
				<Text
					font="--lead"
					color="--dark"
					letter-spacing="1px"
					margin="0 0 15px 0"
					text-align="center"
					display="inline-block"
					sm-text-align="left"
					sm-margin="0 0 15px 20px"
					sm-max-width="100%"
				>
					We share various digital marketing templates to help you get the job done beautifully
				</Text>
			</Box>
			<Components.QuarklycommunityKitMailChimp
				url="https://xyz.us10.list-manage.com/subscribe/post?u=f222146704895e2f741ade3e6&amp;id=a09dc3f0d4"
				align-self="center"
				sm-display="block"
				sm-width="375px"
				sm-flex="0 1 auto"
				sm-order="1"
				sm-margin="0px 0px 0px 0"
			>
				<Input
					display="block"
					placeholder-color="LightGray"
					background="white"
					align-self="center"
					width="350px"
					name="EMAIL"
					type="email"
					required
					placeholder="Email"
					sm-display="inline-block"
					sm-margin="0px 0px 0px 20px"
					sm-align-self="center"
				/>
				<Button background="--color-dark" sm-align-self="center">
					Subsribe
				</Button>
			</Components.QuarklycommunityKitMailChimp>
		</Section>
		<Section
			padding="25px 0 25px 0"
			sm-padding="25px 0 25px 0"
			position="static"
			sm-display="block"
			sm-text-align="center"
			display="block"
			quarkly-title="Features"
			margin="50px 0 0 0"
			sm-width="100%"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				display="block"
				width="100%"
			/>
			<Text
				margin="0px 0px 24px 0px"
				color="--dark"
				font="--headline3"
				lg-text-align="center"
				sm-font="--headline2"
				align-self="center"
				sm-text-align="left"
				sm-margin="0px 0px 24px 20px"
			>
				What's inside?
			</Text>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="center"
				position="relative"
				flex="0 1 auto"
				align-self="center"
				sm-flex-wrap="no-wrap"
				sm-flex-direction="column"
				sm-align-self="center"
				sm-order="-1"
				sm-display="block"
				width="100%"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="left"
					sm-margin="0px 0px 24px 20px"
				>
					Intuitive calendar view
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-text-align="left"
					sm-margin="0px 0px 40px 20px"
				>
					Plan and visualize your content schedule for different platforms at a glance.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/7.png?v=2023-06-05T17:38:01.363Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="35px 0px 25px 0px"
					flex="1 1 0%"
					sm-display="inline-block"
					sm-position="static"
					sm-max-width="375px"
					sm-min-height="100px"
				/>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 20"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="center"
				position="relative"
				flex="0 1 auto"
				align-self="center"
				sm-flex-wrap="no-wrap"
				sm-flex-direction="column"
				sm-align-self="center"
				sm-order="-1"
				sm-display="block"
				width="100%"
				sm-flex="0 1 auto"
				sm-position="static"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="left"
					sm-margin="0px 0px 24px 20px"
				>
					Content categorization
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					align-self="center"
					sm-margin="0px 20px 0 20px"
					sm-text-align="left"
				>
					Easily organize and label your posts by topic, campaign, or format.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/5.png?v=2023-06-05T17:38:01.355Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-max-width="375px"
					sm-min-height="100px"
					sm-margin="35px 0px 25px 0px"
					flex="1 1 0%"
					min-height="400px"
				/>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="center"
				position="relative"
				flex="0 1 auto"
				align-self="center"
				sm-flex-wrap="no-wrap"
				sm-flex-direction="column"
				sm-align-self="center"
				sm-order="-1"
				sm-display="block"
				width="100%"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="left"
					sm-margin="0px 0px 24px 20px"
				>
					Customizable templates
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-margin="0px 20px 0 20px"
					sm-text-align="left"
				>
					Tailor the calendar to match your branding and specific social media needs.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/6.png?v=2023-06-05T17:38:01.357Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100px"
					sm-margin="35px 0px 25px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-min-width="80%"
				/>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="center"
				position="relative"
				flex="0 1 auto"
				align-self="center"
				sm-flex-wrap="no-wrap"
				sm-flex-direction="column"
				sm-align-self="center"
				sm-order="-1"
				sm-display="block"
				width="100%"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					text-align="left"
					sm-text-align="left"
					sm-margin="0px 20px 24px 20px"
				>
					Collaborative workspace
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-margin="0px 20px 0 20px"
					sm-text-align="left"
				>
					Seamlessly collaborate with team members, assign tasks, and track progress.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%282%29.png?v=2023-05-22T16:41:10.980Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-max-width="375px"
					sm-min-height="100px"
					sm-margin="35px 0px 0px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-min-width="100%"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			quarkly-title="Reviews"
			sm-padding="25px 0 25px 0"
			sm-flex-direction="row"
			sm-justify-content="flex-start"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline2"
					text-align="center"
					sm-font="--headline3"
					sm-text-align="left"
					sm-align-self="flex-start"
				>
					<Strong sm-display="flex" sm-justify-content="flex-start" sm-font="--headline2">
						Reviews From Readers
					</Strong>
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Sam Smith
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Manager
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Ethan Tremblay
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								UI/UX Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Adriana Williams
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Product Designer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					padding="50px 55px 50px 55px"
					sm-padding="55px 40px 50px 55px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text color="--dark" font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 2px 0px">
								Mason Johnson
							</Text>
							<Text color="--greyD1" font="--base" margin="0px 0px 0px 0px">
								Manager
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 50px 0" sm-padding="25px 0 15px 0" quarkly-title="Target">
			<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
			<Text
				margin="0px 0px 5px 0px"
				color="--dark"
				font="--headline3"
				text-align="center"
				sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				padding="0px 0px 50px 0px"
			>
				<Span
					font-size="36px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						sm-font="--headline2"
						font="--headline2"
						sm-display="block"
						sm-text-align="left"
					>
						Who is it for?
					</Span>
				</Span>
			</Text>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					sm-align-items="flex-start"
				>
					<Icon
						category="bs"
						icon={BsPhone}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-display="block"
						sm-align-self="flex-start"
						sm-order="-1"
						sm-flex="0 1 auto"
						sm-text-align="center"
						sm-font="--headline1"
					/>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
					>
						<Strong sm-display="flex" sm-justify-content="flex-start">
							Social Media Specialist
						</Strong>
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--base"
						sm-text-align="left"
					>
						Easily manage your company social media content calendar
					</Text>
				</Box>
				<Box
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					sm-text-align="left"
					sm-align-items="flex-start"
				>
					<Icon
						category="fa"
						icon={FaRegFileImage}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-font="normal 900 50px/1.2 --fontFamily-sans"
					/>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
					>
						<Strong sm-display="block" sm-justify-content="flex-start">
							Content Creator
						</Strong>
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--base"
						sm-text-align="left"
					>
						Maximize your potential to increase social media presence
					</Text>
				</Box>
				<Box
					align-items="center"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					sm-align-items="flex-start"
				>
					<Icon
						category="fa"
						icon={FaWarehouse}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-font="50px sans-serif"
					/>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
					>
						<Strong>
							Online Shop Owner
						</Strong>
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--base"
					>
						Increase your website traffic through social media
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="25px 0 5px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				sm-align-self="flex-start"
				sm-text-align="left"
				sm-font="--headline2"
				align-self="center"
				text-align="center"
			>
				Get the Template Today!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				sm-font="--base"
				sm-align-self="flex-start"
				sm-text-align="left"
			>
				Get started now and take your social media strategy to new level.
			</Text>
			<Box
				width="50%"
				display="flex"
				padding="48px 40px 48px 40px"
				background="#ffffff"
				border-radius="24px"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				border-width="2px"
				border-style="solid"
				border-color="--color-secondary"
				lg-padding="48px 35px 56px 35px"
				position="relative"
				sm-width="100%"
				sm-justify-self="center"
				sm-align-self="center"
				sm-display="block"
				sm-padding="25px 0 25px 0"
				justify-self="center"
				sm-border-color="--color-dark"
			>
				<Text margin="0px 0px 24px 0px" font="--headline3" sm-text-align="center">
					Social Media Calendar Template
				</Text>
				<Text margin="0px 0px 8px 0px" font="--headline1" sm-font="--headline3">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						sm-text-align="center"
						sm-display="block"
						font="--headline2"
						sm-font="--headline3"
					>
						<Strong>
							Rp 79.000
						</Strong>
					</Strong>
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD2"
					text-align="center"
					font="--base"
					width="400px"
					sm-margin="15px 0px 25px 60px"
					sm-text-align="left"
					sm-width="250px"
					sm-font="--base"
				>
					- Lifetime access
					<br />
					- Channel categorization
					<br />
					- Collaborative workspace
					<br />
					- Social media audit
				</Text>
				<Button
					font="--lead"
					margin="20px"
					sm-background="--color-dark"
					background="--color-dark"
					sm-border-radius="15px"
					sm-display="inline-block"
					sm-margin="20px 0 20px 75px"
				>
					<Strong>
						Get the Template
					</Strong>
				</Button>
			</Box>
		</Section>
		<Section
			background="#FFFFFF"
			color="--dark"
			padding="64px 0 64px 0"
			display="block"
			quarkly-title="Subscribe"
		>
			<Box
				margin="-16px -16px -16px -16px"
				display="flex"
				flex-wrap="wrap"
				text-align="left"
				justify-content="center"
			>
				<Box padding="16px 16px 16px 16px" width="45%" lg-width="100%">
					<Box>
						<Text
							font="--headline2"
							max-width="500px"
							margin="10px 0 15px 0"
							sm-margin="10px 0 15px 0"
							text-align="center"
							sm-font="--headline3"
							sm-display="flex"
						>
							Subscribe
						</Text>
						<Text
							font="--lead"
							color="--dark"
							letter-spacing="1px"
							margin="0 0 15px 0"
							text-align="center"
							sm-font="--base"
							sm-text-align="left"
						>
							We share various digital marketing templates to help you get the job done beautifully
						</Text>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitMailChimp url="https://xyz.us10.list-manage.com/subscribe/post?u=f222146704895e2f741ade3e6&amp;id=a09dc3f0d4" align-self="center">
				<Input
					display="block"
					placeholder-color="LightGray"
					background="white"
					align-self="center"
					width="350px"
					name="EMAIL"
					type="email"
					required
					placeholder="Email"
					sm-margin="0px 0px 0px 15px"
				/>
				<Button background="--color-dark" sm-margin="0px 15px 0px 0px">
					Subsribe
				</Button>
			</Components.QuarklycommunityKitMailChimp>
		</Section>
		<Section padding="60px 0" sm-padding="25px 0 40px 0" color="--dark" quarkly-title="FAQ">
			<Text
				as="h1"
				font="--headline3"
				margin="0 0 24px 0"
				sm-font="--headline3"
				sm-text-align="center"
				text-align="center"
				padding="0px 0px 50px 0px"
				sm-align-self="flex-start"
				sm-padding="0px 0px 0 0px"
			>
				<Span
					font-size="36px"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Span
						sm-font="--headline3"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						font="--headline2"
					>
						<Strong sm-font="--headline2">
							F.A.Q.
						</Strong>
					</Span>
				</Span>
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" sm-margin="-16px -0 -16px 0">
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--lead">
						<Strong>
							Do I have to download Notion to access this file?
						</Strong>
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--lead">
						<Strong>
							I am new to social media job. Is it possible to understand this template?
						</Strong>
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--lead">
						<Strong>
							When will we get there?
						</Strong>
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			justify-content="center"
			sm-justify-content="flex-start"
		>
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
				filterMode="exclude"
				sm-align-items="flex-start"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index" sm-color="--light" sm-padding="6px 12px 6px 0">
					AB Digital Marketing
				</Override>
				<Override
					slot="link-socmed"
					sm-color="--light"
					sm-font="--lead"
					sm-text-align="left"
					sm-display="flex"
					sm-padding="6px 12px 6px 0"
				/>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
				sm-color="--light"
				sm-display="flex"
				sm-margin="0px 0px 0px 5px"
				sm-font="--base"
			>
				digitalmastery.ads@gmail.com
			</Link>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
				sm-margin="0 0px 0px 5px"
				sm-color="--light"
				sm-display="flex"
				sm-font="--base"
			>
				All right reserved @2023
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script
				async={false}
				type={""}
				defer={false}
				place={"endOfHead"}
				rawKey={"6461999ed6a6c13598cb54e0"}
			>
				{"<!-- AMP Analytics --><script async custom-element=\"amp-analytics\" src=\"https://cdn.ampproject.org/v0/amp-analytics-0.1.js\"></script>\n"}
			</script>
			<script place={"endOfBody"} rawKey={"646487f7c6dd23010c9101c9"}>
				{"<!-- Google Tag Manager -->\n<amp-analytics config=\"https://www.googletagmanager.com/amp.json?id=GTM-MPGQQDQ&gtm.url=SOURCE_URL\" data-credentials=\"include\"></amp-analytics>\n"}
			</script>
			<script place={"endOfHead"} rawKey={"647d7e4f20ba73b1a0b98bf5"}>
				{"<!-- START - We recommend to place the below code in head tag of your website html  -->\n<style>\n  @font-face {\n    font-display: block;\n    font-family: Roboto;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 600;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 700;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format(\"woff\")\n  }\n\n  #sib-container input:-ms-input-placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container input::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container textarea::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n</style>\n<link rel=\"stylesheet\" href=\"https://sibforms.com/forms/end-form/build/sib-styles.css\">\n<!--  END - We recommend to place the above code in head tag of your website html -->"}
			</script>
		</RawHtml>
	</Theme>;
});