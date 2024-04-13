
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/User/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
