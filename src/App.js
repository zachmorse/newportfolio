import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    visibleWindow: ''
  };

  componentDidMount() {
    window.addEventListener('scroll', this.logScroll);
    window.addEventListener('mouseout', this.getMousePos);
    this.setState({
      visibleWindow: window.innerHeight
    });
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.logScroll);
  }

  logScroll = () => {
    console.log(window.scrollY);
  };

  getMousePos = () => {
    console.log('Mouse X:', window.clientX);
  };

  render() {
    return (
      <div className="App">
        <section className="titleBlock">
          <h3 className="titleStack fontWeight9 fadeIn9">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight8 fadeIn8">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight7 fadeIn7">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight6 fadeIn6">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight5 fadeIn5">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight4 fadeIn4">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight3 fadeIn3">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight2 fadeIn2">
            Zach Morse . Web developer . Nashville TN
          </h3>
          <h3 className="titleStack fontWeight1 fadeIn1">
            Zach Morse . Web developer . Nashville TN
          </h3>
        </section>
        <section className="contentBlock">NEXT SECTION</section>
      </div>
    );
  }
}

export default App;
