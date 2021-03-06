import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { HuntersPosition } from '../HuntersPosition'
import { PlanetarySystem } from '../PlanetarySystem'
import { useFalcon } from '../PlanetarySystem/api'
import { SurvivalChances } from '../SurvivalChances'

import { DashboardCard } from './DashboardCard'
import background from './galaxy.jpg'

export const Dashboard = () => {
  const classes = useStyles()
  const { data: falcon } = useFalcon()

  return (
    <main style={{ backgroundImage: `url(${background})`, height: '100vh' }}>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <DashboardCard title="Itinerary">
              <Typography variant="h4">
                {falcon?.departure} 🛫 - 🛬 {falcon?.arrival}
              </Typography>
            </DashboardCard>
          </Grid>

          <Grid item xs={12} sm={4}>
            <DashboardCard title="Autonomy ⚡️">
              <Typography variant="h4">{falcon?.autonomy} days</Typography>
            </DashboardCard>
          </Grid>

          <Grid item xs={12} sm={4}>
            <DashboardCard title="Odds">
              <SurvivalChances />
            </DashboardCard>
          </Grid>
        </Grid>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <DashboardCard title="Hunters' position">
              <HuntersPosition />
            </DashboardCard>
          </Grid>

          <Grid item xs={12} sm={6}>
            <DashboardCard title="Planetary system">
              <PlanetarySystem />
            </DashboardCard>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(8),
  },
}))
