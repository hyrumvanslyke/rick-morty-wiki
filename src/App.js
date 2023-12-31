import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Paginiation from "./components/Pagination/Paginiation";
import './App.css'
function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [search, setSearch] = useState('')
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center helvetica my-4">
        Rick and Morty <span className="text-primary">wiki</span>
      </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          <Filters />
          <div className="">
            <div className="card-container">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Paginiation info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
