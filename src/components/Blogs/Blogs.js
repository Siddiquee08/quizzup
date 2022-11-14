import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is the purpose of react router?
        </Accordion.Header>
        <Accordion.Body>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> How does context API work?</Accordion.Header>
        <Accordion.Body>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux. React.createContext() is all you need.
          It returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          What is useRef and how does it work?
        </Accordion.Header>
        <Accordion.Body>
          The useRef hook is the new addition in React 16.8. Before proceeding
          to this article there is a prerequisite to know about the ref in
          react. The useRef is a hook that allows to directly create a reference
          to the DOM element in the functional component.The useRef returns a
          mutable ref object. This object has a property called .current. The
          value is persisted in the refContainer.current property. These values
          are accessed from the current property of the returned object. The
          .current property could be initialised to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          How react hooks work under the hood?
        </Accordion.Header>
        <Accordion.Body>
          React hooks rely on a stable call order on every render of the same
          component. This works well in practice because you have to follow the
          rule (“only call Hooks at the top level”), and thus hooks will always
          be called in the same order. Additionally, a linter plugin catches
          most mistakes. Well, this means that the order in which you call
          useState and define state variables, React internally takes care of
          that order only, maintaining an array of state pair . It also
          maintains the current pair index, which is set to 0 before rendering.
          Each time you call useState, React gives you the next state pair and
          increments the index.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
