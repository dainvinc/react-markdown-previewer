import React from 'react';
import PanelGroup from 'react-panelgroup';
import './assets/css/index.scss';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: '# hello world!'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      editorText: e.target.value
    });
  }

  render() {
    return (
      <PanelGroup
        borderColor='grey'
        spacing={3}>
          <Editor editorContent={this.state.editorText} onChange={this.handleChange} />
          <Preview previewText={this.state.editorText} />
      </PanelGroup>
    );
  }
}

export default App;
