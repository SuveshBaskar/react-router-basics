import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    let postList;
    if (this.state.posts.length > 0) {
      postList = this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      });
    } else {
      postList = <p>No Posts Available</p>;
    }

    return <div className="container">{postList}</div>;
  }
}

export default Home;
