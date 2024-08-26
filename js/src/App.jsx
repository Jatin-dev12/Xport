  import './App.css';
import Layout from './Layout';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Data from './Pages/Data';
import Form from './Pages/Form';

function App() {
  // const isAuthenticated = false; // Set this to true if the user is authenticated

  return (
    
    <BrowserRouter basename='' >

    <Routes>

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Form/>} />
        <Route path="Data" element={<Data />} />
      
      </Route>
    
    </Routes>
  </BrowserRouter>

  );
}

export default App;
