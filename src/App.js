/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import "./index.css";

const App = () => {
  const theme = useState("");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header className="flex items-center justify-center w-[1100px] my-0 mx-auto p-0 pt-5  max-[1129px]:w-[95%] max-[1129px]:pt-5">
            <Link
              className={`
              inline-block
               bg-[url('http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png')]
                brightness-150 w-[279px] h-[76px] overflow-hidden indent-[-9999px] my-5 mx-0
                text-[#333] text-[3px] no-underline font-bold pb-3
                `}
              to="/"
            ></Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
