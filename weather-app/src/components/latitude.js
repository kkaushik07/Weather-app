import React from 'react';
import Season from './seasonDisplay';

class Lat extends React.Component {

    constructor(props) {
        super(props);
        this.state = { lat: null, error: '' };

    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => {
                this.setState({ error: err.message })
                console.log(err)
            }
        )
    }


    render() {
        if (this.state.lat) {
            return (
                <div>
                    lat:{this.state.lat} <br />
                    <Season lat ={this.state.lat}/>
                </div>)
        }
        if (this.state.error) {
            return (
                <div>
                    error:{this.state.error} <br />
                </div>)
        }
        else {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }

    };

}

export default Lat