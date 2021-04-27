import React from "react"
import { Box, Typography, useMediaQuery, Grid } from "@material-ui/core"
import useStyles from "./Style"
import TextyAnim from "rc-texty"

function Intro() {
	const classes = useStyles()

	return (
		<Box mt={30}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12} style={{ width: "100vh" }}>
					<TextyAnim
						className={classes.name}
						type="mask-top"
						duration={(e) => {
							if (e.index === 2) {
								return 500
							}
							return 1000
						}}
						interval={(e) => {
							if (e.index === 2) {
								return 500
							}
							return e.index * 50
						}}>
						Hi, My name is Murtaja Adnan.
					</TextyAnim>
				</Grid>

				<Grid item xs={11} sm={8}>
					<Typography variant="h6" style={{ color: "#8a8a8a" }}>
						<TextyAnim
							type="mask-top"
							duration={(e) => {
								if (e.index === 2) {
									return 500
								}
								return 1000
							}}
							interval={(e) => {
								if (e.index === 2) {
									return 1000
								}
								return e.index * 50
							}}>
							I am a full-stack Web Developer passionate about web development and striving to make
							an impact on what I work on. Well-versed in modern JavaScrip frameworks.
						</TextyAnim>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Intro