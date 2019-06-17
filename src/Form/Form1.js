import React, { Component } from 'react'
import Form2 from './Form2'

export class Form1 extends Component {
    state = {
        step: 1,
        pokename: '',
        pokeimg: '',
        type1: '',
        type2: '' 
    }
    //  Proceed to next step

    nextstep = () =>{
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }
    

    prevstep = () =>{
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }

    // handel field change
    handleChange = input => e => {
         this.setState({[input]: e.target.value});
    }
    
    render() {
        const { step } = this.state;
        const { pokename, pokeimg, type1, type2 } = this.state;
        const values =  {pokename, pokeimg, type1, type2 };

        switch(step){
            case 1:
                return(
                    <Form2
                        nextstep = {this.nextstep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return <h1> Form1</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default Form1
