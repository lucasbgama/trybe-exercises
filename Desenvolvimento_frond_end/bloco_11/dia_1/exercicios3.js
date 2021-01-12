//https://www.freecodecamp.org/learn/front-end-libraries/react/

//1 - Create a simple JSX Element

const JSX = <h1>Hello JSX!</h1>;

//2 - Create a complex JSX Element

const JSX = (
    <div>
        <h1> H1 </h1>
        <p> Paragraph </p>
        <ul>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
        </ul>
    </div>
)

//3 - Add Comments in JSX

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    {/* This is a comment */}
    <p>Here's a subtitle</p> 
  </div>
);

//4 - Render HTML Elements to the DOM

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
const root = document.getElementById('challenge-node');
ReactDOM.render(JSX, root);

//5 - Define an HTML Class in JSX

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

//6 - Learn About Self-Closing JSX Tags

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br/>
    <p>Be sure to close all tags!</p>
    <hr/>
  </div>
);

//7 - Create a Stateless Functional Component

const MyComponent = function() {
  return <div> Text </div>
}

//8 - Create a React Component

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};

//9 - Create a Component with Composition

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
