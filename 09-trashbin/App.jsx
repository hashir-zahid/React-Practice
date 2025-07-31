import React, { useState, useCallback } from 'react';
import './App.css';

const TrashBin = () => {
  const [files, setFiles] = useState(['program.txt', 'hashir.jpg', 'notes.docx', 'study.txt', 'picture.png', 'University.pdf']);
  const [deleted, setDeleted] = useState([]);

  const handleDelete = useCallback((name) => {
    setFiles(prev => prev.filter(f => f !== name));
    setDeleted(prev => [...prev, `${name} screamed in horror 😱`]);
  }, []);

  return (
    <div className="trash-container">
      <h3>Click a file to move it to the trash</h3>
      {files.map(file => (
        <div
          key={file}
          className="file-item"
          onClick={() => handleDelete(file)}
        >
          📄 {file}
        </div>
      ))}
      
      <div className="trash-section">
        <h4>Trash Bin:</h4>
        {deleted.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default TrashBin;
