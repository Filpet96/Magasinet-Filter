import React from "react";
import { Line } from "rc-progress";

class ProgressBar extends React.Component {
  constructor() {
    super();

    this.state = {
      percent: 0
    };

    this.changeProgressState = this.changeProgressState.bind(this);
  }

  componentDidMount() {
    function getDocHeight() {
      const d = document;
      return Math.max(
        d.body.scrollHeight,
        d.documentElement.scrollHeight,
        d.body.offsetHeight,
        d.documentElement.offsetHeight,
        d.body.clientHeight,
        d.documentElement.clientHeight
      );
    }

    function percentScrolled() {
      const winHeight =
        window.innerHeight ||
        (document.documentElement || document.body).clientHeight;
      const docHeight = getDocHeight();
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      const trackLength = docHeight - winHeight;
      const pctScrolled = Math.round((scrollTop / trackLength) * 100);
      console.log("Scrolled: " + pctScrolled + "%");
    }

    window.addEventListener(
      "scroll",
      function() {
        percentScrolled();
      },
      false
    );
  } //end didmount
  changeProgressState() {
    //random value that goes into state. How to fetch data from percentScrolled?
    const value = parseInt(Math.random() * 100, 10);

    this.setState({
      percent: value
    });
  }

  render() {
    return (
      <div>
        <Line
          percent={this.state.percent}
          strokeWidth="1"
          strokeColor="#e1ab99"
          trailColor="#fff"
        />
      <div>
          <button onClick={this.changeProgressState}>Change State</button>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
