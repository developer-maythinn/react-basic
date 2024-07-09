import './App.css';
import EventIssues from './components/Events/EventIssues';
import ModeToggler from './components/Events/ModeToggler';
import Header from './components/Header';
import InputForm from './components/Hooks/InputForm';
import InputwithHook from './components/Hooks/InputwithHook';
import ParentChildRS from './components/Parent-Child-data-flow/ParentChildRS';
import Bag from './components/Props-children/Bag';
import Fruit from './components/Props-children/Fruit';
import logo from './logo.svg';

function Logo(){
  const userImg = <img src={logo} style={{width: "100px", height: "100px"}} />
  return userImg;
}

function App() {
  const result = <h1>Hello Result</h1>;
  const isMobile = true;
  return (
    <div className="App">
      <Header name="Hello React JS" />
      <Bag>Hello 1</Bag>
      <Bag>Hello 2</Bag>
      <Bag children={<h2>Hello 3</h2>} />
      <Bag children={<Fruit name="Apple" />} />
      <Bag children={<>
        <Fruit name="Mango" />
        <Fruit name="Orange" />
        </>} />
      {result}
      <p>{isMobile ? "Mobile view": "Desktop view"}</p>
      <Logo />
      <EventIssues />
      <ModeToggler />
      <ParentChildRS></ParentChildRS>
      <InputwithHook></InputwithHook>
    <InputForm />
    </div>
  );
}

export default App;
