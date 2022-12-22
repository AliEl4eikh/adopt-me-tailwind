/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, location, images, id } = props;

  let hero = images[0];

  return (
    <Link
      to={`/details/${id}`}
      className="w-full h-32 block overflow-hidden my-6 mx-0 border-b-2 border-[#333] max-[600px]:h-[200px]"
    >
      <div className="clip-path-circle-[50%] w-24 h-24 float-left my-0 mr-5 ml-2 max-[600px]:float-none max-[600px]:my-0 max-[600px]:mx-auto">
        <img src={hero} alt="animal" className="w-24 min-h-[100px]" />
      </div>
      <div className="float-left w-3/4 h-24 pt-2 max-[1129px]:w-[65%] max-[600px]:w-full max-[600px]:text-center">
        <h1 className="whitespace-nowrap font-normal text-xl m-0 text-ellipsis max-[1129px]:w-full max-[1129px]:overflow-hidden">
          {name}
        </h1>
        <h2 className="whitespace-nowrap font-bold text-xl m-0 text-ellipsis">
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;

// "http://pets-images.dev-apis.com/pets/none.jpg"
