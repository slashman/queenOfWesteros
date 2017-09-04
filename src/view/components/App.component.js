import { Component } from 'react'
import Locations from './Locations.component.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations : [{
                name: 'The Reach',
                house: 'Tyrell',
                domain: 'Targaryen',
                units: [
                    { type: 'cavalry', quantity: 5}
                ]
            }]
        };
    }

    render() {
        const { locations } = this.state;
        return (
            <Locations {...locations} />
        );
    }
}
