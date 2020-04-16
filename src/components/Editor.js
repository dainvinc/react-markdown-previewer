import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <textarea 
        id="editor" 
        onChange={this.props.onChange} 
        value={this.props.editorContent} 
      />
    );
  }
}

export default Editor;
