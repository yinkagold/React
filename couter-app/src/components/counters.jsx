import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 }, // id uniquely identifies the counter, values to set the initial value
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0; // reset value to 0
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters]; // here the array is cloned
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[index]);
  };
  handleDelete = countrerId => {
    const counters = this.state.counters.filter(c => c.id !== countrerId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter} // this carries all the data about the data
          />
        ))}
      </div>
    );
  }
}

export default Counters;
