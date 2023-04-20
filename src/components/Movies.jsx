import {Movie} from './Movie';
import poro from './pick.png'

function Movies (props){
    const { movies = [] }= props;

    return(
        <div className="movies">
           {movies.length ? (
               movies.map((movie)=> <Movie key={movie.imdbID} {...movie} />)
           ): (
            <div className='notfound'>
               <h4>Not found</h4>
                <div className='pick'>
                    <img src={poro}/>
                </div>
            </div>
           )}
        </div>
   );
}

export {Movies};