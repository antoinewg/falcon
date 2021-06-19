import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'

interface Props {
  disabled: boolean
}

export const Apply: React.FC<Props> = ({ disabled }) => {
  const classes = useStyles()

  return (
    <div className={classes.apply}>
      <Button color="primary" disabled={disabled}>
        Apply
      </Button>
    </div>
  )
}

const useStyles = makeStyles(() => createStyles({ apply: { marginLeft: 'auto' } }))
