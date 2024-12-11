import { BrowserRouter, Route, Routes } from "react-router"
import FilmsPage from "./pages/FilmsPage"
import DefLayout from "./Layout/DefLayout"
import FilmSelected from "./pages/FilmSelected"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>

            <Route index element={<FilmsPage />} />
            <Route path="/films/:id" element={<FilmSelected />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
