import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounter5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounter5}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr : state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter5: () => {
            console.log('Increment Counter by 5 action dispatched');
            dispatch({type: 'INC_COUNTER_5', value: 5});
        },
        onIncrementCounter: () => {
            console.log('Increment Counter by 1 action dispatched');
            dispatch({type: 'INC_COUNTER'});
        },
        onDecrementCounter5: () => {
            console.log('Decrement Counter by 5 action dispatched');
            dispatch({type: 'DEC_COUNTER_5', value: 50});
        },
        onDecrementCounter: () => {
            console.log('Decrement Counter by 1 action dispatched');
            dispatch({type: 'DEC_COUNTER'});
        }    

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);