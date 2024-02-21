import Header from './Header/Header';
import Login from './component/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Login/>}/>
          <Route path="/Header" element={<Header/>}/>
        
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}


