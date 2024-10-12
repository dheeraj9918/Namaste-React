const heading = React.createElement("div", {
    id: "root",
    class: "hello"
}, React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child" }, "this is the first program of react!"),
    React.createElement("h1", { id: "child" }, "this is the first program of react!"),
    React.createElement("h1", { id: "child" }, "this is the first program of react!"),
]
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);