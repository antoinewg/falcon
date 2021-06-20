import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Dashboard } from './components/Dashboard'
import { ConfigurationWrapper } from './configuration/Wrapper'

const queryClient = new QueryClient()

export const App = () => (
  <ConfigurationWrapper>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Dashboard />
    </QueryClientProvider>
  </ConfigurationWrapper>
)
