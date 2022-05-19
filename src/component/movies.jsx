import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() {
        const {length: count} = this.state.movies;
        if(count === 0) return <p>There is no movies in the database!</p>;

        return (
            <div>
                <p>Showing {count} movies in the database.</p>
                <div className="d-flex">
                    {this.state.movies.map( movie =>
                        <div key={movie._id} className={"card"}  style={{width:'18rem'}}>
                            {/*<img className="card-img-top" src="" alt="Card image cap" />*/}
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.genre.name} </p>
                                <p className="card-text">Daily rental: {movie.dailyRentalRate} Stock: {movie.numberInStock}</p>
                                <button onClick={() => this.handleDelete(movie)} className={"btn btn-danger"}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Movies;
