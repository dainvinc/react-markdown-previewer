import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
  render() {
    const markedownString = marked(this.props.previewText);
    return (
      <div
        id="preview" 
        dangerouslySetInnerHTML={{ __html: markedownString }} 
      />
    );
  }
}

export default Preview;
