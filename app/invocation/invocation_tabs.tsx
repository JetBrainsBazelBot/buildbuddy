import React from "react";

interface Props {
  hash: string;
}

export default class InvocationTabsComponent extends React.Component {
  props: Props;

  render() {
    return (
      <div className="tabs">
        <a href="#" className={`tab ${this.props.hash == "" && "selected"}`}>
          ALL
        </a>
        <a href="#log" className={`tab ${this.props.hash == "#log" && "selected"}`}>
          LOGS
        </a>
        <a href="#targets" className={`tab ${this.props.hash == "#targets" && "selected"}`}>
          TARGETS
        </a>
        <a href="#details" className={`tab ${this.props.hash == "#details" && "selected"}`}>
          DETAILS
        </a>
        <a href="#artifacts" className={`tab ${this.props.hash == "#artifacts" && "selected"}`}>
          ARTIFACTS
        </a>
        <a href="#timing" className={`tab ${this.props.hash == "#timing" && "selected"}`}>
          TIMING
        </a>
        <a href="#cache" className={`tab ${this.props.hash == "#cache" && "selected"}`}>
          CACHE
        </a>
        <a href="#raw" className={`tab ${this.props.hash == "#raw" && "selected"}`}>
          RAW
        </a>
      </div>
    );
  }
}
