const API_KEY = "e2b318c8f52698094eec95e15e0c7a7e";


const request = {
  popularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  popularMovie: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `/trending/all/day?api_key=${API_KEY}`,
  categorie :`/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  action:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  romance:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  upcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  netflix:`/discover/tv?api_key=${API_KEY}&with_networks=213`
};

export default request;
