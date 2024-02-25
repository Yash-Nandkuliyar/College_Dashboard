import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Dashboard from './component/pages/Dashboard';
import Home from './component/pages/Home';
import Teacher from './component/pages/Teacher';
import Staff from './component/pages/Staff';
import Transport from './component/pages/Transport';
import 'react-toastify/dist/ReactToastify.css'
import Book from './component/pages//Book';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/dash' element={<Dashboard/>}></Route> 
            <Route path="/login" element={<Home/>}></Route>
            <Route path="/t" element={<Teacher/>}></Route>
            <Route path="/s" element={<Staff/>}></Route>
            <Route path='/tr' element={<Transport/>}></Route>
            <Route path='/bk' element={<Book/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;