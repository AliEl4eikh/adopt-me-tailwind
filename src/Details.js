/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { Component } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  render() {
    if (this.state.loading) {
      return (
        <ThemeContext.Consumer>
          {([theme]) => (
            <div
              className="w-80 h-80 flex bg-[#ad343e] justify-center items-center shadow-[4px_4px_20px_rgba(0,0,0,0.3)] m-auto"
              style={{ backgroundColor: theme }}
            >
              <div className="container h-4 w-28 flex relative">
                <span className="circle absolute top-0 left-0 animate-grow"></span>
                <span className="circle animate-loading"></span>
                <span className="circle animate-loading"></span>
                <span className="circle absolute top-0 right-0 mr-0 animate-grow"></span>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      );
    }

    const { animal, name, breed, description, images, city, state, showModal } =
      this.state;

    return (
      <div className="details w-[1100px] my-0 mx-auto p-3.5 mb-6 rounded-md bg-[#faeff0] shadow-xsm max-[1129px]:w-[95%] max-[1129px]:rounded-lg ">
        <Carousel images={images} />

        <h1 className="text-center text-[#333] text-[40px] my-1 mx-0">
          {name}
        </h1>
        <h2 className="text-center mx-0 mt-1 mb-5">{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              className="btn"
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p className="leading-normal py-1 px-4 mt-2">{description}</p>
        {showModal ? (
          <Modal>
            <div className="bg-[#faeff0] max-w-[500px] p-4 text-center rounded-3xl ">
              <h1 className="text-[40px] font-bold">
                Would you like to adopt {name}?
              </h1>
              <ThemeContext.Consumer>
                {([theme]) => (
                  <div className="buttons bg-[#faeff0] max-w-[500px] p-4 text-center rounded-[30px]">
                    <button
                      className="btn inline-block mr-4"
                      style={{ backgroundColor: theme }}
                      onClick={this.adopt}
                    >
                      Yes
                    </button>
                    <button
                      className={`btn inline-block mr-4 `}
                      style={{ backgroundColor: theme }}
                      onClick={this.toggleModal}
                    >
                      NO
                    </button>
                  </div>
                )}
              </ThemeContext.Consumer>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
