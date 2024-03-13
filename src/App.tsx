import './App.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import RecipeDetails from './components/RecipeDetails';
import { useState } from 'react';

const queryClient = new QueryClient()

function App() {
  const [ingreDetails, setingreDetails] = useState<string[]>([])
  
  function recipeData(data: string[]): void{
    setingreDetails(data)
  }

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home recipeData={recipeData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Recipe" element={<RecipeDetails ingreDetails={ingreDetails}/>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
