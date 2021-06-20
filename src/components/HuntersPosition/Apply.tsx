import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'

interface Props {
  disabled: boolean
  onClick: () => void
}

export const Apply: React.FC<Props> = ({ disabled, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.apply}>
      <Button color="primary" disabled={disabled} onClick={onClick}>
        Apply
      </Button>
    </div>
  )
}

const useStyles = makeStyles(() => createStyles({ apply: { marginLeft: 'auto' } }))
