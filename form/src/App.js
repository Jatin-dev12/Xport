import './App.css';
import Layout from './layout';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Data from './Pages/Data';
import Form from './Pages/Form';
import  Line  from './Pages/Line';

function App() {
  // const isAuthenticated = false; // Set this to true if the user is authenticated

  return (
    
    <BrowserRouter basename='' >

    <Routes>

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Form/>} />
        <Route path="Data" element={<Data />} />
        <Route path="Line" element={<Line />} />

      
      </Route>
    
    </Routes>
  </BrowserRouter>

  );
}

export default App;
