import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Dashboard } from './components/Dashboard'
import { Drawer } from './configuration/Drawer'
import { ConfigurationWrapper } from './configuration/Wrapper'

const queryClient = new QueryClient()

export const App = () => (
  <ConfigurationWrapper>
    <QueryClientProvider client={queryClient}>
      <Drawer />
      <CssBaseline />
      <Dashboard />
    </QueryClientProvider>
  </ConfigurationWrapper>
)
