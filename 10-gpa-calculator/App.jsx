import React, { useState } from 'react';

function GPACalculator() {

  const [subjects, setSubjects] = useState([{ name: '', marks: '', creditHours: '' }]);
    const [gpa, setGpa] = useState(null);

  
    const handleInputChange = (index, e) => {
      const { name, value } = e.target;
      const list = [...subjects];
      list[index][name] = value;
      setSubjects(list);
    };

  const handleAddSubject = () =>{
    setSubjects([...subjects, { name: '', marks: '', creditHours: '' }]);
  }

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    subjects.forEach(subject => {
      const marks = parseFloat(subject.marks);
      const creditHours = parseFloat(subject.creditHours);

      if (!isNaN(marks) && !isNaN(creditHours)) {
        let gradePoint;

        if (marks >= 80) gradePoint = 4.0;
        else if (marks == 79) gradePoint = 3.89;
        else if (marks == 78) gradePoint = 3.79;
        else if (marks == 77) gradePoint = 3.69;
        else if (marks == 76) gradePoint = 3.59;
        else if (marks == 75) gradePoint = 3.50;
        else if (marks == 74) gradePoint = 3.39;
        else if (marks == 73) gradePoint = 3.29;
        else if (marks == 72) gradePoint = 3.19;
        else if (marks == 71) gradePoint = 3.09;
        else if (marks == 70) gradePoint = 3.00;
        else if (marks == 69) gradePoint = 2.89;
        else if (marks == 68) gradePoint = 2.79;
        else if (marks == 67) gradePoint = 2.69;
        else if (marks == 66) gradePoint = 2.59;
        else if (marks == 65) gradePoint = 2.50;
        else if (marks == 64) gradePoint = 2.39;
        else if (marks == 63) gradePoint = 2.29;
        else if (marks == 62) gradePoint = 2.19;
        else if (marks == 61) gradePoint = 2.09;
        else if (marks == 60) gradePoint = 2.00;
        else if (marks == 69) gradePoint = 2.89;
        else if (marks == 59) gradePoint = 1.89;
        else if (marks == 58) gradePoint = 1.79;
        else if (marks == 57) gradePoint = 1.69;
        else if (marks == 56) gradePoint = 1.59;
        else if (marks == 55) gradePoint = 1.50;
        else if (marks == 54) gradePoint = 1.39;
        else if (marks == 53) gradePoint = 1.29;
        else if (marks == 52) gradePoint = 1.19;
        else if (marks == 51) gradePoint = 1.09;
        else if (marks == 50) gradePoint = 1.00;
        else gradePoint = 0.0;

        totalGradePoints += gradePoint * creditHours;
        totalCreditHours += creditHours;
      }

      if (totalCreditHours > 0) {
      const calculatedGPA = totalGradePoints / totalCreditHours;
      setGpa(calculatedGPA.toFixed(2));
    }
    else {
      setGpa(null);
      alert('Please enter valid marks and credit hours');
    }
    });
  }
  return (
    <div className="container">
      <h1 className="title">GPA Calculator</h1>

      {subjects.map((subject, index) => (
        <div key={index} className="subject-card">
          <h3 className="subject-title">Subject {index + 1}</h3>

          <div className="form-group">
            <label>Subject Name:</label>
            <input
              type="text"
              name="name"
              value={subject.name}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Enter subject name"
            />
          </div>

          <div className="form-group">
            <label>Marks (0-100):</label>
            <input
              type="number"
              name="marks"
              value={subject.marks}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Enter marks obtained"
            />
          </div>

          <div className="form-group">
            <label>Credit Hours:</label>
            <select
              name="creditHours"
              value={subject.creditHours}
              onChange={(e) => handleInputChange(index, e)}
            >
              <option value="">Select credit hours</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {subjects.length > 1 && (
            <button className="remove-btn" onClick={() => handleRemoveSubject(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <div className="button-group">
        <button className="add-btn" onClick={handleAddSubject}>+ Add Subject</button>
        <button className="calc-btn" onClick={calculateGPA}>Calculate GPA</button>
      </div>

      {gpa !== null && (
        <div className="gpa-result">
          <h2>Your GPA: {gpa}</h2>
          <p>Based on {subjects.length > 1 ? 'subjects' : 'subject'}</p>
        </div>
      )}
    </div>
  );
}

export default GPACalculator;
