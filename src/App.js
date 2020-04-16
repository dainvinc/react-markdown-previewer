import React from 'react';
import { connect } from 'react-redux';
import PanelGroup from 'react-panelgroup';
import './assets/css/index.scss';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { markdownText } from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.markdownText(e.target.value);
  }

  render() {
    return (
      <PanelGroup
        borderColor='grey'
        spacing={3}>
          <Editor editorContent={this.props.editorText} onChange={this.handleChange} />
          <Preview previewText={this.props.editorText} />
      </PanelGroup>
    );
  }
}

const MapStateToProps = state => {
  return {
    editorText: state.editorText
  }
}

export default connect(MapStateToProps, { markdownText })(App);
