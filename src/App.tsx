import './App.scss'
import RecipeState from './context/recipe/RecipeState';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import RecipeDetails from './components/RecipeDetails';

const queryClient = new QueryClient()

function App() {
  return (
    <RecipeState>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/Recipe" element={<RecipeDetails/>} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </RecipeState>
  )
}

export default App
