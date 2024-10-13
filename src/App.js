import logo from './logo.svg';
import './App.css';
import { Signup } from './signup/Signup';
import { Signin } from './signin/Signin';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     <Routes>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/signup' element={<Signup/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
