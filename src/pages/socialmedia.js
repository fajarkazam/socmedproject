import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Span, Strong, List, Input, Button, Icon, Em, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsCheckBox, BsFillReplyAllFill, BsPhone } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"socialmedia"} />
		<Helmet>
			<title>
				Social Media Notion Template
			</title>
			<meta name={"description"} content={"Digital Marketing Journey menyediakan berbagai template notion untuk digital marketing mulai dari social media, SEO, dan CRM."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"} />
		</Helmet>
		<Section>
			<Override
				slot="SectionContent"
				sm-align-self="center"
				sm-display="block"
				order="-1"
				align-self="flex-end"
				flex="0 1 auto"
				display="block"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				align-self="stretch"
				flex="1 1 0%"
				sm-display="flex"
				width="350px"
			>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03:14:44.296Z"
					display="flex"
					width="300px"
					height="150px"
					align-self="flex-start"
					flex="1 1 0%"
					text-align="left"
					sm-height="50px"
					loading="lazy"
					pointer-events="auto"
					align-items="center"
					align-content="center"
					justify-content="center"
					flex-wrap="wrap"
					position="static"
					flex-direction="row"
					sm-display="block"
					sm-width="250px"
					sm-align-self="flex-start"
					srcSet="https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/Screenshot%202023-08-23%20144500.png?v=2023-08-25T03%3A14%3A44.296Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section
			padding="100px 0 100px 0"
			background="#ffffff url() 50% 50% /cover repeat scroll padding-box"
			quarkly-title="Hero-17"
			transition="background-color 0.2s ease 0s"
			md-padding="100px 0 50px 0"
		>
			<Override slot="SectionContent" flex-direction="row" sm-flex-direction="column" md-flex-direction="column" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				flex-direction="column"
				width="45%"
				sm-width="100%"
				sm-margin="0px 0px 15px 0px"
				md-width="100%"
				md-align-items="center"
			>
				<Box
					lg-width="100%"
					display="flex"
					flex-direction="column"
					lg-padding="0px 0 0px 0px"
					lg-margin="0px 0px 50px 0px"
					margin="0px 0px 15px 0px"
					align-items="center"
					sm-margin="0px 0px 15px 0px"
					width="100%"
				>
					<Text
						margin="0px 0px 50px 0px"
						font="--headline1"
						sm-font="normal 700 36px/1.2 --fontFamily-sans"
						padding="0px 250px 0px 250px"
						text-align="left"
						lg-padding="0px 0 0px 0"
						sm-align-self="flex-start"
						sm-text-align="center"
						sm-margin="0px 0px 40px 0px"
						width="100%"
						sm-width="100%"
						md-width="100%"
						align-self="center"
						md-text-align="center"
					>
						Solusi Praktis Merencanakan Konten Social Media
					</Text>
					<Text
						margin="0px 0px 50px 0px"
						font="--lead"
						color="--dark"
						text-align="left"
						padding="0px 250px 0px 250px"
						lg-padding="0px 0 0px 0"
						lg-margin="0px 0px 30px 0px"
						sm-text-align="center"
						sm-align-self="flex-start"
						sm-margin="0px 0px 40px 0px"
						sm-color="--dark"
						width="100%"
						sm-width="100%"
						md-width="100%"
						md-font="--headline3"
						md-text-align="center"
					>
						<Span
							sm-color="#606469"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							color="--darkL2"
							font="--lead"
							margin="0px 0px 50px 0px"
							sm-width="100%"
							sm-font="--lead"
							sm-text-align="center"
						>
							Template yang akan membantumu dalam mempercepat pembuatan dan perencanaan konten berkualitas
						</Span>
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						sm-align-self="stretch"
						justify-content="flex-start"
						align-self="flex-start"
						sm-justify-content="center"
						sm-text-align="center"
						sm-align-content="center"
						md-justify-content="center"
						md-align-items="center"
						md-flex-direction="column"
						md-align-self="center"
					>
						<Link
							href="https://invoice.xendit.co/od/socmedtemplate"
							color="--light"
							sm-width="100%"
							sm-text-align="center"
							sm-background="--color-dark"
							sm-color="--light"
							sm-padding="15px 3px 15px 3px"
							sm-text-decoration-line="initial"
							sm-display="inline-block"
							sm-align-self="center"
							sm-border-radius="8px"
							text-decoration-line="initial"
							background="--color-dark"
							padding="20px 35px 20px 35px"
							border-radius="8px"
							order="-1"
							display="flex"
							justify-content="flex-start"
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
								font="--lead"
								display="flex"
								justify-content="flex-start"
								sm-align-items="center"
								sm-align-content="center"
								sm-text-align="center"
								sm-flex-direction="column"
							>
								<Strong
									display="flex"
									justify-content="flex-start"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									sm-text-align="center"
									sm-align-content="center"
									sm-justify-content="center"
								>
									Dapatkan Social Media Journal Sekarang
								</Strong>
							</Span>
						</Link>
					</Box>
				</Box>
			</Box>
			<Image
				object-fit="cover"
				background="--color-light"
				padding="0 15px 0px 15px"
				border-radius="15px 15px 0 0"
				height="340px"
				object-position="0 0"
				lg-height="300px"
				src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10:05:18.824Z"
				sm-background="--color-light"
				sm-align-self="center"
				width="50%"
				align-self="flex-start"
				sm-margin="0px 0 0px 0"
				sm-display="block"
				srcSet="https://uploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10:05:18.824Z "
				sm-position="static"
				sm-max-width="fit-content"
				sm-min-width="fit-content"
				md-width="100%"
				md-min-height="400px"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section
			padding="80px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#ffffff"
			display="flex"
			quarkly-title="Problem"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
				flex="0 1 auto"
				order="-1"
				display="flex"
			/>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="80%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-width="100%"
			>
				<Text
					as="p"
					font="--base"
					color="#4f46e5"
					margin="0px 0px 8px 0px"
					align-self="center"
					width="100%"
				>
					Challenges
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					text-align="left"
					width="100%"
					sm-width="100%"
					md-width="100%"
				>
					Tantangan Membangun Social Media Yang Sukses
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--darkL2"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--lead"
				>
					Sukses mengembangan konten di social media tidak hanya sebatas posting dan membalas komentar. Apa saja yang mungkin membuatmu kesulitan sebagai social media specialist?
				</Text>
				<List
					margin="40px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					as="ul"
					sm-margin="24px 0 0 0"
					list-style-type="none"
					font="normal normal 18px/150% sans-serif"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
					sm-font="--lead"
				>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						grid-gap="16px"
						sm-font="--lead"
						flex-direction="column"
					>
						<Text
							padding="0"
							margin="0 0 -15px 0"
							color="--greyD2"
							font="--lead"
							sm-font="--lead"
							width="80%"
							md-min-width="100%"
						>
							<Span
								font-size="28px"
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
									color="#000000"
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
									<Strong md-font="--headline3">
										Tidak konsisten membuat konten
									</Strong>
								</Span>
							</Span>
						</Text>
						<Text
							as="p"
							margin="0 0 0 0"
							font="--lead"
							font-size="20px"
							font-weight="300"
							color="--darkL2"
							width="100%"
							md-width="100%"
							md-margin="0px 0px 0px 0px"
							md-padding="0px 0px 0px 0px"
							sm-font="--lead"
						>
							Memulai karir sebagai social media specialist tidak hanya posting dan membalas komentar. Apa saja yang mungkin membuatmu kesulitan sebagai social media specialist?
						</Text>
					</Box>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						grid-gap="16px"
						sm-font="--lead"
						flex-direction="column"
					>
						<Text
							padding="0"
							margin="0 0 -15px 0"
							color="--greyD2"
							font="--lead"
							sm-font="--lead"
							width="80%"
							md-min-width="100%"
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
								font="--headline3"
								color="--darkL2"
								sm-font="--lead"
								width="100%"
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
									width="100%"
									margin="0px 0px -20px 0px"
									sm-font="--headline3"
								>
									<Strong md-font="--headline3" md-min-width="100%">
										Lupa posting konten sesuai jadwal
									</Strong>
								</Span>
							</Span>
						</Text>
						<Text
							as="p"
							margin="0 0 0 0"
							font="--lead"
							font-size="20px"
							font-weight="300"
							color="--darkL2"
							width="100%"
							md-width="100%"
							md-margin="0px 0px 0px 0px"
							md-padding="0px 0px 0px 0px"
							sm-font="--lead"
						>
							Sudah membuat konten tapi lupa untuk diposting, sehingga momen penting sering terlewat
						</Text>
					</Box>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						grid-gap="16px"
						sm-font="--lead"
						flex-direction="column"
					>
						<Text
							padding="0"
							margin="0 0 -15px 0"
							color="--greyD2"
							font="--lead"
							sm-font="--lead"
							width="80%"
							md-min-width="100%"
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
								font="--headline3"
								color="--darkL2"
								sm-font="--lead"
								width="100%"
								md-min-width="100%"
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
									width="100%"
									sm-font="--headline3"
								>
									<Strong md-font="--headline3" md-min-width="100%">
										Perencanaan konten social media yang berantakan
									</Strong>
								</Span>
							</Span>
						</Text>
						<Text
							as="p"
							margin="0 0 0 0"
							font="--lead"
							font-size="20px"
							font-weight="300"
							color="--darkL2"
							width="100%"
							md-width="100%"
							md-margin="0px 0px 0px 0px"
							md-padding="0px 0px 0px 0px"
							sm-font="--lead"
						>
							Pembuatan konten yang tidak terhubung satu sama lain dan tidak terjadwal dengan baik
						</Text>
					</Box>
				</List>
				<Text
					as="p"
					margin="40px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--darkL2"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--lead"
				>
					Tapi bagaimana caranya untuk memproduksi konten social media agar terjadwal dengan baik dan memiliki isi konten yang baik? Untuk itulah dibutuhkan{" "}
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
						Social Media Organizer Journal
					</Strong>
				</Text>
			</Box>
			<Box
				display="flex"
				width="40%"
				justify-content="flex-end"
				lg-justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				font="20px sans-serif"
			>
				<Image
					src="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					display="flex"
					border-radius="32px"
					flex-direction="row"
					srcSet="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			quarkly-title="Reviews"
			sm-padding="25px 0 25px 0"
			sm-flex-direction="row"
			sm-justify-content="flex-start"
			sm-margin="50px 0 0 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				align-items="center"
				align-content="center"
			>
				<Text
					margin="0px 0px 0 0px"
					font="--lead"
					color="--dark"
					md-text-align="left"
					sm-font="--base"
					sm-width="100%"
					sm-align-self="flex-start"
					sm-text-align="left"
					sm-margin="0px 0px 0 0px"
					md-align-self="flex-start"
				>
					Review
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					sm-width="100%"
					sm-align-self="flex-start"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					align-self="center"
					width="850px"
					text-align="center"
					md-width="100%"
				>
					Membantu Banyak Orang Sukses di Social Media
				</Text>
				<Text
					margin="0px 0px 70px 0px"
					text-align="center"
					font="--lead"
					color="--dark"
					sm-margin="0px 0px 50px 0px"
					sm-text-align="left"
					sm-font="--lead"
					sm-color="--dark"
					width="800px"
					sm-width="100%"
					md-width="100%"
					md-align-self="flex-start"
					md-text-align="left"
				>
					Mulai dari Social Media Specialist hingga Online Shop Owner telah mencoba dan membuktikan berbagai manfaat dan fitur terbaik di dalamnya
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Benar-benar sederhana sih, cuma butuh waktu 1 hari untuk mulai memaksimalkan dan mengatur sesuai pekerjaan saya"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Andika S. Bimantara
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Social Media Specialist
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Sekarang sudah lebih mudah sih untuk mengatur pekerjaan yang datang ke saya khususnya jadwal endorse yang sering menumpuk. Boleh dong sombong ya hahaha"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Tika
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Content Creator
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Ternyata mengatur jadwal posting di social media bisa semudah itu ya. Ga perlu lagi bingung catat jadwal dan isi posting di social media lagi setiap minggunya. The best lah!"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Adriana
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Online Shop Owner
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Kemarin beli masih 99 ribu sekarang turun ternyata harganya. Sediihh :( Tapi worth it banget sih buat handle jadwal posting di social media. Fitur Content Pipeline sih oke beneran buat isi konten kita. Thankss yaa"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Karina
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Content Creator
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20:05:47.446Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/favourite-31.png?v=2021-08-30T20%3A05%3A47.446Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Organizer yang wajib dimiliki sih buat yang kerjaan sehari-harinya di dunia social media. Udah coba aja dulu. TOP!"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Mario K.
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Social Media Specialist
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
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20:09:22.144Z" margin="0px 0px 33px 0px" srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/startfavorite.png?v=2021-08-30T20%3A09%3A22.144Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
						sm-font="--lead"
					>
						"Udah pernah coba sih social media organizer di tempat lainnya. Cuma ga tau kenapa ini udah paling cocok aja sih buat dipake. Kalo organizer lainnya keluar juga kabarin ya :):)"
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box>
							<Text
								color="--dark"
								font="normal 600 16px/1.5 --fontFamily-googleSourceSansPro"
								margin="0px 0px 2px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								<Strong>
									Bima A.
								</Strong>
							</Text>
							<Text
								color="--greyD1"
								font="--base"
								margin="0px 0px 0px 0px"
								sm-font="--lead"
								md-font="--lead"
							>
								Social Media Specialist
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0 50px 0"
			sm-padding="0 0 0 0"
			quarkly-title="Target"
			lg-align-items="center"
			lg-justify-content="center"
			sm-flex-direction="column"
			sm-align-content="center"
			sm-margin="50px 0 0 0"
		>
			<Override
				slot="SectionContent"
				lg-margin="0px 20px 0px 20px"
				lg-justify-content="center"
				lg-text-align="center"
				lg-align-items="center"
				sm-align-content="center"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				sm-display="block"
				sm-padding="0px 0 0px 0"
				align-items="center"
				sm-min-height="max-content"
			>
				<Text
					margin="0px 0px 0 0px"
					font="--lead"
					color="--dark"
					md-text-align="left"
					sm-font="--base"
					sm-text-align="left"
					sm-margin="0px 0px 0 0px"
					md-align-self="flex-start"
				>
					Users
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					width="1000px"
					text-align="center"
					sm-width="100%"
					md-width="90%"
					md-align-self="flex-start"
				>
					Siapapun Dapat Menggunakannya Tanpa Adaptasi Yang Lama
				</Text>
				<Text
					margin="0px 0px 70px 0px"
					text-align="center"
					font="--lead"
					color="--dark"
					sm-margin="0px 0px 25px 0px"
					sm-text-align="left"
					sm-font="--lead"
					width="850px"
					sm-width="100%"
					md-width="80%"
					md-align-self="flex-start"
					md-text-align="left"
				>
					Meningkatkan performa dan menyelesaikan berbagai masalah untuk beberapa pekerjaan yang membutuhkan manajemen social media{" "}
				</Text>
			</Box>
			<Box
				min-height="100px"
				width="100%"
				display="flex"
				justify-content="center"
				sm-display="grid"
				lg-align-self="center"
				sm-justify-items="center"
				sm-align-content="center"
				sm-height="max-content"
				sm-min-height="max-content"
				md-flex-direction="column"
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
					sm-margin="20px 0px 20px 0px"
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
					md-width="80%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="center"
						sm-font="--headline3"
						sm-margin="0px 0px 0 0px"
						width="300px"
						flex="0 1 auto"
						order="-1"
						display="inline"
						lg-width="250px"
						sm-align-self="flex-start"
						sm-text-align="left"
						md-align-self="flex-start"
						sm-width="100%"
						md-text-align="left"
						md-width="100%"
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
							sm-flex-direction="column"
							sm-align-items="flex-start"
							sm-align-content="flex-start"
						>
							<Strong
								sm-text-align="left"
								sm-font="--headline3"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								sm-width="100%"
								sm-min-width="100%"
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
									sm-width="100%"
									sm-min-width="100%"
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
										sm-font="--headline3"
										sm-min-width="100%"
										md-text-align="left"
									>
										Sering kehabisan ide membuat konten
									</Strong>
								</Span>
							</Strong>
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-align-self="flex-start"
						sm-text-align="left"
						sm-font="--lead"
						md-text-align="center"
					>
						Mengatur semua pekerjaan social media di kantor secara efektif dan efisien apapun platformnya
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
					sm-margin="0px 5px 20px 5px"
					md-width="80%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
						sm-align-self="flex-start"
						sm-text-align="left"
						sm-order="-1"
						sm-display="inline"
						md-align-self="center"
						md-text-align="left"
						md-width="100%"
					>
						<Strong
							sm-font="--lead"
							sm-margin="0px 0px 15px 0px"
							display="flex"
							sm-align-items="flex-start"
							sm-justify-content="center"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							sm-text-align="left"
							sm-flex-direction="column"
							width="300px"
							sm-width="100%"
							md-width="100%"
						>
							<Strong
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
									md-width="100%"
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
										md-display="inline"
										width="100%"
										sm-font="--headline3"
										md-text-align="left"
									>
										Follower social media sulit bertambah
									</Strong>
								</Span>
							</Strong>
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-text-align="left"
						sm-font="--lead"
						md-text-align="left"
					>
						Meningkatkan pengunjung website dengan social media secara mudah dan lengkap
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
					md-width="80%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
						sm-text-align="left"
						sm-align-self="flex-start"
						width="300px"
						sm-width="100%"
						sm-min-width="100%"
						md-align-self="flex-start"
						md-width="100%"
					>
						<Strong
							sm-display="block"
							sm-justify-content="flex-start"
							sm-font="--lead"
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
							width="300px"
							sm-min-width="100%"
							md-width="100%"
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
								width="300px"
								sm-width="100%"
								md-width="100%"
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
									sm-width="100%"
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
										sm-font="--headline3"
										sm-width="100%"
									>
										Sering terlupa untuk posting konten
									</Strong>
								</Span>
							</Span>
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
						sm-text-align="left"
						sm-font="--lead"
						sm-align-self="flex-start"
						md-text-align="left"
						md-width="100%"
					>
						Mengatur jadwal konten para content creator secara mudah dan terstruktur
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start" flex-direction="column">
						<Box />
					</Box>
				</Box>
			</Box>
			<Box
				min-height="100px"
				width="100%"
				display="flex"
				justify-content="center"
				sm-display="grid"
				lg-align-self="center"
				sm-justify-items="center"
				sm-align-content="center"
				md-flex-direction="column"
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
					sm-margin="0 0px 20px 0px"
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
					md-width="80%"
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
						sm-align-self="flex-start"
						sm-text-align="left"
						md-align-self="center"
						sm-min-width="100%"
						md-width="100%"
						md-text-align="left"
					>
						<Strong
							sm-display="flex"
							sm-justify-content="flex-start"
							sm-font="--lead"
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
							sm-flex-direction="column"
							sm-align-items="flex-start"
							sm-align-content="flex-start"
						>
							<Strong
								sm-text-align="left"
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
									sm-min-width="100%"
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
										sm-font="--headline3"
										sm-min-width="100%"
									>
										Ingin meningkatkan omzet dari social media
									</Strong>
								</Span>
							</Strong>
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-align-self="flex-start"
						sm-text-align="left"
						sm-font="--lead"
					>
						Mengatur semua pekerjaan social media di kantor secara efektif dan efisien apapun platformnya
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
					md-width="80%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
						sm-align-self="flex-start"
						sm-text-align="left"
						sm-order="-1"
						sm-display="inline"
						md-align-self="flex-start"
						md-text-align="center"
						md-width="100%"
						sm-min-width="100%"
					>
						<Strong
							sm-font="--lead"
							sm-margin="0px 0px 15px 0px"
							display="flex"
							sm-align-items="flex-start"
							sm-justify-content="center"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							sm-text-align="left"
							sm-flex-direction="column"
							width="300px"
							sm-min-width="100%"
							md-width="100%"
							md-text-align="left"
						>
							<Strong
								sm-font="--lead"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								sm-min-width="100%"
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
									sm-min-width="100%"
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
										md-display="inline"
										width="100%"
										sm-font="--headline3"
										sm-min-width="100%"
									>
										Menghemat waktu dalam pembuatan konten social media
									</Strong>
								</Span>
							</Strong>
						</Strong>
					</Text>
					<Text
						margin="0px 0px 35px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 50px 0px"
						sm-margin="0px 0px 15px 0px"
						flex="1 0 auto"
						sm-text-align="left"
						sm-font="--lead"
						md-text-align="left"
					>
						Meningkatkan pengunjung website dengan social media secara mudah dan lengkap
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
					md-width="80%"
				>
					<Text
						margin="0px 0px 11px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
						sm-margin="0px 0px 0 0px"
						sm-text-align="left"
						sm-align-self="flex-start"
						sm-min-width="100%"
						md-width="100%"
					>
						<Strong
							sm-display="block"
							sm-justify-content="flex-start"
							sm-font="--lead"
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
							width="300px"
							sm-min-width="100%"
							md-width="100%"
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
								md-width="100%"
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
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
										sm-font="--headline3"
									>
										Organizer yang dapat diakses semua anggota team
									</Strong>
								</Span>
							</Span>
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
						sm-text-align="left"
						sm-font="--lead"
						sm-align-self="flex-start"
						md-text-align="left"
						md-width="100%"
					>
						Mengatur jadwal konten para content creator secara mudah dan terstruktur
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
			sm-display="inline-block"
			sm-text-align="center"
			display="block"
			quarkly-title="Benefit"
			margin="50px 0 0 0"
			sm-margin="25px 0 0 0"
			sm-flex-direction="column"
			sm-height="1800px"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				display="block"
				width="100%"
				sm-margin="0px 0 0px 0"
				sm-display="inline-block"
				sm-flex-direction="column"
				sm-align-self="flex-start"
				sm-flex="0 0 auto"
				sm-order="-1"
				md-width="90%"
			/>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				sm-display="inline-block"
				sm-width="90%"
				sm-align-self="flex-start"
				align-items="center"
			>
				<Text
					margin="0px 0px 0 0px"
					font="--lead"
					color="--dark"
					md-text-align="left"
					sm-font="--base"
					sm-text-align="left"
					sm-margin="0 0px 0 0px"
					md-align-self="flex-start"
					md-margin="0px 0px 0 10px"
				>
					Benefit
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					text-align="center"
					width="1000px"
					sm-width="100%"
					md-width="100%"
					md-align-self="flex-start"
					md-margin="0px 10px 16px 10px"
				>
					Template Terbaik Untuk Mempercepat Pembuatan Konten Social Media
				</Text>
				<Text
					margin="0px 0px 70px 0px"
					text-align="center"
					font="--lead"
					color="--dark"
					sm-margin="0px 0px 50px 0px"
					sm-text-align="left"
					sm-font="--lead"
					width="1000px"
					sm-width="100%"
					md-width="100%"
					md-text-align="left"
				>
					Apakah kamu berpengalaman ataupun baru di bidang social media, template ini akan memudahkan dalam meningkatkan performa social mediamu
				</Text>
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
				padding="16px 0 16px 16px"
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
				sm-display="inline-block"
				width="100%"
				sm-width="90%"
				md-display="block"
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
					sm-display="inline-block"
					width="40%"
					text-align="left"
					margin="0px 0px 0px 40px"
					md-padding="16px 0 16px 0"
				>
					<Text
						margin="0px 0px 10px 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--lead"
						align-self="flex-start"
						sm-text-align="left"
						sm-margin="0px 0px 0 0"
						sm-width="100%"
						sm-display="inline-block"
						md-align-self="center"
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
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--headline3"
								margin="0px 0px 10px 0px"
								sm-font="--lead"
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
										md-display="block"
										md-flex-direction="column"
										md-align-items="center"
										md-align-content="center"
										md-justify-content="center"
										sm-font="--headline3"
									>
										Tampilan dashboard yang sederhana
									</Strong>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						sm-text-align="left"
						sm-margin="0px 0px 20px 0"
						sm-font="--lead"
						align-self="flex-start"
						md-align-self="center"
						md-width="80%"
					>
						Merencanakan dan menampilkan jadwal konten dari semua platform secara cepat dan mudah
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10:05:18.818Z"
					object-fit="cover"
					width="90%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					sm-display="inline-block"
					sm-position="static"
					sm-min-height="300px"
					sm-width="100%"
					md-display="inline"
					md-align-self="center"
					md-width="100%"
					srcSet="https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/5.webp?v=2023-06-08T10%3A05%3A18.818Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
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
				sm-display="inline-block"
				width="100%"
				sm-flex="0 1 auto"
				sm-position="static"
				sm-width="90%"
				md-display="block"
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
					margin="0px 0px 0px 40px"
					md-padding="16px 0 16px 0"
				>
					<Text
						margin="0px 0px 10px 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--lead"
						align-self="flex-start"
						sm-text-align="center"
						sm-margin="0px 0px 0 0"
						sm-display="inline"
						sm-width="80%"
						md-align-self="center"
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
								<Span
									font="--headline3"
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
										<Span
											sm-width="100%"
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
												md-display="flex"
												md-justify-content="center"
												md-align-items="center"
												md-align-content="center"
												sm-font="--headline3"
												sm-text-align="left"
											>
												Manajemen konten yang cepat dan lengkap
											</Strong>
										</Span>
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						align-self="flex-start"
						sm-margin="0px 0 0 0"
						sm-text-align="left"
						sm-font="--lead"
						sm-display="inline-block"
						md-align-self="center"
						md-width="80%"
					>
						Mengatur dan mengelompokkan konten berdasar channel, topik dan kampanye yang sedang berjalan
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
					sm-min-height="300px"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					min-height="400px"
					align-self="flex-start"
					sm-width="100%"
					md-width="100%"
					md-align-self="center"
					srcSet="https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/6.webp?v=2023-06-08T10%3A05%3A18.814Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
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
				sm-display="inline-block"
				width="100%"
				sm-width="90%"
				md-display="block"
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
					md-padding="16px 0 16px 0"
				>
					<Text
						margin="0px 0px 10px 0px"
						color="--dark"
						font="--headline3"
						lg-text-align="center"
						sm-font="--headline3"
						align-self="flex-start"
						sm-text-align="left"
						sm-margin="0px 0px 0 0"
						text-align="left"
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
							<Span
								font="--headline3"
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
										Memastikan tidak ada konten yang terlewat untuk ditampilkan
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						margin="0px 0px 0 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="center"
						sm-margin="0px 0 0 0"
						sm-text-align="left"
						sm-font="--lead"
						align-self="flex-start"
						sm-display="block"
						sm-padding="0px 0px 0 0px"
						md-width="80%"
						md-align-self="center"
					>
						Mengatur kalendar konten sesuai keinginan dan kebutuhan pengguna
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
					sm-min-height="300px"
					sm-margin="0 0px 40px 0px"
					flex="1 1 0%"
					min-height="400px"
					sm-width="100%"
					md-display="flex"
					md-justify-content="center"
					md-width="100%"
					srcSet="https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/4.webp?v=2023-06-08T10%3A05%3A18.824Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
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
					sm-margin="10px 0 0 0"
					display="inline-block"
					sm-display="block"
					sm-font="normal 900 32px/1.2 --fontFamily-sans"
					sm-text-align="center"
					sm-align-items="center"
					sm-flex-direction="row"
					sm-justify-content="flex-start"
					sm-max-width="100%"
					width="100%"
					text-align="center"
					sm-width="100%"
				>
					FREE
				</Text>
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
					md-font="--headline3"
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
					srcSet="https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6461957b820441001fb09aed/images/ipad-pro-mockup__1_-removebg-preview.png?v=2023-06-11T16%3A35%3A14.888Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
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
					width="60%"
					sm-width="100%"
					md-text-align="left"
					md-align-self="center"
					lg-text-align="left"
					lg-align-self="center"
					sm-font="--lead"
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
						sm-font="--lead"
					>
						Ultimate Daily Life Organizer Temlate
					</Strong>
					{" "}secara{" "}
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						sm-font="--lead"
					>
						<Strong>
							GRATIS
						</Strong>
					</Span>
					!
				</Text>
				<List
					margin="0px 0px 25px 0px"
					padding="0px 0px 0px 20px"
					list-style-type="disc"
					as="ul"
					sm-width="75%"
					sm-margin="0px 20px 25px 20px"
					sm-text-align="left"
					sm-font="--lead"
					font="--lead"
					width="55%"
					text-align="left"
					display="inline-block"
					md-align-self="center"
					lg-align-self="center"
				>
					<Text margin="0px 0px 0px 0px">
						Daily life planner
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
					width="60%"
					sm-width="100%"
					md-text-align="left"
					md-align-self="center"
					lg-text-align="left"
					lg-align-self="center"
					sm-font="--lead"
				>
					Tuliskan email utamamu,{" "}
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
						Ultimate Daily Life Organizer Template
					</Strong>
					{" "}akan segera dikirimkan ke emailmu.
				</Text>
			</Box>
			<Components.QuarklycommunityKitMailChimp
				url="https://gmail.us14.list-manage.com/subscribe/post?u=b00a056c56ee9e8574a02be70&amp;id=bf923082d8"
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
					width="400px"
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
		<Section
			padding="80px 0 80px 0"
			sm-padding="60px 0 60px 0"
			sm-background="--color-light"
			background="#ffffff"
			quarkly-title="Features"
		>
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="480px"
					sm-text-align="left"
					sm-align-self="flex-start"
					md-align-self="flex-start"
				>
					Features
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					text-align="center"
					sm-align-self="flex-start"
					sm-text-align="left"
					width="1000px"
					sm-width="100%"
					md-width="100%"
				>
					Inilah Yang Akan Anda Dapatkan Dari Social Media Journey
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--greyD3"
					md-text-align="left"
					text-align="center"
					sm-text-align="left"
					width="1000px"
					sm-width="100%"
					sm-font="--lead"
					md-width="100%"
					md-align-self="flex-start"
				>
					Berbagai fitur ditambahkan untuk memudahkan dan mempercepat dalam pembuatan konten social media yang berkualitas oleh siapapun
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="bs"
						icon={BsCheckBox}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text
						margin="0px 0px 18px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
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
							sm-font="--headline3"
						>
							Audit social media
						</Strong>
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="left"
						flex="1 0 auto"
						sm-font="--lead"
						md-font="--lead"
					>
						Fitur yang memungkinkan kita melihat perkembangan social media dari waktu ke waktu untuk analisa lebih lanjut
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="bs"
						icon={BsFillReplyAllFill}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text
						margin="0px 0px 18px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--lead"
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
							sm-font="--headline3"
						>
							Fitur "Drag and Drop"{" "}
						</Strong>
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="left"
						flex="1 0 auto"
						sm-font="--lead"
						md-font="--lead"
					>
						Dengan menggunakan model kanban view, update progress social media dapat dilakukan semudah{" "}
						<Em>
							drag and drop
						</Em>
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="bs"
						icon={BsPhone}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text
						margin="0px 0px 18px 0px"
						color="--darkL2"
						font="--headline3"
						lg-text-align="left"
						sm-font="--headline3"
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
							Mobile Friendly
						</Span>
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--lead"
						lg-text-align="left"
						flex="1 0 auto"
						sm-font="--lead"
						md-font="--lead"
					>
						Dengan menggunakan aplikasi notion di smartphone, kita bisa melakukan manajemen social media dari mana saja tanpa tergantung dengan komputer
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0"
			sm-padding="25px 0 5px 0"
			quarkly-title="Price"
			sm-height="850px"
			lg-padding="30px 0 80px 0"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				sm-display="inline-block"
				sm-height="750px"
				md-flex-direction="column"
				md-flex-wrap="no-wrap"
				md-flex="0 1 auto"
				md-align-self="flex-start"
				md-display="block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				font="--lead"
				color="--greyD3"
				md-text-align="center"
				sm-text-align="left"
			>
				Price
			</Text>
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
					sm-font="--headline2"
					sm-align-self="flex-start"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					width="1000px"
					align-self="center"
					text-align="center"
					sm-width="100%"
					md-width="80%"
				>
					Produk yang akan menjadi pembelian terbaikmu tahun ini
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--greyD3"
					md-text-align="center"
					sm-text-align="left"
					sm-margin="0px 0px 35px 0px"
					text-align="center"
					sm-width="100%"
					sm-font="--lead"
					md-width="80%"
				>
					Hanya dengan mengeluarkan sedikit modal, performa social mediamu akan berkembang dengan pesat
				</Text>
			</Box>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="20px 0 0 0"
				sm-align-self="flex-start"
				sm-text-align="left"
				sm-font="--headline3"
				align-self="center"
				text-align="center"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				padding="30px 60px 30px 60px"
				border-color="#dadbe2"
				display="flex"
				flex-direction="column"
				position="relative"
				z-index="1"
				lg-width="100%"
				lg-align-items="stretch"
				md-align-items="stretch"
				sm-padding="30px 15px 30px 15px"
				justify-content="center"
				lg-border-radius="25px"
				background="#ffffff"
				width="40%"
				border-radius="25px"
				lg-order="-1"
				lg-margin="0px 0px 40px 0px"
				md-margin="0px 0px 30px 0px"
				sm-width="90%"
				sm-align-self="center"
				sm-border-color="--color-grey"
				sm-background="--color-light"
				sm-border-width="2px"
				sm-border-style="solid"
				border-width="2px"
				border-style="solid"
				md-width="100%"
				md-padding="30px 0 30px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0 0px"
				>
					<Text margin="0px 0px 15px 0px" font="normal 300 20px/1.5 --fontFamily-sansTrebuchet" color="--darkL1" text-align="center">
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
							<Strong sm-font="--headline3" md-font="--headline3">
								Social Media Organizer Template
							</Strong>
						</Span>
					</Text>
					<Text
						margin="0px 0px 5px 0px"
						font="normal 400 17px/1.5 --fontFamily-sansTrebuchet"
						color="#80868a"
						text-align="center"
						sm-font="normal 400 20px/1.5 --fontFamily-sansTrebuchet"
						sm-text-decoration-line="line-through"
						sm-margin="0px 0px 0 0px"
						sm-padding="0 0px 0px 0px"
					>
						<Span
							font-size="46px"
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
								sm-font="700 20px/69px &quot;Segoe UI&quot;, Candara, &quot;Bitstream Vera Sans&quot;, &quot;DejaVu Sans&quot;, &quot;Trebuchet MS&quot;, Verdana, &quot;Verdana Ref&quot;, sans-serif"
								sm-color="#ff0000"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--headline3"
								color="--red"
								text-decoration-line="line-through"
							>
								Rp 99 ribu
							</Strong>
						</Span>
					</Text>
					<Text
						margin="0px 0px 20px 0px"
						font="normal 400 17px/1.5 --fontFamily-sansTrebuchet"
						color="#80868a"
						text-align="center"
						md-font="--headline2"
						md-color="#000000"
					>
						<Span
							font="--headline2"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							color="--darkL1"
						>
							Rp 79
						</Span>
						ribu
					</Text>
				</Box>
				<Link
					href="https://invoice.xendit.co/od/socmedtemplate"
					color="--light"
					sm-width="100%"
					sm-text-align="center"
					sm-background="--color-dark"
					sm-color="--light"
					sm-padding="15px 3px 15px 3px"
					sm-text-decoration-line="initial"
					sm-display="inline-block"
					sm-align-self="center"
					sm-border-radius="8px"
					text-align="center"
					text-decoration-line="initial"
					background="--color-dark"
					border-radius="8px"
					padding="20px 30px 20px 30px"
					margin="0px 0px 25px 0px"
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
						sm-font="--headline3"
						md-font="--headline3"
					>
						Download Template
					</Strong>
				</Link>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD2"
					text-align="left"
					font="--lead"
					width="50%"
					sm-margin="15px 0px 25px 0"
					sm-text-align="left"
					sm-width="225px"
					sm-font="--lead"
					sm-color="--dark"
					md-width="50%"
					lg-width="60%"
					sm-align-self="center"
					align-self="center"
				>
					- Akses selamanya
					<br />
					- Akses dari mana saja
					<br />
					- Lifetime free update
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="25px 0 40px 0"
			color="--dark"
			quarkly-title="FAQ"
			sm-margin="50px 0 0 0"
			width="100%"
			align-items="center"
			justify-content="center"
			align-content="center"
			md-width="100%"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				justify-content="center"
				align-self="center"
				width="100%"
				sm-margin="0px 20px 0px 20px"
				md-width="90%"
			/>
			<Box
				width="1000px"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="left"
				lg-width="100%"
				align-items="center"
				justify-content="center"
				align-self="center"
				text-align="center"
				margin="0px 0px 50px 0px"
				sm-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--greyD3"
					md-text-align="left"
					sm-text-align="left"
					sm-align-self="flex-start"
					md-align-self="flex-start"
				>
					Questions
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="left"
					sm-font="--headline2"
					sm-align-self="flex-start"
					sm-text-align="left"
					sm-margin="0px 0px 15px 0px"
					md-align-self="flex-start"
				>
					Berbagai pertanyaan tentu muncul, ini adalah jawabannya
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--greyD3"
					md-text-align="left"
					sm-text-align="left"
					sm-align-self="flex-start"
					sm-margin="0px 0px 50px 0px"
					sm-font="--lead"
				>
					Beberapa pertanyaan yang sering ditanyakan tentang Social Media Organizer Template
				</Text>
			</Box>
			<Box
				margin="-16px -16px -16px -16px"
				display="flex"
				flex-wrap="wrap"
				sm-margin="-16px -0 -16px 0"
				width="850px"
				sm-width="100%"
				md-width="100%"
			>
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
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="--headline3"
								sm-font="--lead"
							>
								<Span
									font="--lead"
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
										<Strong sm-font="--headline3" md-font="--headline3">
											Apakah saya harus mendownload Notion untuk menggunakanannya?
										</Strong>
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 20px 0"
						color="--dark"
						sm-font="--lead"
					>
						Tidak, kamu tidak harus mendownload Notion untuk mulai menggunakannya. Tapi akan lebih mudah dan nyaman ketika menggunakan Notion saat mengaksesnya.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text
						as="h3"
						font="--headline3"
						margin="12px 0 0 0"
						sm-font="--lead"
						md-font="--headline3"
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
							md-font="--headline3"
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
								font="--headline3"
								sm-font="--lead"
								md-font="--headline3"
							>
								<Span
									font="--lead"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									md-font="--headline3"
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
											Saya belum punya banyak pengalaman di social media, apakah saya bisa mengerti template ini?
										</Span>
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 20px 0"
						color="--dark"
						sm-font="--lead"
					>
						Ya! template ini dibuat sesederhana mungkin agar kamu bisa menggunakannya sejak hari pertama pembelian.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column">
					<Text
						as="h3"
						font="--headline3"
						margin="12px 0 0 0"
						sm-font="--lead"
						md-font="--headline3"
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
							md-font="--headline3"
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
								font="--headline3"
								sm-font="--lead"
								md-font="--headline3"
							>
								<Span
									font="--lead"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									md-font="--headline3"
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
											Saya belum punya banyak pengalaman di social media, apakah saya bisa mengerti template ini?
										</Span>
									</Span>
								</Span>
							</Span>
						</Span>
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="0 0 20px 0"
						color="--dark"
						sm-font="--lead"
					>
						Yes, this template has been create as simple as possible so you can start using it start from day 1.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-light" padding="50px 0 50px 0" quarkly-title="Footer-22" sm-background="--color-lightD2">
			<Box
				display="flex"
				justify-content="space-between"
				border-color="#232a44"
				md-flex-direction="column"
				align-items="center"
				lg-flex-direction="column"
			>
				<Box
					display="flex"
					md-margin="0px 0px 25px 0px"
					sm-flex-direction="column"
					align-items="center"
					lg-margin="0px 0px 25px 0px"
					md-flex-direction="column"
					width="100%"
					sm-align-self="center"
				>
					<LinkBox
						display="flex"
						margin="0px 0 0px 0px"
						md-margin="0px 0 30px 0px"
						flex-direction="row"
						align-items="flex-end"
					>
						<Text margin="0px 0px 0px 0px" font="normal 500 28px/1 --fontFamily-serifTimes">
							AB Digital Marketing
						</Text>
					</LinkBox>
					<Box
						display="flex"
						md-margin="0px 0px 15px 0px"
						sm-flex-direction="column"
						justify-content="flex-end"
						align-items="center"
						grid-gap="24px"
						sm-font="--lead"
						md-font="--lead"
						text-align="right"
						flex-direction="row"
						align-self="flex-start"
						flex="1 1 0%"
						sm-align-self="center"
						md-align-self="center"
					>
						<Box grid-gap="8px" justify-content="flex-end" display="flex" text-align="right">
							<Text margin="0px 0px 0px 0px" font="--base" color="--darkL2" sm-font="--lead">
								E-mail:
							</Text>
							<Link
								href="tel:+9877654321223"
								color="--darkL2"
								text-decoration-line="initial"
								font="normal 300 16px/1.5 --fontFamily-sans"
								display="block"
								margin="0px 0px 0px 0px"
								hover-color="#6d32ec"
								sm-font="--lead"
							>
								digitalmastery.ads@gmail.com
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2" md-align-items="center">
			<Box
				display="flex"
				justify-content="space-between"
				sm-flex-direction="column"
				md-flex-direction="column"
				md-align-self="center"
				md-font="--lead"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#5a5d64"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
					sm-font="--lead"
					display="inline"
					width="100%"
					text-align="center"
				>
					© 2023 Company, Inc. All rights reserved.
				</Text>
				<Box
					display="grid"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					sm-align-self="center"
					sm-justify-items="center"
					sm-align-content="center"
					sm-justify-content="center"
					sm-text-align="center"
					sm-width="50%"
					sm-grid-template-columns="max-content"
				/>
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
			<script place={"endOfHead"} rawKey={"648c87b2722e2a2fcdc553bc"}>
				{"<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-T44CF6S');</script>\n<!-- End Google Tag Manager -->"}
			</script>
			<script place={"endOfBody"} rawKey={"648c87bfa8dac52456e7229f"}>
				{"<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-T44CF6S\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->"}
			</script>
		</RawHtml>
	</Theme>;
});