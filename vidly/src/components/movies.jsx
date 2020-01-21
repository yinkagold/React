import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    count: 0,
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies }); // this overwrights the state object
  };
  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no more movies in the database.</p>;
    return (
      <React.Fragment>
        <p>Showing {count}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
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

export default Movie;
