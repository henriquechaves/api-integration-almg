import React, { Component } from 'react';
import Header from './app/components/header';
import Search from './app/components/search';
import Footer from './app/components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
