import React, { Component } from "react";
import './Step.css';


class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {realValue: this.props.realStep};
    }

    update = () => {
        this.setState({realValue: parseInt(document.getElementById('step-value').value)});
        this.props.stepMethod((this.state.realValue));
    }

    handleChange(event) {
        
        this.props.stepMethod((this.state.realValue));
        this.setState({realValue: parseInt(event.target.value)});

      }

    render() {

        return (
            <div className="step">
                Krok:
                <input type="number" id="step-value" min="0" value={this.state.realValue} onClick={this.handleChange.bind(this)} onChange={this.handleChange.bind(this)} onBlur={this.handleChange.bind(this)}/>
            </div>
        );
    }
}

export default Step;