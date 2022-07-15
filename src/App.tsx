import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/> 
        <Route path = "/movie/:id" element={<MoviePage/>}/>
        <Route path = "/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;