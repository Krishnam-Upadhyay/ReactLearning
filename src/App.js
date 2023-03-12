import './App.css'
import Counter from './Counter';
import Navbar from './Navbar';
function App(){
    const flowers =['Lotus','Rose','Sunflower','Hibiscus'];

    return (
    <>
       
            <Navbar title = 'CSS and separating JS adn JSX'/>
   
            <div className='container'>
              <Counter />
            </div>

    </>
      
    );
}

export default App;