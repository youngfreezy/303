import React, { PureComponent } from "react";
import classNames from "classnames";
export default class Post extends PureComponent {
  render() {
  	const postClasses = classNames({
  		published: this.props.status === "publish"
  	});
    
    return <div className="col">
    	<div dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
    	<div className={postClasses}> 
    		<a href={this.props.link} target="_blank">{this.props.title}</a> 
    	</div> 
    </div>
  }
}

// <div dangerouslySetInnerHTML={{ __html: this.props.content }} />;