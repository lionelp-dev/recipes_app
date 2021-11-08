import React from "react";
import Calendar from "./app/components/calendar/calendar";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar"></div>
        <div className="content">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
