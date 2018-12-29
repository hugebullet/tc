import React, { PureComponent } from 'react';

export default class Table extends PureComponent {
  render() {
    return <pre>{JSON.stringify(this.props.data, null, 2)}</pre>;
  }
};
