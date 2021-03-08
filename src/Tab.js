import React, {useState, useEffect, useLayoutEffect} from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    // let [value, setValue] = useState(199);

    // useEffect( () => {
    //   console.log('TAB: running use effect');
    //   console.log(localStorage.getItem('ws'));
    //  },[]
    // )

    handleClick() {
        this.setState(({counter}) => ({
          counter: counter + 1
        }));
      }

    render() {
        if (this.state.counter === 1) {
            // Simulate a JS error
            throw new Error('I crashed!');
          }

        return (<div>
            This Tab<br/>
            <button onClick={this.handleClick} >Throw Error</button>
        </div>);
    };  
}

export default Tab;