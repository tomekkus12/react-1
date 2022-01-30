import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue, //number
            step: 0
        };
        // binding needed when this.changeValue is a ES5 method
        // this.changeValue = this.changeValue.bind(this);
    }

    //changeValue() { // ES5 method (no this context by default)
    changeValue = (action) => { // ES6 method

        this.setState((prevState, prevProps) => {
            
            let currentCounterValue = prevState.counterValue;
            
            console.log(typeof currentCounterValue);
            console.log(typeof prevState.counterValue);
            if (action === 'add') {
                currentCounterValue += this.state.step;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
            });
        });
    }

    changeStep = (howMany) => {
        this.setState({step: howMany});
    }

    render() {

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} step={this.state.step} />
                <Step realStep={this.state.step} stepMethod={this.changeStep}/>
            </div>
        );
    }
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;

