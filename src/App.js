import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './componentes/Card/Card';
import Header from './componentes/Header/Header';

function App() {
  return (
    <>
     <Header />
        <div className="container">
            <Routes>
                <Route  path='/' element={<Card />} />       
            </Routes>
      </div>
        
    
    </>
   
  );
}

export default App;
