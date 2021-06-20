import CardActions from '@material-ui/core/CardActions'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useEffect, useMemo } from 'react'
import { useQueryClient } from 'react-query'

import { QueryKeys } from '../../constants'
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
  const [rebels, setRebels] = useState<IRebelsPosition | undefined>(undefined)
  const queryClient = useQueryClient()

  useEffect(() => {
    if (data) {
      setRebels(data)
    }
  }, [!data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRebels(JSON.parse(event.target.value))

  const error = useMemo(() => getErrorMessage(rebels, planets), [rebels, planets])

  const handleApply = () => queryClient.setQueryData(QueryKeys.REBELS_POSITION, rebels)

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
        <Apply disabled={!!error} onClick={handleApply} />
      </CardActions>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ formControl: { width: '100%' } }))
