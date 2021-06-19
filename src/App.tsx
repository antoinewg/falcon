import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { Graph } from './components/Graph'
import { RebelsPosition } from './components/RebelsPosition'

export const App = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {/* Rebels' positions */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Rebels&#39; position
                  </Typography>
                  <RebelsPosition />
                </CardContent>
              </Card>
            </Grid>

            {/* Planetary system */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Planetary system
                  </Typography>
                  <Graph />
                </CardContent>
              </Card>
            </Grid>

            {/* Survival chances */}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Survival chances
                  </Typography>
                  <Typography variant="h2">91%</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    minHeight: 400,
  },
}))
