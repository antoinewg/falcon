export interface Configuration {
  example: number
}

export const initialConfiguration = { example: 2 }

export type Action = { type: 'INIT' } | { type: 'SET_EXAMPLE'; payload: number }

export const configurationReducer = (state: Configuration, action: Action): Configuration => {
  switch (action.type) {
    case 'INIT':
      return { ...initialConfiguration }
    case 'SET_EXAMPLE':
      return { ...state, example: action.payload }
    default:
      return state
  }
}
