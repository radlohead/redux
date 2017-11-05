import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//Action
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function increase(diff){
    return {
        type: INCREMENT,
        addBy: diff
    }
}
function decrease(diff){
    return {
        type: DECREMENT,
        subBy: diff
    }
}

//Reducer
const initialState = {
    value: 0
};
const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - action.subBy
            });
        default:
            return state;
    }
};

//store
const store = createStore(counterReducer);

//App
class App extends Component {
    constructor(props) {
        super(props);
    }
    onAddClick(){
        this.props.store.dispatch(increase(1));
    }
    onSubClick(){
        this.props.store.dispatch(decrease(1));
    }
    render(){
        return (
            <div>
                <button
                    type="button"
                    onClick={this.onAddClick.bind(this)}>+</button>
                <button
                    type="button"
                    onClick={this.onSubClick.bind(this)}>-</button>
                {this.props.store.getState().value}
            </div>
        )
    }
}

//rendering
const render = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )
};
store.subscribe(render);
render();