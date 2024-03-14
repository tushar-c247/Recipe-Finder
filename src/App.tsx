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
  const [image, setImage] = useState<string>("")
  const [calori, setCalori] = useState<number>()
  const [label, setLabel] = useState<string>("")
  const [serItem, setSerItem] = useState<string>("recipe")

  function recipeData(data: string[], img: string, calori: number, label: string): void {
    setImage(img)
    setingreDetails(data)
    setCalori(calori)
    setLabel(label)
  }

  function serBar(serValue: string,): void {
    if (serValue !== "") {
      setSerItem(serValue)
    }
  }

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar serBar={serBar} />
        <Routes>
          <Route path="/" element={<Home seritem={serItem} recipeData={recipeData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/Recipe" element={<RecipeDetails label={label} calori={calori} image={image} ingreDetails={ingreDetails} />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
