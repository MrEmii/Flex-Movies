import React, {Component} from 'react';

class App extends Component {

    render() { 
        return (
            <div>
                <p>ey</p>
                {this.props.children}
                <p>chay</p>
            </div>
         );
    }
}
 
export default App;