import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ContactForm from './ContactForm';
import '../styles/App.scss'

class App extends React.Component <{name: string, image: string}, {}> {
  
  render() {
    return (
      <div>
      <Header name="string "image=""/>
      <Main name="string" image=""/>
      <ContactForm/>
      <Footer/>
      </div>
    );
  }
}

export default App;
