import { useState } from 'react';
import './App.css'
import Search from './components/Search'
import axios from 'axios'
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {},
  });

  const apiUrl = 'http://www.omdbapi.com/?apikey=f3ef19f4';

  const handleInput = (e) => {
    let search = e.target.value;

    setState(prevState => {
      return {...prevState, search: search};
    });
  }

  const search = (e) => {
    if(e.key === 'Enter'){
      axios(`${apiUrl}&s=` + state.search)
      .then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results };
        });
      });
    }
  }

  const openPopup = (id) => {
    console.log('Imdb Id:', id);
    axios(`${apiUrl}&i=${id}`)
      .then(({ data }) => {
        let result = data;

        setState(prevState => {
          return { ...prevState, selected: result };
        });
      });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  }

  return (
    <div className='app'>
      <header>
        <h1>Movie Search</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>

        {
          (typeof state.selected.Title != 'undefined') 
          ? <Popup selected={state.selected} closePopup={closePopup}/> 
          : null
        }

      </main>
    </div>
  )
}

export default App
