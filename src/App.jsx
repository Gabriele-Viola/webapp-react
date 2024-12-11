import { BrowserRouter, Route, Routes } from "react-router"
import FilmsPage from "./pages/FilmsPage"
import DefLayout from "./Layout/DefLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route index element={<FilmsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
