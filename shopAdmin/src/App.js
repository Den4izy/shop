
import React from 'react';
import Footer from "./components/Footer";
import AddItem from "./components/AddItem"
import ShowItem from "./components/ShowItem"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper" >
        <AddItem />
        <ShowItem />
        <Footer />
      </div>
    );
  }
}

export default App;
