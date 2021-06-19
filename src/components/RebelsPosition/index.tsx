import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

const data = {
  countdown: 6,
  bounty_hunters: [
    { planet: 'Tatooine', day: 4 },
    { planet: 'Dagobah', day: 5 },
  ],
}

// Constant for now
const PLANETS = ['Tatooine', 'Dagobah', 'Hoth', 'Endor']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getErrorMessage = (rebels: any): string | undefined => {
  let errorMessage

  if (typeof rebels !== 'object' || !rebels) return 'The object is malformed'
  if (!('countdown' in rebels)) return "The object should have the key 'countdown'"
  if (!('bounty_hunters' in rebels)) return "The object should have the key 'bounty_hunters'"

  const hunters = 'bounty_hunters' in rebels ? rebels.bounty_hunters : []
  if (!Array.isArray(hunters)) return "'bounty_hunters' should be an array"
  if (hunters.some(({ planet }) => !PLANETS.includes(planet))) return 'Some planets are incorrect'

  return errorMessage
}

export const RebelsPosition = () => {
  const classes = useStyles()
  const [rebels, setRebels] = useState(data)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRebels(JSON.parse(event.target.value))

  const error = getErrorMessage(rebels)

  return (
    <React.Fragment>
      <FormControl component="fieldset" className={classes.formControl} error={!!error}>
        <TextField
          id="standard-multiline-flexible"
          label=""
          variant="outlined"
          multiline
          value={JSON.stringify(rebels, null, 4)}
          fullWidth={true}
          onChange={handleChange}
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
      <CardActions>
        <div className={classes.apply}>
          <Button color="primary" disabled={!!error}>
            Apply
          </Button>
        </div>
      </CardActions>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: { width: '100%' },
    apply: { marginLeft: 'auto' },
  }),
)
