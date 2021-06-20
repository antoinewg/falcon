import { IRebelsPosition } from '../components/RebelsPosition/types'

export interface Configuration {
  example: number
  rebels: IRebelsPosition | undefined
}

export const initialConfiguration = { example: 1, rebels: undefined }

export type Action =
  | { type: 'INIT' }
  | { type: 'SET_EXAMPLE'; payload: number }
  | { type: 'SET_REBELS'; payload: IRebelsPosition }

export const configurationReducer = (state: Configuration, action: Action): Configuration => {
  switch (action.type) {
    case 'INIT':
      return { ...initialConfiguration }
    case 'SET_EXAMPLE':
      return { ...state, example: action.payload }
    case 'SET_REBELS':
      return { ...state, rebels: action.payload }
    default:
      return state
  }
}
