import React, { Component } from 'react';

class App extends Component {

  //Component creation lifecycles

  //Constructor is default ES6 feature
  constructor(props) {
    super(props);

    this.state = {        //Setup state
      count: 0
    };                    //No side-effects

    console.log("Contructor called");
  }

  static getDerivedStateFromProps(props, state) {           //Static
    console.log("getDerivedStateFormProps");
    state = { ...state, count: 4 };                         //Sync state
    return state;                                           //Return state
  }

  shouldComponentUpdate(nextProps, nextState) {             //Last minute DOM updates like user scrolling position
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }


  render() {                                  //Cause side-effects
    console.log("In Render ", this.state);    //Don't call set state immediately or synchronously
    return (
      <div>

      </div>
    );
  }

  //Update child components

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate ", prevProps, prevState);
    return {message: 'smoe data snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){               //Can cause side-effects
    console.log("componentDidUpdate", snapshot);
  }

  componentDidMount() {
    console.log("ComponentDidMount called")
    this.setState({
      count: this.state.count + 1
    });
  }

  //Component Updating lifecycles



}

export default App;
