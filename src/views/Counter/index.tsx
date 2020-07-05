import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './store/actions';

class Counter extends React.Component<{
  counter: number,
  increment: any,
  incrementIfOdd: any,
  incrementAsync: any,
  decrement: any,
}, {
  isChecked: boolean
}> {
  constructor(props) {
    super(props);
  }
  incrementAsync = () => {
    const { incrementAsync } = this.props;
    incrementAsync();
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, } = this.props;
    return (
      <p>
        Clicked:{' '}{counter}{' '}times
        {' '}
        <button type="button" onClick={increment}>+</button>
        {' '}
        <button type="button" onClick={decrement}>-</button>
        {' '}
        <button type="button" onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button type="button" onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

export default connect(state => ({ ...state }), { ...CounterActions })(Counter);
