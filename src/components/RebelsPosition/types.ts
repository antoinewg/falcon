interface BountyHunter {
  planet: string
  day: number
}

export interface IRebelsPosition {
  countdown: number
  bounty_hunters: BountyHunter[]
}
