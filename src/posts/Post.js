import React, { PureComponent } from "react";
import classNames from "classnames";
export default class Post extends PureComponent {
  render() {
  	const postClasses = classNames("post", {
  		published: this.props.status === "publish"
  	});
    
    return <div className="col">
    	<div className={postClasses} dangerouslySetInnerHTML={{ __html: this.props.excerpt }}></div>
    	<div > 
    		<a href={this.props.link} target="_blank">{this.props.title}</a> 
    	</div> 
    </div>
  }
}

// <div dangerouslySetInnerHTML={{ __html: this.props.content }} />;