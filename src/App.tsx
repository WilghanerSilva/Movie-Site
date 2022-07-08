import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/> 
        <Route path = "/movie/:id" element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;