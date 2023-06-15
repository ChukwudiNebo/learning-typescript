import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <>
      <div>
        {props.names.map((name) => {
          return (
            <div key={name.first}>
              <p>{name.first}</p>
              <p>
                <h1>{name.last}</h1>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PersonList;
