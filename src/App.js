import React, { useState, useEffect} from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Paginiation from './components/Pagination/Paginiation';
function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, setFetchedData] = useState([])
  let {info, results} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() =>{
      (async function(){
          let data = await fetch(api)
          .then(res=>res.json())
          setFetchedData(data)
      })()
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center helvetica my-4">
        Rick and Morty <span className="text-primary">wiki</span>
      </h1>

      <div className="container">
        <div className="row"> 
          <Filters />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Paginiation pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
