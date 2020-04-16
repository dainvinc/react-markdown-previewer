import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
  render() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      xhtml: true,
      gfm: true,
      breaks: true
    });

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
