// creating element - core thing of react
           // const heading = React.createElement("h1", {id: "heading", pass: 1234}, "Hello World From React", [30, 40, 50, 70, 100]);
           // console.log(heading); // object
           // const root = ReactDOM.createRoot(document.getElementById("root"));
           // root.render(heading); // to render show it in div root
            // {pass: 1234} - object is the place where we gave attributes to our tag

            // ReactElement(object) => HTML(Browser Understands)
            // React.createElement API takes three things: tag, attribute and children
            const parent = React.createElement(
                "div",
                {id: "parent"},
                React.createElement(
                    "div",
                    {id: "child"},[
                    React.createElement( "h1", {}, "Hello I'm h1 tag how're you"),
                    React.createElement("h2", {}, "I'm an h2 tag"),
                ]),
                React.createElement(
                    "div",
                    {id: "child2"}, [
                        React.createElement("h3", {}, "Hello I'm h3 tag how're you"),
                        React.createElement("h4", {}, "Hello I'm h4 tag how're you- it's interesting to learn react"),
                    ]),
            );

            console.log(parent); // object
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(parent);