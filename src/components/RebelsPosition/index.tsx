import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

import { Apply } from './Apply'
import { Upload } from './Upload'
import { getErrorMessage } from './utils'

const data = {
  countdown: 6,
  bounty_hunters: [
    { planet: 'Tatooine', day: 4 },
    { planet: 'Dagobah', day: 5 },
  ],
}

export const RebelsPosition = () => {
  const classes = useStyles()
  const [rebels, setRebels] = useState<Record<string, unknown>>(data)

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
      <CardActions disableSpacing>
        <Upload onUpload={setRebels} />
        <Apply disabled={!!error} />
      </CardActions>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ formControl: { width: '100%' } }))
