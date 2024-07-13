import React from 'react';
// import ReactDOM from 'react-dom'

const car_color = "Nice";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };

    }

    change_color = (clr) => {
        this.setState({ color: clr })


    };
    render() {
        return (
            <car>
                <h1>the car is {this.props.brand.name} and model is {this.props.brand.model}</h1>
                <h2>I am a Car </h2>
                <h3>brand : {this.state.brand} </h3>
                <h3>color :  {this.state.color} </h3>
                <h3>model :  {this.state.model} !</h3>
                <h3>year :  {this.state.year} !</h3>


                <button
                    type="button"
                    onClick={() => this.change_color(car_color)}>
                    change color
                </button>

            </car>
        );
    }
}


class Garage extends React.Component {
    render() {
        let car_info = { name: "Fordis", model: "mustag" }
        return (
            <div>
                <h1>who is in the Garage ?</h1>
                <Car brand={car_info} />

            </div>
        );
    }
}








export default Garage;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />); 