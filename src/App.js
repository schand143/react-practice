import React from 'react';
import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HooksCounter from './components/HooksCounter';
// import HooksCounterTwo from './components/HooksCounterTwo';
// import Greet from './components/Greet';
// import Message from './components/Message';.
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import ParentComp from './components/ParentComp';
// import RefDemo from './components/RefDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      {/* <UserGreetings /> */}
      {/* <ClassCounter name='Hero' /> */}
      {/* <HooksCounter /> */}
      {/* <HooksCounterTwo  /> */}
      {/* <Greet name='Chand' /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <LifecycleB /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Iron Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Super Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <ClickCounter name="Chand" />
      <HoverCounter />
    </div>
  );
}

export default App;
