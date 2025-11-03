import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'read books',
  });

  const displayPerson = () => {
    // setPerson({ name: 'John', age: 34, hobby: 'scream at the computer' });
    setPerson({ ...person, name: 'Suzan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys to : {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
