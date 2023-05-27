import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Section, Strong, Span, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
					sm-font="normal 900 36px/1.2 --fontFamily-sans"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					Notion Social Media Calendar Template
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
					All-in-one template untuk manajemen social media dan konten
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
					Dapatkan template sekarang
				</Link>
			</Box>
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
		</Section>
		<Section padding="80px 0 80px 0">
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
					font="--headline3"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					<Strong
						font="700 36px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Review Pengguna
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
		<Section padding="25px 0 25px 0" sm-padding="60px 0 60px 0" position="relative">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Image
				src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
				object-fit="cover"
				width="100%"
				height="100%"
				border-radius="24px"
				transform="translateY(0px)"
				transition="transform 0.2s ease-in-out 0s"
				hover-transform="translateY(-10px)"
				min-height="600px"
				max-width="480px"
				sm-min-height="100vw"
			/>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="flex-start"
				position="relative"
				left="50px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					<Strong font="700 36px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
						Penjadwalan waktu posting yang mudah
					</Strong>
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--light"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 16px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					sm-margin="0px 0px 16px 0px"
					sm-text-align="center"
					background="--color-green"
					hover-transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-primary"
				>
					Get Started
				</Link>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 32px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 32px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			/>
		</Section>
		<Section padding="25px 0 25px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				justify-content="center"
				lg-order="1"
				flex-wrap="no-wrap"
				align-content="flex-start"
				position="relative"
				left="50px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					<Strong
						font="700 36px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Berkolaborasi dengan team lain
					</Strong>
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--light"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 16px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					sm-margin="0px 0px 16px 0px"
					sm-text-align="center"
					background="--color-green"
					hover-transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-primary"
				>
					Get Started
				</Link>
			</Box>
			<Image
				src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
				object-fit="cover"
				width="100%"
				height="100%"
				border-radius="24px"
				transform="translateY(0px)"
				transition="transform 0.2s ease-in-out 0s"
				hover-transform="translateY(-10px)"
				min-height="600px"
				max-width="480px"
				sm-min-height="100vw"
				position="relative"
				left="75px"
			/>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 32px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 32px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			/>
		</Section>
		<Section padding="80px 0 50px 0" sm-padding="60px 0 60px 0">
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
						Dibuat untuk berbagai macam pekerjaan
					</Strong>
				</Span>
			</Text>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
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
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
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
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 22px 0px"
						color="--dark"
						size="36px"
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
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" margin="0px 0px 0px 0px" background="#ffffff">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" background="#ffffff" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 60px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 16px 0px" font="--headline3" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					<Strong
						font="700 36px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Berhemat dengan template
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" color="--grey" text-align="center" font="--lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="center"
				justify-content="center"
				grid-gap="30px"
				grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
					background="#ffffff"
					border-radius="24px"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					lg-padding="48px 35px 56px 35px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
				>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Social Media Template
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						Rp 99.000
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						width="400px"
					>
						Notion social media calendar template
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="48px 40px 56px 40px"
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
				>
					<Text
						padding="1px 26px 5px 24px"
						color="#04080C"
						background="--color-secondary"
						font="--base"
						transform="rotate(90deg)"
						position="absolute"
						right="-38px"
						left="auto"
						top="70px"
						bottom="auto"
						border-radius="0px 0px 12px 12px"
					>
						Popular
					</Text>
					<Text margin="0px 0px 24px 0px" font="--headline3">
						Freelancer Template
					</Text>
					<Text margin="0px 0px 8px 0px" font="--headline1">
						Rp 149.000
					</Text>
					<Text
						margin="0px 0px 48px 0px"
						color="--greyD2"
						text-align="center"
						font="--base"
						width="400px"
					>
						Social media template + CRM +{" "}
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="12px 24px 12px 24px"
						border-radius="8px"
						background="--color-secondary"
						transition="background-color 0.2s ease-in-out 0s"
						hover-transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
					>
						Select plan
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Text
				as="h1"
				font="--headline3"
				margin="0 0 24px 0"
				sm-font="normal 900 30px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				sm-text-align="center"
				text-align="center"
				padding="0px 0px 50px 0px"
			>
				<Span font-size="36px">
					<Strong>
						Pertanyaan yang belum terjawab
					</Strong>
				</Span>
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="normal 500 26px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
						Is there life on Mars?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="normal 500 26px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
						Why is the sky blue?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text as="h3" font="--headline3" margin="12px 0" sm-font="normal 500 26px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
						When will we get there?
					</Text>
					<Text
						as="p"
						font="--base"
						margin="12px 0"
						color="--greyD2"
						sm-font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
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
				<Text font="normal 900 36px/1.2 --fontFamily-sans" margin="10px 0 0 0" sm-font="normal 900 30px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" width="100% border-box">
					Daftarkan dirimu untuk berbagai update terbaru tentang digital marketing
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
					>
						<Box sm-width="100%" display="flex" flex-direction="column">
							<Text font="--base" margin="0 0 4px 0">
								Nama
							</Text>
							<Input width="100%" name="name" type="text" />
						</Box>
						<Box sm-width="100%" display="flex" flex-direction="column">
							<Text font="--base" margin="0 0 4px 0">
								Email
							</Text>
							<Input width="100%" type="email" name="email" />
						</Box>
						<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
							<Button>
								Daftar Sekarang
							</Button>
						</Box>
					</Box>
				</Formspree>
			</Box>
			<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%" />
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