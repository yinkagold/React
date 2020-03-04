import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    const posts = [...this.state.posts];
    const index = posts.indexOf(posts);
    posts[index] = { ...post };
    await axios.put(apiEndpoint + "/" + post.id, post);
    console.log(posts);
    // axios.patch(apiEndpoint + '/' + post.id, { title: post.title });
  };

  handleDelete = async post => {
    // this is called when the call to server fails
    const originalPosts = this.state.posts;
    //Here we update the UI first
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    // then call the server
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      throw new Error("");
    } catch (ex) {
      alert("something failed while deleting");
      this.setState({ posts: originalPosts });
    }
    console.log(posts);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
