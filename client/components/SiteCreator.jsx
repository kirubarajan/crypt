import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SiteCreator extends React.Component {

  onCreate(event) {
    event.preventDefault();
    const website = this.refs.website.value;
    this.refs.website.value = "";
    this.props.onCreate(website);
  }

  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <form onSubmit={this.onCreate.bind(this)}>
            <input
              type="text"
              placeholder="Website Name"
              ref="website" />
          <button><p>Create</p></button>
        </form>

      </div>
    );
  }
}

export default SiteCreator;
