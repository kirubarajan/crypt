import React from 'react';

import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

const App = React.createClass({
  getInitialState() {
    return {value: '', copied: false};
  },

  render() {
    return (
      <div>
        <input className="copy-input" value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />&nbsp;

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className="copy-button">Copy to clipboard</button>
        </CopyToClipboard>&nbsp;

        {this.state.copied ? <span>Copied</span> : null}
      </div>
    );
  }
});

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);


class SiteTile extends React.Component {
  render() {
    return (
      <div className="col col-sm-6 site-tile">
        <h1>{this.props.name}</h1>
        {/* <p>{this.props.url}</p> */}
        {/* on click, edit modal needs to pop up */}
        {/* <button>edit</button>
        <button onClick={this.props.onDelete}>delete</button> */}
      </div>
    );
  }
}

export default SiteTile;
