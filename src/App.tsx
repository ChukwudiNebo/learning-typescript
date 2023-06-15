import React from "react";
import "./App.css";
import { Greet } from "./component/Greet";
import Person from "./component/Person";
import PersonList from "./component/PersonList";
import Status from "./component/Status";
import Heading from "./component/Heading";
import Oscar from "./component/Oscar";
import Button from "./component/Button";
import Input from "./component/Input";
import Container from "./component/Container";

const App = () => {
  const personName = {
    first: "Brucely",
    last: "okeke",
  };

  const nameList = [
    { first: "Nene", last: "loye" },
    { first: "love", last: "Anne" },
    { first: "john", last: "ruge" },
  ];

  return (
    <>
      <Greet name="chukwudi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Glow baby</Heading>
      </Oscar>
      <Greet name="volume" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event);
        }}
      />
      <div>
        <Input value="" handleChange={(event) => console.log(event)} />
      </div>
      <div>
        <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      </div>
    </>
  );
};

export default App;
