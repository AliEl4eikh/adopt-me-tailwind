import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel flex justify-around items-center h-[400px] mt-2">
        <img
          src={images[active]}
          alt="animal"
          className="max-w-[45%] max-h-[400px]"
        />
        <div className="carousel-smaller w-1/2 max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center ">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              className={`${
                index === active ? "active border-[#333] opacity-60" : ""
              } w-24 h-24 rounded-full inline-block m-4 cursor-pointer border-[2px] border-[#333] max-[600px]:w-[60px] max-[600px]:h-[60px]`}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
