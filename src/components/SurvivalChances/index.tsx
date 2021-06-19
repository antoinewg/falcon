import { Divider } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import { useSurvivalOdds, useComputedOdds } from './api'

const formatOdds = (num?: number): string => (typeof num === 'undefined' ? 'Unknown' : `${num}%`)

export const SurvivalChances = () => {
  const classes = useStyles()
  const { data: answer } = useSurvivalOdds()
  const { data: computed } = useComputedOdds()

  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        {formatOdds(computed?.odds)}
      </Typography>
      <div className={classes.answer}>
        <Divider />
        <Typography variant="h6" align="right">
          (Answer {formatOdds(answer?.odds)})
        </Typography>
      </div>
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => createStyles({ answer: { marginTop: '100%' } }))
