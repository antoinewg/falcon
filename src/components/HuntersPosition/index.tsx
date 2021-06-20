import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useEffect, useMemo, useState } from 'react'

import { useConfiguration } from '../../configuration/Wrapper'
import { usePlanets } from '../PlanetarySystem/api'

import { useHuntersPosition } from './api'
import { Apply } from './Apply'
import { IHuntersPosition } from './types'
import { Upload } from './Upload'
import { getErrorMessage } from './utils'

export const HuntersPosition = () => {
  const classes = useStyles()
  const { data } = useHuntersPosition()
  const planets = usePlanets()
  const { configuration, dispatch } = useConfiguration()
  const { hunters } = configuration

  const [tempHunters, setTempHunters] = useState<IHuntersPosition | undefined>(hunters)

  useEffect(() => {
    if (data) {
      setTempHunters(data)
      dispatch({ type: 'SET_HUNTERS', payload: data })
    }
  }, [!data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTempHunters(JSON.parse(event.target.value))

  const error = useMemo(() => getErrorMessage(tempHunters, planets), [tempHunters, planets])

  const handleApply = () => tempHunters && dispatch({ type: 'SET_HUNTERS', payload: tempHunters })

  return (
    <React.Fragment>
      <FormControl component="fieldset" className={classes.formControl} error={!!error}>
        <TextField
          id="standard-multiline-flexible"
          label=""
          variant="outlined"
          multiline
          value={JSON.stringify(tempHunters, null, 4)}
          fullWidth={true}
          onChange={handleChange}
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
      <CardActions disableSpacing>
        <Upload onUpload={setTempHunters} />
        <Apply disabled={!!error} onClick={handleApply} />
      </CardActions>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ formControl: { width: '100%' } }))
