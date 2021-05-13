import React from "react";
import Board from "./Board";
import Navigation from "./Navigation";
import Result from "./Result";

const planetList = [
  "mars",
  "earth",
  "mercury",
  "pluto",
  "saturn",
  "uranus",
  "venus",
  "jupiter",
  "neptune",
];

const NASA_URL = "https://images-api.nasa.gov/search?q=";

function SelectPlanet(props) {
  return (
    <div>
      <label>{"Select Planet " + props.planetNumber}</label>
      <select>
        {planetList.map((planet) => (
          <option value={planet} name={planet} key={planet}>
            {planet}
          </option>
        ))}
      </select>
    </div>
  );
}

function Game(props) {
  const [result, setResult] = React.useState("");
  const [planets, setPlanets] = React.useState([]);
  const [planetsImages, setPlanetsImages]= React.useState([]);

  function setUpGame(event) {
    event.preventDefault();
    const temporaryPlanets = [];
    event.target.querySelectorAll("option").forEach((element) => {
      if (element.selected) {
        temporaryPlanets.push(element.value);
      }
    });

    setPlanets([...temporaryPlanets]);
  }

  React.useEffect(() => {

    if (planets.length === 0) return

    const promise1 = fetch(NASA_URL + planets[0]).then(value=>value.json());
    const promise2 = fetch(NASA_URL + planets[1]).then(value=>value.json());
    const promise3 = fetch(NASA_URL + planets[2]).then(value=>value.json());

    Promise.all([promise1, promise2, promise3])
    .then(values => {
      const temporaryPlanetsImages = [];

     values.forEach((value) =>{

     const random = Math.floor(Math.random()  * value.collection.items.length)
       temporaryPlanetsImages.push(value.collection.items[random].links[0].href); 
      })
      setPlanetsImages([...temporaryPlanetsImages])
      ;
      
    })        

  }, [planets]);

  return (
    <div className="game stack-large">
      <Navigation setPage={props.setPage} profile={props.profile} />
      <h1>Game {props.profile}</h1>
      <form className="stack-small " id="gameForm" onSubmit={setUpGame}>
        <SelectPlanet key="1" setPlanets={setPlanets} planetNumber="1" />
        <SelectPlanet key="2" setPlanets={setPlanets} planetNumber="2" />
        <SelectPlanet key="3" setPlanets={setPlanets} planetNumber="3" />
        <input type="submit" value="Select Planets" />
      </form>
      <div div className="imageSelection flex-row">
        {planetsImages[0] ? <img src={planetsImages[0]} alt="selected image 1"  /> : ""}
        {planetsImages[1]  ? <img src={planetsImages[1]} alt="selected image 2"  /> : ""}
        {planetsImages[2]   ? <img src={planetsImages[2]} alt="selected image 3"  /> : ""}
      </div>
      <Board planets={planetsImages}/>
      <Result result={result} />
    </div>
  );
}

export default Game;
