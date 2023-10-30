import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addupcomingMovies} from '../utils/movieSlice';

const useUpComingMovies = () => {
const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies);

const dispatch=useDispatch();

const getUpComingMovies=async()=>{ 
 const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
  API_OPTIONS)
 const json=await data.json();
 dispatch(addupcomingMovies(json.results))
};

useEffect(()=>{
    !upcomingMovies && getUpComingMovies()
},[])
};

export default useUpComingMovies