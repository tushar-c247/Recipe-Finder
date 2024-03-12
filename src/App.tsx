import './App.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from './components/Fetch'
import Navbar from './components/Navbar'
import About from './components/About';

const queryClient = new QueryClient()

function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/card" element={<Cards/>} /> */}
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
