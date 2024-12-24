import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../apis/MovieApi';
import { API_KEY } from '../../apis/MovieApiKey';


export const fetchApiAsync = createAsyncThunk(
  'movies/fetchApiAsync',
  async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`);
    return response.data;
  }
);


export const fetchApiAsyncShows = createAsyncThunk(
  'shows/fetchApiAsyncShows',
  async () => {
    const seriesText = 'Friends'
    const response = await movieApi.get(`?apiKey=${API_KEY}&s=${seriesText}&type=series`);
    return response.data;
    
  }
);

export const fetchApiAsyncMovieOrShowDetail = createAsyncThunk(
  'shows/fetchApiAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
    console.log(response.data)
    return response.data;
    
   
  }
);

const initialState = {
  movies: { Response: 'False', Search: [] },
  shows: { Response: 'False', Search: [] },
  selectedMovieOrShow : {Response: 'False',Search:[]},
  status: 'idle',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state)=>{
        state.selectedMovieOrShow = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiAsync.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.movies = payload;
      })
      .addCase(fetchApiAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchApiAsyncShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiAsyncShows.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.shows = payload;
      })
      .addCase(fetchApiAsyncShows.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchApiAsyncMovieOrShowDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.selectedMovieOrShow = payload;
      })
      .addCase(fetchApiAsyncMovieOrShowDetail.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMoviesStatus = (state) => state.movies.status;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow

export default movieSlice.reducer;
