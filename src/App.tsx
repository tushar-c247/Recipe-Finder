import './App.scss'
import Fetch from './components/Fetch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
const queryClient = new QueryClient()

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Fetch/>
    </QueryClientProvider>
    </>
  )
}

export default App
