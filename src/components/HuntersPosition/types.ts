interface BountyHunter {
  planet: string
  day: number
}

export interface IHuntersPosition {
  countdown: number
  bounty_hunters: BountyHunter[]
}
