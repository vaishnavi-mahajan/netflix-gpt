import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addupcomingMovies} from '../utils/movieSlice';

const useUpComingMovies = () => {
 
const dispatch=useDispatch();

const getUpComingMovies=async()=>{ 
 const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
  API_OPTIONS)
 const json=await data.json();
 console.log(json.results);
 dispatch(addupcomingMovies(json.results))
};

useEffect(()=>{
    getUpComingMovies()
},[])
};

export default useUpComingMovies