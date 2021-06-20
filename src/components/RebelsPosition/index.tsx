import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useEffect, useMemo, useState } from 'react'

import { useConfiguration } from '../../configuration/Wrapper'
import { usePlanets } from '../PlanetarySystem/api'

import { useRebelsPosition } from './api'
import { Apply } from './Apply'
import { IRebelsPosition } from './types'
import { Upload } from './Upload'
import { getErrorMessage } from './utils'

export const RebelsPosition = () => {
  const classes = useStyles()
  const { data } = useRebelsPosition()
  const planets = usePlanets()
  const { configuration, dispatch } = useConfiguration()
  const { rebels } = configuration

  const [tempRebels, setTempRebels] = useState<IRebelsPosition | undefined>(rebels)

  useEffect(() => {
    if (data) {
      setTempRebels(data)
      dispatch({ type: 'SET_REBELS', payload: data })
    }
  }, [!data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTempRebels(JSON.parse(event.target.value))

  const error = useMemo(() => getErrorMessage(tempRebels, planets), [tempRebels, planets])

  const handleApply = () => tempRebels && dispatch({ type: 'SET_REBELS', payload: tempRebels })

  return (
    <React.Fragment>
      <FormControl component="fieldset" className={classes.formControl} error={!!error}>
        <TextField
          id="standard-multiline-flexible"
          label=""
          variant="outlined"
          multiline
          value={JSON.stringify(tempRebels, null, 4)}
          fullWidth={true}
          onChange={handleChange}
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
      <CardActions disableSpacing>
        <Upload onUpload={setTempRebels} />
        <Apply disabled={!!error} onClick={handleApply} />
      </CardActions>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ formControl: { width: '100%' } }))
