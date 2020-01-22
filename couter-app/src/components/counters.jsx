import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // replacing props
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter} // this carries all the data about the data
          />
        ))}
      </div>
    );
  }
}

export default Counters;
