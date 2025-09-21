import React from 'react';

const todaySchedule = [
  { time: '09:00 - 10:00', subject: 'Data Structures', room: 'A404' },
  { time: '10:00 - 11:00', subject: 'Database Systems', room: 'C301' },
  { time: '11:15 - 12:15', subject: 'Operating Systems', room: 'A404' },
  { time: '01:15 - 03:15', subject: 'AI/ML Lab Session', room: 'C305' },
];

function Timetable() {
  return (
    <div>
      <h2>Today's Timetable (Computer Science - Year 3)</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Subject</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {todaySchedule.map(item => (
            <tr key={item.time}>
              <td>{item.time}</td>
              <td>{item.subject}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Timetable;