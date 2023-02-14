import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (

    <>
    
<Navbar title = "Jainam" textabout="About"/>
<div className="container ">
<TextForm heading="Enter the text below"/>
</div>
     
    </>
  );
}

export default App;
