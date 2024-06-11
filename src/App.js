import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
