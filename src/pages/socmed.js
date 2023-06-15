import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Button, Image, Box, Section, List, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"socmed"} />
		<Helmet>
			<title>
				Social Media Notion Template
			</title>
			<meta name={"description"} content={"AB Digital Marketing menyediakan berbagai template notion untuk digital marketing mulai dari social media, SEO, dan CRM."} />
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
			margin="0 0 50 0"
			height="1250px"
			sm-height="750px"
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
					type="submit"
					href="https://invoice.xendit.co/od/socmedtemplate"
				>
					<Link
						href="https://invoice.xendit.co/od/socmedtemplate"
						color="--light"
						sm-text-decoration-line="initial"
						sm-color="--light"
						text-decoration-line="initial"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Get the Template
						</Strong>
					</Link>
				</Button>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10:05:18.818Z"
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
					sm-width="100%"
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
			quarkly-title="Benefit"
			margin="50px 0 0 0"
			sm-width="100%"
			sm-margin="0 0 0 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				display="block"
				width="100%"
			/>
			<Text
				margin="0px 0px 5px 0px"
				color="--dark"
				font="--headline2"
				lg-text-align="center"
				sm-font="normal 900 37px/1.2 --fontFamily-sans"
				align-self="center"
				sm-text-align="center"
				sm-margin="0px 0px 5px 0"
				display="block"
				text-align="center"
				sm-display="inline-block"
				sm-align-items="center"
				sm-justify-content="center"
				sm-width="80%"
				sm-flex-direction="column"
				sm-align-content="center"
			>
				Why You Should Get It
			</Text>
			<Text margin="0px 0px 35px 0px" text-align="center" font="--lead" color="--dark">
				Fitur yang tersedia dalam template
			</Text>
			<Box
				display="flex"
				flex-direction="row"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 0 16px 0"
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
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="16px 16px 16px 16px"
					justify-content="center"
					lg-order="1"
					flex-wrap="no-wrap"
					align-content="flex-start"
					position="relative"
					flex="0 1 auto"
					align-self="center"
					sm-flex-wrap="no-wrap"
					sm-flex-direction="column"
					sm-align-self="center"
					sm-order="-1"
					sm-display="block"
					width="40%"
					text-align="left"
					margin="0px 0px 0px 40px"
				>
					<Text
						margin="0px 0px 0 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--headline3"
						align-self="flex-start"
						sm-text-align="center"
						sm-margin="0px 0px 0 0"
					>
						Tampilan Kalendar Sederhana
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						sm-text-align="center"
						sm-margin="0px 0px 20px 0"
						sm-font="--base"
						align-self="flex-start"
					>
						Plan and visualize your content schedule for different platforms at a glance.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10:05:18.818Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					sm-display="inline-block"
					sm-position="static"
					sm-max-width="375px"
					sm-min-height="100px"
				/>
			</Box>
			<Box
				display="flex"
				flex-direction="row"
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
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
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
					width="40%"
					sm-flex="0 1 auto"
					sm-position="static"
					text-align="left"
				>
					<Text
						margin="0px 0px 0 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--headline3"
						align-self="flex-start"
						sm-text-align="center"
						sm-margin="0px 0px 0 0"
					>
						Konten Manajemen
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						align-self="flex-start"
						sm-margin="0px 20px 0 20px"
						sm-text-align="center"
						sm-font="--base"
					>
						Easily organize and label your posts by topic, campaign, or format.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10:05:18.814Z"
					object-fit="cover"
					width="45%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-max-width="375px"
					sm-min-height="100px"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					min-height="400px"
					align-self="flex-start"
					sm-width="80%"
				/>
			</Box>
			<Box
				display="flex"
				flex-direction="row"
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
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="16px 16px 16px 16px"
					justify-content="center"
					lg-order="1"
					flex-wrap="no-wrap"
					align-content="flex-start"
					position="relative"
					flex="0 1 auto"
					align-self="center"
					sm-flex-wrap="no-wrap"
					sm-flex-direction="column"
					sm-align-self="center"
					sm-order="-1"
					sm-display="block"
					width="40%"
					margin="0px 0px 0px 40px"
				>
					<Text
						margin="0px 0px 0 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--headline3"
						align-self="flex-start"
						sm-text-align="center"
						sm-margin="0px 0px 0 0"
						text-align="left"
					>
						Kustomisasi Template
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						sm-margin="0px 20px 0 20px"
						sm-text-align="center"
						sm-font="--base"
						align-self="flex-start"
					>
						Tailor the calendar to match your branding and specific social media needs.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10:05:18.824Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100px"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-max-width="375px"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0 50px 0"
			sm-padding="25px 0 15px 0"
			quarkly-title="Target"
			lg-align-items="center"
			lg-justify-content="center"
			sm-flex-direction="column"
			sm-align-content="center"
		>
			<Override
				slot="SectionContent"
				lg-margin="0px 20px 0px 20px"
				lg-justify-content="center"
				lg-text-align="center"
				lg-align-items="center"
				sm-align-content="center"
			/>
			<Text
				margin="0px 0px 5px 0px"
				color="--dark"
				font="--headline3"
				text-align="center"
				sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				padding="0px 0px 5px 0px"
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
						sm-display="flex"
						sm-text-align="left"
						sm-align-items="center"
						sm-justify-content="center"
					>
						Who Is It For
					</Span>
				</Span>
			</Text>
			<Text margin="0px 0px 35px 0px" text-align="center" font="--lead" sm-margin="0px 0px 50px 0px">
				Some text
			</Text>
			<Box
				min-height="100px"
				width="100%"
				display="flex"
				justify-content="center"
				sm-display="grid"
				lg-align-self="center"
				sm-justify-items="center"
				sm-align-content="center"
			>
				<Box
					padding="50px 55px 35px 55px"
					sm-padding="20px 40px 20px 40px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					sm-margin="0px 0px 20px 0px"
					width="30%"
					align-self="center"
					margin="0px 5px 20px 0px"
					sm-align-self="center"
					sm-width="80%"
					sm-flex-direction="column"
					sm-justify-content="center"
					sm-align-content="center"
					sm-align-items="center"
					lg-padding="50px 15px 35px 15px"
					lg-text-align="left"
					lg-width="30%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="center"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
						width="300px"
						flex="0 1 auto"
						order="-1"
						display="inline"
						lg-width="250px"
					>
						<Strong
							sm-display="flex"
							sm-justify-content="flex-start"
							sm-font="--headline3"
							sm-margin="0px 0px 15px 0px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							sm-text-align="center"
						>
							Social Media Specialist
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-align-self="center"
						sm-text-align="center"
						sm-font="--base"
					>
						Easily manage your company social media content calendar{"\n\n"}
					</Text>
				</Box>
				<Box
					padding="50px 55px 35px 55px"
					sm-padding="20px 40px 20px 40px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					align-self="center"
					width="30%"
					sm-align-self="center"
					margin="0px 5px 20px 5px"
					sm-width="80%"
					sm-align-items="center"
					lg-padding="50px 15px 35px 15px"
					sm-align-content="center"
					sm-justify-content="center"
					sm-display="flex"
					sm-flex-direction="column"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
					>
						<Strong
							sm-font="--headline3"
							sm-margin="0px 0px 15px 0px"
							display="flex"
							width="260px"
							sm-align-items="center"
							sm-justify-content="center"
						>
							Online Shop Owner
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-text-align="center"
						sm-font="--base"
					>
						Increase your website traffic through social media{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box />
					</Box>
				</Box>
				<Box
					padding="50px 55px 35px 55px"
					sm-padding="20px 40px 20px 40px"
					border-width="1px"
					border-style="solid"
					border-radius="24px"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					sm-margin="0px 0px 20px 0px"
					margin="0px 5px 20px 5px"
					width="30%"
					align-self="center"
					sm-align-self="center"
					sm-width="80%"
					sm-align-items="center"
					lg-padding="50px 15px 35px 15px"
					sm-align-content="center"
					sm-justify-content="center"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
					>
						<Strong
							sm-display="block"
							sm-justify-content="flex-start"
							sm-font="--headline3"
							sm-margin="0px 0px 15px 0px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							display="flex"
							width="225px"
						>
							Content Creator
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						width="275px"
						sm-text-align="center"
						sm-font="--base"
					>
						Maximize your potential to increase social media presence{"\n\n"}
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box />
					</Box>
				</Box>
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
			sm-width="100%"
			sm-margin="0 0 0 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				display="block"
				width="100%"
			/>
			<Text
				margin="0px 0px 5px 0px"
				color="--dark"
				font="--headline2"
				lg-text-align="center"
				sm-font="normal 900 37px/1.2 --fontFamily-sans"
				align-self="center"
				sm-text-align="left"
				sm-margin="0px 0px 5px 0"
				display="block"
				text-align="center"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
			>
				What You Will Get
			</Text>
			<Text
				margin="0px 0px 35px 0px"
				text-align="center"
				font="--lead"
				color="--dark"
				sm-margin="0px 0px 60px 0px"
			>
				Fitur yang tersedia dalam template
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
				padding="16px 0 16px 0"
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
					margin="0px 0px 0 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="center"
					sm-margin="0px 0px 0 0"
				>
					Tampilan Kalendar Sederhana
				</Text>
				<Text
					margin="0px 0px 0 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-text-align="center"
					sm-margin="0px 0px 20px 20px"
					sm-font="--base"
				>
					Plan and visualize your content schedule for different platforms at a glance.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10:05:18.818Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="0 0px 40px 0px"
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
					margin="0px 0px 0 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="center"
					sm-margin="0px 0px 0 0"
				>
					Konten Manajemen
				</Text>
				<Text
					margin="0px 0px 0 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					align-self="center"
					sm-margin="0px 20px 0 20px"
					sm-text-align="center"
					sm-font="--base"
				>
					Easily organize and label your posts by topic, campaign, or format.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10:05:18.814Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-max-width="375px"
					sm-min-height="100px"
					sm-margin="0 0px 40px 0px"
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
					margin="0px 0px 0 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="--headline3"
					align-self="center"
					sm-text-align="center"
					sm-margin="0px 0px 0 0"
				>
					Kustomisasi Template
				</Text>
				<Text
					margin="0px 0px 0 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					sm-margin="0px 20px 0 20px"
					sm-text-align="center"
					sm-font="--base"
				>
					Tailor the calendar to match your branding and specific social media needs.
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10:05:18.824Z"
					object-fit="cover"
					width="80%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100px"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-max-width="375px"
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
				sm-text-align="left"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline2"
					text-align="center"
					sm-font="--headline3"
					sm-text-align="left"
					sm-align-self="center"
					sm-margin="0px 0px 0 0px"
				>
					<Strong
						sm-display="flex"
						sm-justify-content="flex-start"
						sm-font="--headline2"
						font="--headline2"
						sm-text-align="center"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Reviews
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" text-align="center" font="--lead">
					Pendapat kustomer yang sudah menggunakannya
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
						sm-font="--base"
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
						sm-font="--base"
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
						sm-font="--base"
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
						sm-font="--base"
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
						sm-font="--base"
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
						sm-font="--base"
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
		<Section
			padding="80px 0"
			sm-padding="25px 0 5px 0"
			quarkly-title="Price"
			sm-height="750px"
			lg-padding="30px 0 80px 0"
		>
			<Override slot="SectionContent" align-items="center" sm-display="inline-block" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				sm-align-self="flex-start"
				sm-text-align="center"
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
				sm-font="--lead"
				sm-align-self="flex-start"
				sm-text-align="center"
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
				sm-display="flex"
				sm-padding="25px 0 25px 0"
				justify-self="center"
				sm-border-color="--color-dark"
				md-width="75%"
				md-border-color="--color-darkL2"
				md-align-self="center"
			>
				<Text margin="0px 0px 24px 0px" font="--headline3" sm-text-align="center">
					Social Media Calendar Template
				</Text>
				<Text
					margin="0px 0px 8px 0px"
					font="--headline1"
					sm-font="--headline3"
					md-width="60%"
					display="flex"
					flex-direction="column"
				>
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
						sm-display="flex"
						font="--headline2"
						sm-font="--headline3"
						sm-flex-direction="column"
						md-display="flex"
						md-flex-direction="column"
						lg-display="flex"
						lg-flex-direction="column"
						display="flex"
						flex-direction="column"
					>
						<Strong
							sm-text-decoration-line="line-through"
							sm-color="#ff0000"
							sm-font="700 20px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
							sm-margin="0px 10px 0px 0px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							md-font="700 25px/50.4px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
							md-color="--red"
							md-text-decoration-line="line-through"
							md-align-self="center"
							lg-font="700 25px/50.4px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
							lg-text-align="center"
							lg-text-decoration-line="line-through"
							lg-color="--red"
							font="700 25px/50.4px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
							text-align="center"
							color="--red"
							text-decoration-line="line-through"
						>
							Rp 149.000
						</Strong>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							md-align-self="center"
							md-margin="0px 0px 25px 0px"
						>
							Rp 79.000
						</Strong>
					</Strong>
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD2"
					text-align="left"
					font="--lead"
					width="40%"
					sm-margin="15px 0px 25px 0"
					sm-text-align="left"
					sm-width="250px"
					sm-font="--base"
					sm-color="--dark"
					md-width="50%"
					lg-width="60%"
					sm-align-self="center"
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
					sm-margin="20px 0 20px 0"
					href="https://invoice.xendit.co/od/socmedtemplate"
					type="submit"
					sm-align-self="center"
					lg-padding="15px 24px 15px 24px"
					lg-border-radius="4px"
					padding="15px 24px 15px 24px"
					border-radius="5px"
				>
					<Link
						href="https://invoice.xendit.co/od/socmedtemplate"
						color="--light"
						sm-text-decoration-line="initial"
						sm-color="--light"
						md-text-decoration-line="initial"
						lg-text-decoration-line="initial"
						text-decoration-line="initial"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Get the Template
						</Strong>
					</Link>
				</Button>
			</Box>
		</Section>
		<Section
			background="--color-dark"
			color="--light"
			padding="64px 0 64px 0"
			display="block"
			quarkly-title="Subscribe"
			sm-max-width="100%"
			sm-background="--color-dark"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="center"
		>
			<Override
				slot="SectionContent"
				sm-margin="0px 0 0px 0"
				sm-max-width="100%"
				sm-align-items="center"
				sm-justify-content="center"
				lg-align-items="center"
				lg-justify-content="center"
				lg-align-content="center"
			/>
			<Box
				text-align="center"
				sm-display="flex"
				sm-color="--light"
				margin="0px 0px 15px 0px"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				md-display="flex"
				md-flex-direction="column"
				md-align-self="center"
				lg-align-self="center"
				lg-display="flex"
				lg-flex-direction="column"
				align-self="center"
			>
				<Text
					font="--headline2"
					margin="10px 0 15px 0"
					sm-margin="10px 0 15px 0"
					display="inline-block"
					sm-display="block"
					sm-font="--headline3"
					sm-text-align="center"
					sm-align-items="center"
					sm-flex-direction="row"
					sm-justify-content="flex-start"
					sm-max-width="100%"
					width="100%"
					text-align="center"
					sm-width="100%"
				>
					Ultimate Daily Life Organizer
				</Text>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16:35:14.888Z"
					display="inline"
					sm-width="75%"
					sm-display="flex"
					sm-align-items="center"
					sm-justify-content="center"
					sm-flex-direction="column"
					sm-align-self="center"
					md-display="flex"
					md-align-items="center"
					md-flex-direction="column"
					md-justify-content="center"
					lg-display="flex"
					lg-align-items="center"
					lg-flex-direction="column"
					lg-justify-content="center"
					lg-align-content="center"
					lg-width="75%"
					lg-align-self="center"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					align-content="center"
				/>
				<Text
					font="--lead"
					color="--light"
					letter-spacing="1px"
					margin="0 0 15px 0"
					text-align="left"
					display="inline-block"
					sm-text-align="left"
					sm-margin="0 0 15px 0"
					sm-max-width="100%"
					sm-color="--light"
					width="75%"
					sm-width="100%"
					md-text-align="left"
					md-align-self="center"
					lg-text-align="left"
					lg-align-self="center"
					sm-font="--base"
				>
					Dapatkan{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Daily Life Organizer{" "}
					</Strong>
					secara{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						GRATIS
					</Strong>
				</Text>
				<List
					margin="0px 0px 25px 0px"
					padding="0px 0px 0px 20px"
					list-style-type="disc"
					as="ul"
					sm-width="75%"
					sm-margin="0px 20px 25px 20px"
					sm-text-align="left"
					sm-font="--base"
					font="--lead"
					width="55%"
					text-align="left"
					display="inline-block"
					md-align-self="center"
					lg-align-self="center"
				>
					<Text margin="0px 0px 0px 0px">
						Daily cook planner
					</Text>
					<Text margin="0px 0px 0px 0px">
						Student organizer
					</Text>
					<Text margin="0px 0px 0px 0px">
						Finance tracker
					</Text>
					<Text margin="0px 0px 0px 0px">
						Credit tracker
					</Text>
					<Text margin="0px 0px 0px 0px">
						Wedding planner
					</Text>
				</List>
				<Text
					font="--lead"
					color="--light"
					letter-spacing="1px"
					margin="0 0 15px 0"
					text-align="left"
					display="inline-block"
					sm-text-align="left"
					sm-margin="0 0 15px 0"
					sm-max-width="100%"
					sm-color="--light"
					width="75%"
					sm-width="100%"
					md-text-align="left"
					md-align-self="center"
					lg-text-align="left"
					lg-align-self="center"
					sm-font="--base"
				>
					Masukkan email utamamu, paket{" "}
					<Strong>
						Daily Life Organizer
					</Strong>
					{" "}akan segera dikirim ke emailmu
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
				<Override
					slot="Form"
					border-width="2px"
					border-style="solid"
					border-color="--color-light"
					border-radius="2px"
				/>
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
					sm-align-self="center"
					sm-width="375px"
					sm-border-radius="2px"
					border-width="2px"
					border-style="solid"
					border-color="--color-light"
					border-radius="2px"
					md-padding="10px 16px 10px 16px"
				/>
				<Button
					background="--color-dark"
					sm-align-self="center"
					sm-border-style="solid"
					sm-border-width="2px"
					sm-border-color="--color-light"
					sm-padding="10px 24px 10px 24px"
					border-color="--color-light"
					border-radius="2px"
					border-width="2px"
					border-style="solid"
				>
					Subsribe
				</Button>
			</Components.QuarklycommunityKitMailChimp>
		</Section>
		<Section padding="60px 0" sm-padding="25px 0 40px 0" color="--dark" quarkly-title="FAQ">
			<Text
				as="h1"
				font="--headline3"
				margin="0 0 24px 0"
				sm-font="--headline2"
				sm-text-align="center"
				text-align="center"
				padding="0px 0px 50px 0px"
				sm-align-self="center"
				sm-padding="0px 0px 0 0px"
				sm-margin="0 0 0 0"
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
						<Strong
							sm-font="--headline2"
							sm-text-align="center"
							sm-display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
							sm-align-content="center"
						>
							F.A.Q.
						</Strong>
					</Span>
				</Span>
			</Text>
			<Text margin="0px 0px 0px 0px" sm-margin="0px 0px 50px 0px" sm-text-align="center" sm-font="--lead">
				Pertanyaan yang sering ditanyakan
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" sm-margin="-16px -0 -16px 0">
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0 0 0" sm-font="--lead">
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
							<Strong>
								Apakah saya harus download Notion untuk dapat menggunakannya?
							</Strong>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 20px 0"
						color="--dark"
						sm-font="--base"
					>
						No, you don't have to download Notion to start using this file. But it will be more convenient to use Notion app while access the file.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0 0 0" sm-font="--lead">
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
							<Strong>
								I am new to social media job. Is it possible to understand this template?
							</Strong>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 20px 0"
						color="--dark"
						sm-font="--base"
					>
						Yes, this template has been create as simple as possible so you can start using it start from day 1.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0 0 0" sm-font="--lead">
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
							<Strong>
								How long I can access this file?
							</Strong>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 12px 0"
						color="--dark"
						sm-font="--base"
					>
						You will have lifetime access to this file. We recommend you to duplicate the file first in case of there are something error on server site.
					</Text>
				</Box>
			</Box>
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
			<script place={"endOfHead"} rawKey={"647d7e4f20ba73b1a0b98bf5"}>
				{"<!-- START - We recommend to place the below code in head tag of your website html  -->\n<style>\n  @font-face {\n    font-display: block;\n    font-family: Roboto;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 600;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 700;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format(\"woff\")\n  }\n\n  #sib-container input:-ms-input-placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container input::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container textarea::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n</style>\n<link rel=\"stylesheet\" href=\"https://sibforms.com/forms/end-form/build/sib-styles.css\">\n<!--  END - We recommend to place the above code in head tag of your website html -->"}
			</script>
			<script place={"endOfBody"} rawKey={"6486a13acf0d18fd19947124"}>
				{"<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-T44CF6S\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->"}
			</script>
			<script place={"endOfHead"} rawKey={"6486a14282cb6b98aecf35a8"}>
				{"<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-T44CF6S');</script>\n<!-- End Google Tag Manager -->"}
			</script>
		</RawHtml>
	</Theme>;
});