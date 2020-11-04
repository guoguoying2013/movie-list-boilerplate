import React from 'react';
import MoviesList from './MoviesList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx';


const exampleMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Ex Mean Boys'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies
    }
    this.search = this.search.bind(this);
    this.add = this.add.bind(this);
  }

  search (movie) {
    //why everything got reset?
    //After a user submits the search, display all matches (or partial matches) to that title.
    let movieTitle = movie.title;
    let movies = this.state.movies;
    let notFound = 'Movie title not found'
    let found = [];
    movies.map(mov => {
      let names = mov.title.split(' ');
      console.log('names arr: ', names);
      if (names.indexOf(movieTitle) > -1) {
        found.push(mov);
      }})
      if (found.length === 0) {
        this.setState({
        movies: [{title: notFound}],
        })
      } else {
        //display search resault
        console.log(found);
        this.setState({
        movies: found,
      })
    };
  }

  add (movie) {
    var oldMovies = this.state.movies;
    var newMovies = [movie, ...oldMovies];
    console.log('in add func, newMovies: ', newMovies);
    this.setState({
      movies: newMovies,
    })
    console.log('current state: ', this.state);
  }

  render () {
    return (
      <div id='frame'>
        <h3>Movie List</h3>
        <div id='addMovie'>
          <AddMovie add={this.add}/>
        </div>
        <div id='searchBar'>
          <SearchMovie search={this.search}/>
        </div>
        <div id='movieslist'>
          <MoviesList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;