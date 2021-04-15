import React from 'react';
import Display from './displayDiv';
import Season from './seasons';

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
                    <Season lat={this.state.lat} />
                </div>)
        }
        if (this.state.error) {
            return (
                <Display message={`error: ${this.state.error}`} />
            )
        }
        else {
            return (
                <Display message='Loading' />
            )
        }

    };

}

export default Lat