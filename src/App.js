import './App.css'
import List from './List'

import Navbar from './Navbar';
function App(){
    const flowers =['Lotus','Rose','Sunflower','Hibiscus'];

    return (
    <>
       
            <Navbar title = 'CSS and separating JS adn JSX'/>
   
            <div className='container'>
               <List
                title='Flowers'List 
                items={flowers}
               
               />
            </div>

    </>
      
    );
}

export default App;