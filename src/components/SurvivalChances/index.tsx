import Typography from '@material-ui/core/Typography'
import React from 'react'

import { useSurvivalOdds, useComputedOdds } from './api'

const formatOdds = (num?: number): string => (typeof num === 'undefined' ? 'Unknown' : `${num}%`)

export const SurvivalChances = () => {
  const { data: answer } = useSurvivalOdds()
  const { data: computed } = useComputedOdds()

  return (
    <React.Fragment>
      <Typography variant="h2">{formatOdds(computed?.odds)}</Typography>
      <Typography variant="h6" align="right">
        (Answer {formatOdds(answer?.odds)})
      </Typography>
    </React.Fragment>
  )
}
