import './App.css'
import { Fragment } from 'react';
import Navbar from './Navbar';
function App(){
    return (
    <div>
          <div className='bg-dark'>
            <Navbar title = 'CSS'/>
        </div>
        <h1>
            Hello World
        </h1>
    </div>
      
    );
}

export default App;