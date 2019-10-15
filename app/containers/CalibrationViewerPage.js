// @flow
import React, { Component } from 'react';
import CalibrationViewer from '../components/CalibrationViewer';

type Props = {};

export default class CalibrationViewerPage extends Component<Props> {
  props: Props;

  render() {
    return <CalibrationViewer socket={this.props.location.socket} logger={this.props.location.logger}/>;
  }
}
