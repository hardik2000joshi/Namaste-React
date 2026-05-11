import React from "react";
import ReactDOM from "react-dom/client";
// creating element - core thing of react

const transactions = 10 * 8;
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to React - Library of javascript",
);
console.log(heading);

// JSX( before it reaches the js) - to run jsx - job of parcel
// JSX => babel transpiled and converted into React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
  <div>
    <h4>Welcome to react using Parcel - library of javascript</h4>
    <p>
      JSX is JavaScript XML it looks html like code but not html. JSX transpiled
      into React.createElement which babel does for us.
    </p>
    <h1>
      React and ReactDOM - dev dependency while parcel covered into dependency
    </h1>
  </div>
);

// React Component - reusuable building blocks of a web application
// Class Based Component - Old
// Functional Component - New
console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const abc = 5 * 2;
const def = 25000;
const Component1 = () => {
  return (
    <p>
      Components are reusuable building blocks of web application so that we can
      reuse same component in application again and again
    </p>
  );
};

console.log(Component1);

// functional component
const Product = () => {
  return <h5>React Framework is NextJS</h5>;
};

/*const ComtAbc = () => {
                <h1>Functional Component</h1> // it will not print because we not return anything only function we write with curly brackets
            }*/

const ComtAbc = () => {
  return <h1>Functional Component</h1>;
};
console.log(ComtAbc);

const Com3 = () => <h2>Class Component</h2>;
console.log(Com3);

const iceCream = <h1>Happy to learn react with some Ice-Creams</h1>;

// Component Composition - putting one component into another component
const Com4 = () => (
  <div>
    <Component1 />{" "}
    {/* Injecting one function into another function - injecting one component into another component */}
    <ComtAbc></ComtAbc>{" "}
    {/* we can inject functional component like this also <></> */}
    {ComtAbc()} {/* we can call like javascript function call also in jsx */}
    <ComtAbc />
    {abc}
    <h1>{def}</h1>
    <p>
      {console.log("Happy to learn react")} {/* Injected javascript into jsx */}
    </p>
    <h1>Components</h1>
    <p>Resusable building blocks of a web application</p>
    <h4>Functional Component</h4>
    <h3>Class Component</h3>
    <p>Functional Component used more than Class Component</p>
    {jsxHeading} {/* injecting react element into jsx function */}
    {iceCream} {/* injecting react element into jsx function */}
  </div>
);
console.log(Com4);

const Com5 = () => {
  return (
    <p>Javascript is client side scripting language allows DOM manipulation</p>
  );
};
console.log(Com5);

const Com6 = () => (
  <div>
    <Com5 />{" "}
    {/* first method of Component Composition - putting one component into another component- functional component */}
    <Com5></Com5>{" "}
    {/* Second method of Component Composition - putting one component into another component- functional component */}
    {Com5()}{" "}
    {/* Third method of Component Composition - putting one component into another component- functional component */}
    <h1>
      JSX is very powerful it not simply run the data JSX first sanitize and
      then run the data
    </h1>
    <p>
      parcel package is very powerful not only react maintains effeciency its
      done due to node_modules along with react, parcel and JSX
    </p>
    {transactions}
    <Product />
    {heading}
    <h2>Making Components with having IceCream</h2>
    <h1>{console.log(15 * 5)}</h1>
    <p>{console.log("console.log prints data on console window")}</p>
    <div>node_modules heart and saviour of coding</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Com6 />); // when we call function we not render directly instead to call function we use: < />

// {pass: 1234} - object is the place where we gave attributes to our tag
// ReactElement(object) => HTML(Browser Understands)
// React.createElement API takes three things: tag, attribute and children
