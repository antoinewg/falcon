// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (huntersPosition: any, planets: string[]): string | undefined => {
  let errorMessage

  if (typeof huntersPosition !== 'object' || !huntersPosition) return 'The object is malformed'
  if (!('countdown' in huntersPosition)) return "The object should have the key 'countdown'"
  if (!('bounty_hunters' in huntersPosition))
    return "The object should have the key 'bounty_hunters'"

  const hunters = 'bounty_hunters' in huntersPosition ? huntersPosition.bounty_hunters : []
  if (!Array.isArray(hunters)) return "'bounty_hunters' should be an array"
  if (hunters.some(({ planet }) => !planets.includes(planet))) return 'Some planets are incorrect'

  return errorMessage
}
