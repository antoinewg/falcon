import { IHuntersPosition } from '../components/HuntersPosition/types'

export interface Configuration {
  example: number
  hunters: IHuntersPosition | undefined
}

export const initialConfiguration = { example: 1, hunters: undefined }

export type Action =
  | { type: 'INIT' }
  | { type: 'SET_EXAMPLE'; payload: number }
  | { type: 'SET_HUNTERS'; payload: IHuntersPosition }

export const configurationReducer = (state: Configuration, action: Action): Configuration => {
  switch (action.type) {
    case 'INIT':
      return { ...initialConfiguration }
    case 'SET_EXAMPLE':
      return { ...state, example: action.payload }
    case 'SET_HUNTERS':
      return { ...state, hunters: action.payload }
    default:
      return state
  }
}
