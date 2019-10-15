// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import { withStyles } from '@material-ui/core/styles';
import {FaArrowLeft } from 'react-icons/fa';

import {PythonShell} from 'python-shell';

const styles = {

};


let pyshell;


class CalibrationViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        scriptPath: process.cwd() + '/app/components/',
        pythonOptions: ['-u'], // get print results in real-time
        args: [
          '-a', this.props.socket.json.io.engine.hostname ,
          '-n', 'file_name',
          '-t', 'name_after_fit',
          '-p', 'od_135']
      }
    };
  }

  handleButton = () => {

    pyshell = new PythonShell('hello.py', this.state.options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });

    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
    });
  }

  handleStop = () => {
    pyshell.terminate()
    this.setState({scriptStarted: false})
  }


  render() {


    let runExptBtns;
    if (!this.state.scriptStarted) {
      runExptBtns = <button type="button" className="scriptSubmitBtn" onClick={this.handleButton}> Run Code </button>
    }
    else {
      runExptBtns = <button type="button" className="scriptSubmitBtn" onClick={this.handleStop}> Stop Code </button>

    }

    return (
      <div>
        <Link className="backHomeBtn" id="experiments" to={{pathname:routes.CALMENU, socket:this.props.socket, logger:this.props.logger}}><FaArrowLeft/></Link>
        {runExptBtns}
      </div>

    );
  }
}

export default withStyles(styles)(CalibrationViewer);
