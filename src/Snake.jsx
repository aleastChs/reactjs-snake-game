import React, {Component} from 'react';

class Snake extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

export default Snake;