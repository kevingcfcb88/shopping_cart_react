import React from 'react';
import Nav from './Nav';
import './App.css';

class App extends React.Component{

  state = {
    aciveTab: 0
  };

  handleTabChange = (index) => {
    this.setState({
      aciveTab: index
    });
  }

  renderContent(){
    switch(this.state.aciveTab){
      default: 
      case 0: return <nav>Items</nav>;
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