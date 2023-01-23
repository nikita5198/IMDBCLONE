
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/pages/home/home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<h1>Movie Details</h1>}></Route>
                <Route path="movies/:type" element={<h1>Movie List</h1>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
