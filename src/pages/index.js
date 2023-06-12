import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Box, Section, Image, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Digital Marketing Notion Template
			</title>
			<meta name={"description"} content={"AB Digital Marketing menyediakan berbagai template notion untuk digital marketing mulai dari social media, SEO, dan CRM."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Logo_FB_Ads_Mastery__3_-removebg-preview.png?v=2023-05-16T17:17:02.308Z"} />
		</Helmet>
		`
		<Section
			padding="0 0 0px 0"
			background="#ffffff"
			md-padding="96px 0 0px 0"
			sm-min-width="100%"
			sm-background="#ffffff"
			flex-wrap="no-wrap"
			quarkly-title="Hero"
			margin="100px 0 100px 0"
			sm-margin="85px 0 100px 0"
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
					sm-text-align="center"
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
							sm-text-align="center"
						>
							Welcome to AB Digital Marketing
						</Strong>
					</Span>
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#000000"
					font="--headline3"
					lg-text-align="center"
					text-align="center"
					width="60%"
					sm-display="block"
					sm-width="fit-content"
					sm-text-align="center"
					sm-font="--lead"
				>
					We create various Notion Template to supercharge your daily life to the next level
				</Text>
				<Link href="#" color="#000000" />
			</Box>
		</Section>
		<Section
			sm-background="--color-dark"
			quarkly-title="Subscribe"
			background="--color-dark"
			margin="0 0 0 0"
			padding="50px 0 50px 0"
		>
			<Text
				margin="0px 0px 25px 0px"
				sm-color="--light"
				sm-font="--headline3"
				color="--light"
				font="--headline2"
				text-align="center"
				sm-align-self="flex-start"
			>
				Notion Daily Life Organizer
			</Text>
			<Image src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16:35:14.888Z" display="block" width="50%" align-self="center" />
			<Text
				margin="0px 0px 15px 0px"
				sm-color="--light"
				sm-font="--lead"
				sm-margin="15px 0px 20px 0px"
				color="--light"
				font="--base"
				width="70%"
				display="inline-block"
				align-self="center"
				sm-align-self="flex-start"
				sm-width="100%"
			>
				Subscribe to get a bundle of 5{" "}
				<Strong>
					FREE{" "}
				</Strong>
				templates for Notion designed to help anyone get started building their own organized life
			</Text>
			<List
				margin="0px 0px 25px 0px"
				padding="0px 0px 0px 20px"
				list-style-type="disc"
				as="ul"
				sm-font="--lead"
				color="--light"
				font="--base"
				align-self="center"
				display="inline-block"
				width="50%"
				sm-align-self="flex-start"
			>
				<Text margin="0px 0px 0px 0px" sm-color="--light" sm-margin="0px 0px 5px 0px">
					Wedding Planner
				</Text>
				<Text margin="0px 0px 0px 0px" sm-color="--light" sm-margin="0px 0px 5px 0px">
					Finance Tracker
				</Text>
				<Text margin="0px 0px 0px 0px" sm-color="--light" sm-margin="0px 0px 5px 0px">
					Students Organizer
				</Text>
				<Text margin="0px 0px 0px 0px" sm-color="--light" sm-margin="0px 0px 5px 0px">
					Credit Tracker
				</Text>
				<Text margin="0px 0px 0px 0px" sm-color="--light" sm-margin="0px 0px 25px 0px">
					Daily Cook Tracker
				</Text>
			</List>
			<Components.QuarklycommunityKitMailChimp align-self="center" url="https://xyz.us10.list-manage.com/subscribe/post?u=f222146704895e2f741ade3e6&amp;id=a09dc3f0d4" width="500px">
				<Override
					slot="Form"
					border-width="2px"
					border-style="solid"
					border-color="--color-light"
					border-radius="4px"
				/>
				<Input
					display="block"
					placeholder-color="LightGray"
					background="white"
					padding="6px 100px 6px 16px"
					name="Email"
					type="email"
					placeholder="Email"
				/>
				<Link
					href="#"
					color="--light"
					text-align="right"
					align-self="center"
					padding="10px 20px 10px 20px"
					border-width={0}
					border-color="--color-light"
					border-radius="2px"
					text-decoration-line="initial"
					display="block"
					width="150px"
				>
					Get The Template
				</Link>
			</Components.QuarklycommunityKitMailChimp>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Digital Marketing Template
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Your All-in-one template to success in digital marketing world
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
						md-background="--color-darkL2"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						No Advanced Skill Needed
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
						md-background="--color-darkL2"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Customizable Template
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
						md-background="--color-darkL2"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Access From Everywhere
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
						md-background="--color-darkL2"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Lifetime Access
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="25px 0 25px 0"
			sm-padding="25px 0 25px 0"
			position="static"
			sm-display="flex"
			sm-text-align="center"
			display="block"
			quarkly-title="Features"
			margin="50px 0 0 0"
			sm-justify-content="flex-start"
			sm-margin="0 0 0 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" display="block" />
			<Text
				margin="0px 0px 16px 0px"
				color="--dark"
				font="--headline2"
				text-align="left"
				sm-font="--headline3"
				sm-margin="0px 0px 35px 0px"
				sm-text-align="left"
				align-self="center"
				width="100%"
				sm-display="flex"
			/>
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
					sm-text-align="left"
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
						sm-text-align="left"
						font="--headline3"
					>
						<Strong>
							Social Media Calendar Template
						</Strong>
					</Span>
				</Text>
				<Text
					margin="0px 0px 20px 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="center"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					sm-font="--lead"
					align-self="center"
					width="75%"
					text-align="center"
				>
					Plan and visualize your social media content schedule for different platforms at a glance.
				</Text>
				<Image
					src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					width="50%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="15px 0px 25px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-display="block"
					sm-position="static"
					sm-min-width="100%"
					sm-max-height="max-content"
					sm-max-width="max-content"
					sm-min-height="100px"
					display="inline-block"
					margin="0px 0px 30px 0px"
				/>
				<Button
					sm-background="--color-dark"
					sm-border-radius="5px"
					sm-margin="0px 0px 15px 0px"
					href="/socmed"
					sm-text-align="center"
					sm-display="block"
					align-self="center"
					background="--color-dark"
					margin="0px 0px 30px 0px"
					type="button"
					border-color="--color-light"
					padding="15px 24px 15px 24px"
					border-radius="4px"
				>
					<Link
						href="/socmed"
						color="--light"
						sm-text-decoration-line="initial"
						sm-color="--light"
						border-color="--color-light"
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
							border-color="--color-light"
						>
							Access Social Media Template
						</Strong>
					</Link>
				</Button>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 25px 0px"
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
					sm-margin="50px 0px 0 0px"
					sm-text-align="left"
					text-align="center"
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
						sm-text-align="left"
						display="flex"
						align-content="center"
						justify-content="center"
						margin="30px 0px 0px 0px"
					>
						<Strong>
							Search Engine Optimization Checklist
						</Strong>
					</Span>
				</Text>
				<Text
					margin="0px 0px 20px 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="center"
					align-self="flex-start"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="left"
					width="100%"
					display="flex"
					justify-content="center"
				>
					Easily organize and label your posts by topic, campaign, or format.
				</Text>
				<Image
					src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					width="50%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-max-width="375px"
					sm-min-height="100px"
					sm-margin="15px 0px 25px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-min-width="100%"
					margin="0px 0px 30px 0px"
				/>
				<Button
					sm-background="--color-dark"
					sm-border-radius="5px"
					sm-margin="0px 0px 15px 0px"
					sm-display="block"
					display="flex"
					justify-content="center"
					flex-direction="column"
					align-content="center"
					background="--color-dark"
					margin="0px 0px 40px 0px"
					href="/socmed1"
					padding="15px 24px 15px 24px"
					border-radius="4px"
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
						{"\n"}Access SEO Template{"\n\n"}
					</Strong>
				</Button>
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
					sm-margin="25px 0px 0 0px"
					sm-text-align="left"
					width="100%"
					text-align="center"
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
						display="flex"
						justify-content="center"
					>
						<Strong>
							Customer Relationship Management Template
						</Strong>
					</Span>
				</Text>
				<Text
					margin="0px 0px 20px 0px"
					color="--greyD3"
					font="--base"
					lg-text-align="center"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="left"
				>
					Tailor the calendar to match your branding and specific social media needs.
				</Text>
				<Image
					src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					width="50%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100px"
					sm-margin="15px 0px 25px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-min-width="100%"
					margin="0px 0px 30px 0px"
				/>
				<Button
					sm-background="--color-dark"
					sm-border-radius="5px"
					sm-margin="0px 0px 15px 0px"
					sm-display="block"
					background="--color-dark"
					margin="0px 0px 40px 0px"
					href="/socmed11"
					padding="15px 24px 15px 24px"
					border-radius="4px"
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
					>
						<Strong>
							{"\n"}Access CRM Template{"\n\n"}
						</Strong>
					</Span>
				</Button>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Reviews" sm-padding="25px 0 25px 0" sm-justify-content="flex-start">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				sm-align-items="flex-start"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline2"
					text-align="center"
					sm-font="--headline3"
					sm-display="block"
					sm-justify-content="flex-start"
					sm-text-align="left"
					sm-flex-direction="column"
					sm-align-items="flex-start"
				>
					<Strong>
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
						font="--base"
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
						font="--base"
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
						font="--base"
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
						font="--base"
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
						font="--base"
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
						font="--base"
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
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				sm-align-self="flex-start"
				lg-font="--headline2"
			>
				About Us
			</Text>
			<Text
				as="p"
				font="--base"
				margin="20px 0 20px 0"
				text-align="left"
				sm-text-align="left"
				align-self="flex-start"
			>
				Hi, we're AB Digital Marketing. We are here to help you manage your day-to-day task to be more efficient and effective. We were passionate to help all of you to grow in this fast pace digital marketing world. By using the template we developed, we hope you can achieve great result and grow even more in digital marketing.
			</Text>
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
				sm-align-self="flex-start"
				sm-text-align="left"
				sm-align-items="flex-start"
				sm-font="--base"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index" border-color="--color-light" color="--light">
					Home
				</Override>
				<Override slot="item-index" sm-text-align="left" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--light"
				hover-color="--primary"
				margin="0px 0px 15px 0px"
				sm-margin="0px 0px 5px 0px"
			>
				digitalmastery.ads@gmail.com
			</Link>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--light"
				hover-color="--primary"
			>
				All right reserved @2022
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
				{"<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-T44CF6S');</script>\n<!-- End Google Tag Manager -->"}
			</script>
			<script place={"endOfBody"} rawKey={"646487f7c6dd23010c9101c9"}>
				{"<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-T44CF6S\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->"}
			</script>
			<script place={"endOfHead"} rawKey={"647d7e4f20ba73b1a0b98bf5"}>
				{"<!-- START - We recommend to place the below code in head tag of your website html  -->\n<style>\n  @font-face {\n    font-display: block;\n    font-family: Roboto;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 600;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format(\"woff\")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 700;\n    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format(\"woff2\"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format(\"woff\")\n  }\n\n  #sib-container input:-ms-input-placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container input::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container textarea::placeholder {\n    text-align: left;\n    font-family: \"Helvetica\", sans-serif;\n    color: #c0ccda;\n  }\n</style>\n<link rel=\"stylesheet\" href=\"https://sibforms.com/forms/end-form/build/sib-styles.css\">\n<!--  END - We recommend to place the above code in head tag of your website html -->"}
			</script>
			<script async={true} place={"endOfHead"} rawKey={"6485923684c9f5cb5f3b3cfb"}>
				{"<meta name=\"google-site-verification\" content=\"O4mdy0GYP7wKyhcOqeVUVi1t7myvttWE9PyHuc2LVcE\" />"}
			</script>
			<meta
				charset={"<meta name=\"google-site-verification\" content=\"O4mdy0GYP7wKyhcOqeVUVi1t7myvttWE9PyHuc2LVcE\" />"}
				name={"GSC"}
				content={"<meta name=\"google-site-verification\" content=\"O4mdy0GYP7wKyhcOqeVUVi1t7myvttWE9PyHuc2LVcE\" />"}
				http-equiv={"<meta name=\"google-site-verification\" content=\"O4mdy0GYP7wKyhcOqeVUVi1t7myvttWE9PyHuc2LVcE\" />"}
				place={"endOfHead"}
				rawKey={"6485caa99a246c91555cd067"}
			/>
			<script async={false} place={"endOfBody"} rawKey={"6485caf208c40fc3eeb1cb5b"}>
				{"<meta name=\"google-site-verification\" content=\"O4mdy0GYP7wKyhcOqeVUVi1t7myvttWE9PyHuc2LVcE\" />"}
			</script>
			<script place={"endOfHead"} rawKey={"6486a11bf658b8cdaff32dd6"}>
				{"<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-T44CF6S');</script>\n<!-- End Google Tag Manager -->"}
			</script>
			<script place={"endOfBody"} rawKey={"6486a123762b294f5b7adb32"}>
				{"<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-T44CF6S\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->"}
			</script>
		</RawHtml>
	</Theme>;
});