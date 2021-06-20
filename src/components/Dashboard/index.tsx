import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { PlanetarySystem } from '../PlanetarySystem'
import { RebelsPosition } from '../RebelsPosition'
import { SurvivalChances } from '../SurvivalChances'

import { DashboardCard } from './DashboardCard'
import background from './galaxy.jpg'

export const Dashboard = () => {
  const classes = useStyles()

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={4}>
          <DashboardCard title="Rebels' position">
            <RebelsPosition />
          </DashboardCard>

          <DashboardCard title="Planetary system">
            <PlanetarySystem />
          </DashboardCard>

          <DashboardCard title="Survival chances">
            <SurvivalChances />
          </DashboardCard>
        </Grid>
      </Container>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))
