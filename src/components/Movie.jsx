function Movie (props){
    const{
        "Title": title,
        "Year": year,
        "imdbID": id,
        "Type": type,
        "Poster": poster
    } = props;

    return <div  id ={"id"} className="movie card">
    <div className="card-image waves-effect waves-block waves-light">

    {
             poster === 'N/A' ? (
                <img 
                    className="activator" 
                    src={ `https://via.placeholder.com/300x400?text=${title}` } 
                />
           ):
             <img className="activator" src={poster}/>
            }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right"></i></span>
      <p>{year} <span className="right">{type}</span></p>
    </div>

    <div className="card-reveal">
      <span className="card-title  grey-text text-darken-4">{title}<i className="material-icons right">X</i></span>
      <h4>About film</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta possimus non architecto saepe ipsum similique expedita dolor corrupti? Quisquam porro vel nesciunt libero perferendis velit, dolorem soluta quod dolore laboriosam?</p>
    </div>
  </div>
  

}

export {Movie};