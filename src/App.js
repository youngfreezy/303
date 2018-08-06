import React, { PureComponent } from "react";
import "./App.css";
import Post from "./posts/Post";
//use pure component for shallow comparisons instead of manually using shouldComponentUpdate
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch(`https://thewirecutter.com/wp-json/wp/v2/posts`)
      .then(res => res.json())
      .then(posts => {
        console.log(posts);
        this.setState({
          posts
        });
      })
      .catch(err => console.log("the error fetching posts: ", err));
  }
  render() {
    return (
      <div className="flex-grid-fifths">
        {this.state.posts.map(post => {
          return (
            <Post
              key={post.id}
              title={post.title.rendered}
              content={post.content.rendered}
              link={post.link}
              status={post.status}
              excerpt={post.excerpt.rendered}
            />
          );
        })}{" "}
      </div>
    );
  }
}

export default App;
