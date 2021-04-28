import React, { useState } from "react"
import {
	Button,
	IconButton,
	ListItemText,
	ListItem,
	List,
	Drawer,
	Box,
	Typography
} from "@material-ui/core"
import { Menu, Close, Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons"
import useStyles from "./Style"
import Fade from "react-reveal/Fade"

const tabs = [
	{ tab: "Home", delay: 100 },
	{ tab: "Experience", delay: 200 },
	{ tab: "About", delay: 300 },
	{ tab: "Contact", delay: 400 }
]
function NavBar() {
	const classes = useStyles()
	const [openDrawer, setOpenDrawer] = useState(false)
	const handleDrawer = () => {
		setOpenDrawer(!openDrawer)
	}
	return (
		<Box mb={30}>
			<div style={{ overflow: "hidden" }}>
				<Fade left delay={500}>
					<Button className={classes.projectBtn} variant="contained" color="primary">
						My Projects
					</Button>
				</Fade>
			</div>
			<Fade left delay={1500}>
				<IconButton onClick={handleDrawer}>
					<Menu className={classes.menuIcon} />
				</IconButton>
			</Fade>
			<SocialMedia />
			<Drawer anchor="top" open={openDrawer} classes={{ paper: classes.paper }}>
				<Box component="div" py={3}>
					<IconButton onClick={handleDrawer}>
						<Close className={classes.menuIcon} />
					</IconButton>
				</Box>
				<List lign="center">
					{tabs.map((tab, i) => (
						<ListItem button className={classes.tabs} key={i}>
							<ListItemText>
								<Fade left delay={tab.delay}>
									<Typography variant="h3">{tab.tab}</Typography>
								</Fade>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	)
}

export default NavBar

function SocialMedia() {
	const classes = useStyles()
	const icons = [
		{
			icon: <GitHub style={{ color: "#4078c0" }} className={classes.socialIcons} />,
			url: "https://github.com/murtaja1",
			delay: 2500
		},
		{
			icon: <LinkedIn style={{ color: "#0e76a8 " }} className={classes.socialIcons} />,
			url: "https://www.linkedin.com/in/murtaja-adnan-2a02b9206/",
			delay: 2700
		},
		{
			icon: <Twitter style={{ color: "#1DA1F2" }} className={classes.socialIcons} />,
			url: "https://twitter.com/murtj14",
			delay: 2800
		},
		{
			icon: <Facebook style={{ color: "#4267B2" }} className={classes.socialIcons} />,
			url: "https://www.facebook.com/murtaja.adnan.52",
			delay: 2900
		}
	]
	return (
		<div className={classes.socialIconsMobile}>
			{icons.map((icon, i) => (
				<IconButton key={i}>
					<Fade top delay={icon.delay}>
						<a href={icon.url}>{icon.icon}</a>
					</Fade>
				</IconButton>
			))}
		</div>
	)
}
