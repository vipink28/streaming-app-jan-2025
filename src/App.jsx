import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Browse from "./pages/Browse"
import BrowseByGenre from "./pages/BrowseByGenre"
import Details from "./pages/Details"
import Homescreen from "./pages/Homescreen"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />}></Route>
        <Route path="/details/:platform/:id" element={<Details />}></Route>
        <Route path="/browse/:platform" element={<Browse />}></Route>
        <Route path="/browsebygenre/:platform/:genreid" element={<BrowseByGenre />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
