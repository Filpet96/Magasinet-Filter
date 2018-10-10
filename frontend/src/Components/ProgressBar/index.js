import React from "react";
import { Line } from "rc-progress";

class ProgressBar extends React.Component {
  constructor() {
    super();

    this.state = {
      percent: 0
    };

    this.percentScrolled = this.percentScrolled.bind(this)
  }

  componentDidMount() {
   window.addEventListener(
     "scroll",
      this.percentScrolled,
      false
   );
 }

  getDocHeight = () =>  {
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

  percentScrolled = () => {
    const winHeight =
      window.innerHeight ||
      (document.documentElement || document.body).clientHeight;
    const docHeight = this.getDocHeight();
    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.round((scrollTop / trackLength) * 100);

    this.setState({
      percent: pctScrolled
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
      </div>
    );
  }
}

export default ProgressBar;
