import Pet from "./Pet";

const Results = (props) => {
  const { pets } = props;
  return (
    <div className="rounded-md bg-[#faeff0] shadow-xsm w-[715px] p-3.5 float-left mb-6 max-[1129px]:w-[55%] max-[1129px]:p-4 max-[1129px]:rounded-lg max-[945px]:w-full">
      {!pets.length ? (
        <h2 className="font-bold">No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
            id={pet.id}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
