import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  render() {
    console.log(this.props.match.params);

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header
            tagline="Fresh Seafood Market"
            storeId={this.props.match.params.storeId}
          />
          <input type="text" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
