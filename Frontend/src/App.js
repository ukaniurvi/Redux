import './App.css';
import View from './Components/View';
import '../../Frontend/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/Form';
import Update from './Components/Update';
import Login from './Components/Login';
import { ToastContainer, toast } from 'react-toastify';



function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/form' element={<Form />} />
          <Route path='/view' element={<View />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

