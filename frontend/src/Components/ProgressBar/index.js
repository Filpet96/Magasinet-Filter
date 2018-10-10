import React from "react";
import { Line } from "rc-progress";

class ProgressBar extends React.Component {
  constructor() {
    super();

    this.state = {
      percent: 0
    };
  }

  changeProgressState() {
    this.setState({
      percent: {}
    });
  }

  render() {
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

    return (
      <div>
        <Line
          percent={this.state.percent}
          strokeWidth="1"
          strokeColor="#e1ab99"
          trailColor="#fff"
        />
        <button onClick={this.changeProgressState}>Change State</button>
      </div>
    );
  }
}

export default ProgressBar;
