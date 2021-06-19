import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Dashboard } from './components/Dashboard'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <CssBaseline />
    <Dashboard />
  </QueryClientProvider>
)
