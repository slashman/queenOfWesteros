import { Component } from 'react';
import Locations from './Locations.component.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations : [{
                name: 'The Reach',
                house: {name: 'Tyrell'},
                domain: {name: 'Targaryen'},
                units: [
                    { type: {
                        name: 'Cavalry',
                        type: 'Cavalry'
                    }, q: 5}
                ]
            }]
        };
    }

    render() {
        const { locations } = this.state;
        return (
            <Locations locations={locations} />
        );
    }
}
