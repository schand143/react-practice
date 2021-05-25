import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorData: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts1')
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorData: 'Retry later',
        });
      });
  }

  render() {
    const { posts, errorData } = this.state;
    return (
      <div>
        List of Post
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorData ? <div> {errorData} </div> : null}
      </div>
    );
  }
}

export default PostList;
