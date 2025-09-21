import React, { useState } from 'react';

const rooms = [
  { id: 'C301', name: 'Computer Lab 1', floor: 3, building: 'C-Wing' },
  { id: 'B102', name: 'Physics Lab', floor: 1, building: 'B-Wing' },
  { id: 'A404', name: 'Lecture Hall 5', floor: 4, building: 'A-Wing' },
  { id: 'C305', name: 'AI/ML Lab', floor: 3, building: 'C-Wing' },
];

function ClassroomSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2> Classroom & Lab Search </h2>
      <input
        type="text"
        placeholder="Search by name or ID (e.g., C301)"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '90%', padding: '10px', marginBottom: '20px' }}
      />
      <div>
        {filteredRooms.map(room => (
            <div key={room.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
            <h3>{room.name} ({room.id})</h3>
            <p>Location: {room.building}, {room.floor}rd Floor</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassroomSearch;