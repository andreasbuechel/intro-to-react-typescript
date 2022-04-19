import React, {useEffect, useState} from "react";
import Banner from "../Banner";
import {fetchAnimals} from "../../utils/mock-api";
import "./App.css";
import {AnimalData} from "../../utils/types";
import AnimalCard from "../AnimalCard";


const App = () => {
  const [animals, setAnimals] = useState([] as AnimalData []);

  useEffect(() => {
    fetchAnimals()
      .then(animals => {
        setAnimals(animals);
        console.log(animals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Banner/>
      <div className="animalWrapper">
        {animals.map(animal => <AnimalCard data={animal} key={animal.id}/>)}
      </div>
    </div>
  );
};

export default App;
