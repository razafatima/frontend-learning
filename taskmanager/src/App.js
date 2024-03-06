import Main from './component/Main/Main';
import Login from './component/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Login/>}/>
          <Route path="/Main" element={<Main/>}/>
        
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}


