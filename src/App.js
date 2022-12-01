import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './image/about.png';
import aboutimage1 from './image/download.png';
import Contact from './components/Contact';

function App(){
  return(
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All Need For Daily Life' button='Get The App'/>
      <Presentation/>
      <About image={aboutimage1} title='Comes With All Need For Daily Life' button='Download'/>
      <Contact/>
    </div>
  );
}
 
export default App;