import React, { useState, useMemo } from 'react';
import './App.css'

const users = [
  { id: 1, name: 'Hashir' },
  { id: 2, name: 'Laraib' },
  { id: 3, name: 'Suban' },
  { id: 4, name: 'Ali' },
  { id: 5, name: 'Haider' },
  { id: 6, name: 'Noman' },
  { id: 7, name: 'Faizan' },
  { id: 8, name: 'Arman' },
  { id: 9, name: 'Zohan' },
  { id: 10, name: 'Ahmed' },
  { id: 11, name: 'Farhan' },
  { id: 12, name: 'Shafay' },
  { id: 13, name: 'Zakir' },
  { id: 14, name: 'Fakhir' },
  { id: 15, name: 'Shakir' },
];

function FilterUserList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); 

  return (
    <div className='container'>
      <h2>Search Users</h2>
      <input className={searchTerm ? 'inp1' : 'inp2'} type="text" placeholder="Enter name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

      <ul className='display'>
        {filteredUsers.map(user => (
          <li className={searchTerm ? 'item1' : 'item2'} key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterUserList;
