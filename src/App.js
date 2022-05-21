import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from "./component/navbar";
import Movie from "./component/movie";
import './App.css';

class App extends Component {
    render() {
      return (
          <main className="container">
              <Navbar />
            {/*<Movie />*/}
          </main>
      );
    }
}

export default App;
