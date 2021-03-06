import React from "react"
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
	ThemeProvider
} from "@material-ui/core"
import useStyles, { theme } from "./Style"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"

function ContactForm({ handleChange, handleSubmit, values }) {
	const classes = useStyles()
	const { firstName, lastName, email, text } = values

	return (
		<Container maxWidth="md">
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Box mt={3.3} mb={2}>
					<Box align="left" mb={1.3}>
						<Typography component="h1" variant="h4" className={classes.title}>
							<Bounce cascade left>
								Get in touch
							</Bounce>
						</Typography>
						<Typography component="h3" variant="h6" className={classes.text}>
							<Bounce cascade left delay={100}>
								Would like to know more!
							</Bounce>
						</Typography>
						<Bounce cascade left delay={200}>
							<Typography variant="body2" className={classes.text}>
								Interested in my work?
								<br />
								Have a project that could use my skills?
								<br />
								Wanna hire me?
								<br />
								then please drop a message and let’s chat!
								<br />
								<strong>Email: </strong>murtajaadnan7@gmail.com
							</Typography>
						</Bounce>
					</Box>

					<form onSubmit={handleSubmit}>
						<Grid container spacing={2} direction="row" justify="space-around">
							<Grid item xs={12} sm={6}>
								<Fade delay={300} left>
									<TextField
										value={firstName}
										onChange={(e) => handleChange(e)}
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										placeholder="first name"
										required
										fullWidth
										id="firstName"
										autoFocus
									/>
								</Fade>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Fade delay={400} right>
									<TextField
										value={lastName}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										placeholder="last name"
										required
										fullWidth
										id="lastName"
										name="lastName"
										autoComplete="lname"
									/>
								</Fade>
							</Grid>
							<Grid item xs={12}>
								<Fade delay={500} left>
									<TextField
										value={email}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										placeholder="eamil"
										required
										fullWidth
										id="email"
										name="email"
										autoComplete="email"
									/>
								</Fade>
							</Grid>
							<Grid item xs={12}>
								<Fade delay={600} right>
									<TextField
										value={text}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										multiline
										rowsMax={2}
										required
										fullWidth
										placeholder="message"
										name="text"
										type="TextareaAutosize"
										id="textarea"
									/>
								</Fade>
							</Grid>
							<Grid item xs={12}>
								<Fade delay={700} left>
									<Button type="submit" color="primary" variant="contained">
										submit
									</Button>
								</Fade>
							</Grid>
						</Grid>
					</form>
				</Box>
			</ThemeProvider>
		</Container>
	)
}

export default ContactForm
