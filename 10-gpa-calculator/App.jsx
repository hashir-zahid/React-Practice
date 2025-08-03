import React, { useState } from 'react';
function GPACalculator() {

  const [subjects, setSubjects] = useState([])
  const [subject, setSubject] = useState({ id: '', name: '', marks: '', creditHours: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSubject(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAdd = () =>{
    setSubjects(prev => [...prev, { ...subject, id: Date.now() }])
    setSubject({ id: '', name: '', marks: '', creditHours: '' })
  }

  return (
    <>
      <label htmlFor='name'>Subject</label>
      <input type="text"
        name='name'
        placeholder='Eneter subject'
        value={subject.title}
        onChange={handleChange}
      />

      <label htmlFor='marks'>Marks</label>
      <input type="number"
        name='marks'
        placeholder='Enter marks'
        value={subject.marks}
        onChange={handleChange}
      />

      <label htmlFor='creditHours'>Credit Hours</label>
      <input type="number"
        name='creditHours'
        placeholder='Enter Subject'
        value={subject.creditHours}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Subject</button>


      <div className="display" style={{display:'flex'}}>
        {subjects.map((prev) => (
          <div key={prev.id}>
            <p>{prev.name}</p>
            <p>{prev.marks}</p>
            <p>{prev.creditHours}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GPACalculator;
