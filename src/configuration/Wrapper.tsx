import React, { ReactNode, useContext, useReducer } from 'react'

import { Action, initialConfiguration, configurationReducer, Configuration } from './reducer'

interface Context {
  configuration: Configuration
  dispatch: React.Dispatch<Action>
}

export const ConfigurationContext = React.createContext<Context | undefined>(undefined)

export const ConfigurationWrapper = ({ children }: { children: ReactNode }) => {
  const [configuration, dispatch] = useReducer(configurationReducer, initialConfiguration)

  return (
    <ConfigurationContext.Provider value={{ configuration, dispatch }}>
      {children}
    </ConfigurationContext.Provider>
  )
}

export const useConfiguration = () => {
  const context = useContext(ConfigurationContext)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return context!
}
