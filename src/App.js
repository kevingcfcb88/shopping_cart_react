import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './static-data';

class App extends React.Component{

  state = {
    aciveTab: 0,
    cart:[]
  };

  handleTabChange = (index) => {
    this.setState({
      aciveTab: index
    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart,item.id]
    });
  }

  renderContent(){
    switch(this.state.aciveTab){
      default: 
      case 0: return (<ItemPage items={items} onAddToCart={this.handleAddToCart}/>);
      case 1: return <nav>Cart</nav>;
    }
  }

  render(){
    let {activeTab} = this.state;
    return(
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;