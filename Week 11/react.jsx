const render = () => {
    document.getElementById('mountNode').innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${new Date().toLocaleTimeString()}</pre>
      </div>
    `;
  
    ReactDOM.render(
      React.createElement(
        'div',
        null,
        'Hello React',
        React.createElement('input', null),
        React.createElement('pre', null, new Date().toLocaleTimeString())
      ),
      document.getElementById('mountNode2')
    );
  };
  
  // function Button (props) {
  //   // Returns a DOM/React element here. For example:
  //   return <button type="submit">{props.label}</button>;
  // }
  
  // // To render a Button element in the browser
  // ReactDOM.render(<Button label="Save" />, mountNode);
  
  const ErrorDisplay = ({ message }) => (
    <div style={ { color:'red', backgroundColor:'yellow' } }>
      {message}
    </div>
  );
  
  ReactDOM.render(
    <ErrorDisplay
      message="These aren't the droids you're looking for"
    />,
    mountNode
  );
  
  
  class ConditionalStyle extends React.Component {
    render() {
      return (
        <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
          How do you like this?
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <ConditionalStyle />,
    mountNode,
  );
  
  const ClickableImage = ({ href, src }) => {
   return (
     <a href={href}>
       <img src={src} />
     </a>
   );
  };
  
  const SearchEngines = () => {
    return (
      <div className="search-engines">
        <ClickableImage href="http://google.com" src="google.png" />
        <ClickableImage href="http://bing.com" src="bing.png" />
      </div>
    );
  };
  
  const Button = ({ clickValue, clickAction }) => {
    return (
      <button onClick={() => clickAction(clickValue)}>
        +{clickValue}
      </button>
    );
  };
  
  const Display = ({ content }) => (
    <pre>{content}</pre>
  );
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = (increment) =>
      setCount(count + increment);
  
    return (
      <div>
        <Button clickAction={incrementCounter} clickValue={1} />
        <Button clickAction={incrementCounter} clickValue={5} />
        <Button clickAction={incrementCounter} clickValue={10} />
        <Display content={count} />
      </div>
    );
  }
  
  
  ReactDOM.render(<CountManager />, mountNode);
  
  const CharacterCounter = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) => {
      const element = event.target;
      setInputValue(element.value);
    };
    
    return (
      <div>
        <textarea cols={80} rows={10} value={inputValue} onChange={handleChange} />
        <div>Count: {inputValue.length}</div>
      </div>
    );
  };
  
  ReactDOM.render(<CharacterCounter />, mountNode);