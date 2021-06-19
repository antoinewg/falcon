import { Divider } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { useFalcon } from '../PlanetarySystem/api'

import { useSurvivalOdds, useComputedOdds } from './api'

const formatOdds = (num?: number): string => (typeof num === 'undefined' ? 'Unknown' : `${num}%`)

export const SurvivalChances = () => {
  const classes = useStyles()
  const { data: answer } = useSurvivalOdds()
  const { data: computed } = useComputedOdds()
  const { data: falcon } = useFalcon()

  return (
    <React.Fragment>
      <Typography variant="h2">{formatOdds(computed?.odds)}</Typography>
      <div className={classes.bottom}>
        <Typography variant="h6">🛫 Departure &emsp; {falcon?.departure}</Typography>
        <Typography variant="h6">🛬 Destination &emsp; {falcon?.arrival}</Typography>
        <Typography variant="h6">⚡️ Autonomy &emsp; {falcon?.autonomy}</Typography>
        <Divider />
        <Typography variant="h6" align="right">
          (Answer {formatOdds(answer?.odds)})
        </Typography>
      </div>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ bottom: { marginTop: '100%' } }))
