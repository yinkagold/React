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

  handleDelete = countrerId => {
    const counters = this.state.counters.filter(c => c.id !== countrerId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} // this carries all the data about the data
          />
        ))}
      </div>
    );
  }
}

export default Counters;
