import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Image, Box, Section, Hr, Icon, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, Menu } from "@quarkly/components";
import { BsPhone } from "react-icons/bs";
import { FaRegFileImage, FaWarehouse } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
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
							sm-font="700 32px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
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
							Notion Social Media Calendar Template
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
					Streamline your content planning, scheduling, and collaboration effortlessly{"\n\n"}
				</Text>
				<Link
					href="https://invoice.xendit.co/od/socmed"
					padding="12px 24px 12px 24px"
					color="--light"
					background="--color-dark"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s linear 0s"
					hover-background="--color-orange"
					transition="background-color 0.2s linear 0s"
				>
					<Strong>
						Get the template
					</Strong>
				</Link>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%283%29.png?v=2023-05-22T16:47:28.324Z"
					display="block"
					sm-width="100% border-box"
					sm-min-width="100%"
					sm-background="#ffffff"
					max-width="100%"
					overflow-x="visible"
					overflow-y="visible"
					position="static"
					object-fit="contain"
					srcSet="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%283%29.png?v=2023-05-22T16:47:28.324Z ,https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%283%29.png?v=2023-05-22T16:47:28.324Z "
				/>
			</Box>
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
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
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
				width="50%"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline2"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Why this template?
				</Text>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="flex-start"
				>
					Intuitive calendar view
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Plan and visualize your content schedule for different platforms at a glance.{"\n\n"}
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%282%29.png?v=2023-05-22T16:41:10.980Z"
					object-fit="cover"
					width="50px"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="35px 0px 0px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-display="block"
					sm-position="static"
					sm-min-width="100%"
					sm-max-height="max-content"
					sm-max-width="max-content"
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
				width="50%"
				sm-flex="0 1 auto"
				sm-position="static"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="flex-start"
				>
					Content categorization{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					align-self="flex-start"
					sm-margin="0px 0px 0 0px"
				>
					Easily organize and label your posts by topic, campaign, or format.{"\n\n\n\n"}
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%282%29.png?v=2023-05-22T16:41:10.980Z"
					object-fit="cover"
					width="50px"
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
				width="50%"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="flex-start"
				>
					Customizable templates{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-margin="0px 0px 0 0px"
				>
					Tailor the calendar to match your branding and specific social media needs.{"\n\n\n\n"}
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%282%29.png?v=2023-05-22T16:41:10.980Z"
					object-fit="cover"
					width="50px"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100px"
					sm-margin="35px 0px 0px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-min-width="100%"
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
				width="50%"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="flex-start"
				>
					Collaborative workspace{"\n\n"}
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-margin="0px 0px 0 0px"
				>
					Seamlessly collaborate with team members, assign tasks, and track progress.{"\n\n\n\n"}
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Untitled%20design%20%282%29.png?v=2023-05-22T16:41:10.980Z"
					object-fit="cover"
					width="50px"
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
		<Section padding="80px 0 80px 0" quarkly-title="Reviews" sm-padding="25px 0 25px 0">
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
				<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline2"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews From Readers
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
						<Image
							width="43px"
							height="43px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 15px 12px 0px"
						/>
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
					>
						Personalized Only For You
					</Span>
				</Span>
			</Text>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="bs"
						icon={BsPhone}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-display="block"
						sm-align-self="center"
						sm-order="-1"
						sm-flex="0 1 auto"
						sm-text-align="center"
						sm-font="--headline1"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Social Media Specialist
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--lead"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaRegFileImage}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-font="normal 900 50px/1.2 --fontFamily-sans"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Content Creator
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--lead"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaWarehouse}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
						sm-font="50px sans-serif"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Online Shop Owner
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
						sm-font="--lead"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="25px 0 5px 0">
			<Override slot="SectionContent" align-items="center" />
			<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				sm-align-self="center"
				sm-text-align="center"
				sm-font="--headline2"
				align-self="center"
				text-align="center"
			>
				Get the Template Today!{"\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Get started now and take your social media strategy to new level.{"\n\n"}
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
					>
						Rp 99.000
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
					sm-font="--lead"
				>
					- Calendar planner
					<br />
					- Collaborative project
					<br />
					- Channel clustering
					<br />
					- Lifetime update
				</Text>
			</Box>
			<Button
				font="--lead"
				margin="20px"
				sm-background="--color-dark"
				background="--color-dark"
				sm-border-radius="15px"
			>
				<Strong>
					{"\n"}Get the Template{"\n\n"}
				</Strong>
			</Button>
		</Section>
		<Section padding="60px 0" sm-padding="25px 0 40px 0" color="--dark">
			<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
			<Text
				as="h1"
				font="--headline3"
				margin="0 0 24px 0"
				sm-font="normal 900 30px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				sm-text-align="center"
				text-align="center"
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
						font="--headline2"
					>
						F.A.Q.
					</Strong>
				</Span>
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" sm-margin="-16px -0 -16px 0">
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--headline3">
						Is there life on Mars?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--lead"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--headline3">
						Why is the sky blue?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--lead"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="--headline3">
						When will we get there?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="--lead"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="#ffffff" color="--dark" padding="64px 0 64px 0">
			<Box>
				<Text
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="0"
				>
					subscribe
				</Text>
				<Text
					font="normal 900 36px/1.2 --fontFamily-sans"
					margin="10px 0 0 0"
					sm-font="--lead"
					width="100% border-box"
					sm-padding="0px 0px 25px 0px"
				>
					<Span
						sm-font="--lead"
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
							Sign up for an update template
						</Strong>
					</Span>
				</Text>
			</Box>
			<Box>
				<Formspree endpoint="xeqpgrlv">
					<Box
						gap="16px"
						display="grid"
						flex-direction="row"
						flex-wrap="wrap"
						grid-template-columns="repeat(2, 1fr)"
						grid-gap="16px"
						sm-display="block"
					>
						<Box sm-width="100%" display="flex" flex-direction="column">
							<Text font="--base" margin="0 0 4px 0">
								Name
							</Text>
							<Input width="100%" name="name" type="text" />
						</Box>
						<Box sm-width="100%" display="flex" flex-direction="column">
							<Text font="--base" margin="0 0 4px 0" sm-margin="15px 0 4px 0">
								Email
							</Text>
							<Input width="100%" type="email" name="email" sm-padding="6px 16px 25 16px" />
						</Box>
						<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
							<Button sm-margin="25px 0px 0px 0px" sm-background="--color-dark" sm-border-radius="15px">
								Sign up now!
							</Button>
						</Box>
					</Box>
				</Formspree>
			</Box>
			<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%" />
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index" sm-color="--light">
					AB Digital Marketing
				</Override>
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
				sm-color="--light"
			>
				digitalmastery.ads@gmail.com
			</Link>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
				sm-margin="0 0px 0px 0px"
				sm-color="--light"
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
		</RawHtml>
	</Theme>;
});