const key = "a44069ccf4250949a19d7bae7fa72fce";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
   requestHorrorTV: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
   requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  requestPopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestLatestTV: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-USpage=2`,
  requestAnimationTv: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=animation&page=1&include_adult=false`,
  requestWar: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=war&politics&page=1&include_adult=false`
  
};
export default requests;

//https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1
