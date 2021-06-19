// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (rebels: any, planets: string[]): string | undefined => {
  let errorMessage

  if (typeof rebels !== 'object' || !rebels) return 'The object is malformed'
  if (!('countdown' in rebels)) return "The object should have the key 'countdown'"
  if (!('bounty_hunters' in rebels)) return "The object should have the key 'bounty_hunters'"

  const hunters = 'bounty_hunters' in rebels ? rebels.bounty_hunters : []
  if (!Array.isArray(hunters)) return "'bounty_hunters' should be an array"
  if (hunters.some(({ planet }) => !planets.includes(planet))) return 'Some planets are incorrect'

  return errorMessage
}
