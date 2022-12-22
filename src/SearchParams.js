import { useEffect, useState, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div className="w-[1100px] my-0 mx-auto max-[1129px]:w-[95%] max-[945px]:w-[95%]">
      <form
        className="rounded-md bg-[#faeff0] shadow-xsm w-[360px] m-0 mr-6 p-3.5 pt-8 float-left max-[1129px]:mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location" className="block w-16">
          Location
          <input
            className="mb-8 text-lg h-8 w-80 border border-black"
            id="location"
            type="text"
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal" className="block w-16">
          Animal
          <select
            className="mb-8 text-lg h-8 w-80 border border-black"
            key="animal"
            value={animal}
            onChange={(e) => {
              setBreed("");
              setAnimal(e.target.value);
            }}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" className="block w-16">
          Breed
          <select
            disabled={!breeds.length}
            className={`mb-8 text-lg h-8 w-80 border ${
              breeds.length ? "border-black" : ""
            }`}
            key="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme" className="block w-16">
          Theme
          <select
            className="mb-8 text-lg h-8 w-80 border border-black"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option />
            <option value="darkblue">darkblue</option>
            <option value="peru">peru</option>
            <option value="chartreuse">chartreuse</option>
            <option value="mediumorchid">mediumorchid</option>
          </select>
        </label>
        <button
          className="btn hover:bg-[#122622] active:bg-[#5f1d22] focus:border-[1px] focus:border-[cornflowerblue]"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
