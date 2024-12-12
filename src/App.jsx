import { BrowserRouter, Route, Routes } from "react-router"
import FilmsPage from "./pages/FilmsPage"
import DefLayout from "./Layout/DefLayout"
import FilmSelected from "./pages/FilmSelected"
import { GlobalContextProvider } from "./contexts/GlobalContext"
import ScroolTop from "./components/ScrollTop"


function App() {


  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <ScroolTop />
          <Routes>
            <Route element={<DefLayout />}>

              <Route index element={<FilmsPage />} />
              <Route path="/films/:id" element={<FilmSelected />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App
