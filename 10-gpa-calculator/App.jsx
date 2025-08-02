import React, { useState } from 'react';

function GPACalculator() {

  const[marks,setMarks] = useState('')

  return (
    <>
      <label htmlFor='subject'>Subject</label>
      <input type="text"
        name='subject'
        placeholder='Enetr Subject'
      />

      <label htmlFor='marks'>Marks</label>
      <input type="text"
        name='marks'
        placeholder='Enetr Subject'
        onChange={(e)=>{
          setMarks(e.target.value)
          console.log(e.target.value)
        }}
      />

      <label htmlFor='gpa'>GPA</label>
      <input type="text"
        name='gpa'
        placeholder='Enetr Subject'
      />
    </>
  );
}

export default GPACalculator;
