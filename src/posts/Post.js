import React, { PureComponent } from "react";
export default class Post extends PureComponent {
  render() {
    // TODO: escape the html
    return <div>
      <div>{this.props.title}</div>
      <div dangerouslySetInnerHTML={{ __html: this.props.content }} />;
    </div>
    
  }
}
