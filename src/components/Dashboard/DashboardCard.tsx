import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

interface Props {
  title: string
}

export const DashboardCard: React.FC<React.PropsWithChildren<Props>> = ({ title, children }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    height: '100%',
    backgroundColor: '#dedede',
  },
}))
