import React, { Component } from 'react';
import Buttons from './Buttons';
import Counter from './Counter';
import Option from './Option';

class App extends Component {
    render(){
        return (
            <div style={{ textAlign: 'center' }}>
                <Counter/>
                <Option/>
                <Buttons/>
            </div>
        )
    }
}
export default App;