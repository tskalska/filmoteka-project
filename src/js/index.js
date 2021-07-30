import 'basiclightbox/dist/basicLightbox.min.css';
import '../sass/main.scss';
import * as footerModal from './components/footer-modal';
import { pageState } from './components/pageState';
import { initSearch } from './components/search';
import { renderTopMovies } from './components/rendering-top-movies';
import { handleFetch, showModal } from './components/modal-movie';
import * as localDB from './components/localDB';
import './components/to-top-btn';
//example of using api functions
import * as moviesDBApi from './api/moviesdb-api';
// moviesDBApi.getTrendingMovies().then(console.log);
// moviesDBApi.getMoviesByQuery('cat', 2).then(console.log);
moviesDBApi.getMovieById(400).then(console.log);

import { makeMoviesArrayForRendering, renderGallery } from './components/rendering-movies';

footerModal.createFooterModal();
initSearch();
renderTopMovies();
// example of using makeMoviesArrayForRendering, renderGallery functions
// moviesDBApi.getTrendingMovies().then(makeMoviesArrayForRendering).then(arr => renderGallery(arr, filmList));
handleFetch();
showModal();

// example of using localStorage
// import * as localDB from './components/localDB';
// localDB.addItemToWatched(MovieObj);
