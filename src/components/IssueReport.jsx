import React, { useState } from 'react';
import { db } from '../firebase'; // Import the db instance
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function IssueReport() {
  const [room, setRoom] = useState('');
  const [issue, setIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!room || !issue) return;

    try {
      // 'reports' is the name of our collection in Firestore
      await addDoc(collection(db, 'reports'), {
        room: room,
        issue: issue,
        status: 'reported',
        timestamp: serverTimestamp(),
      });
      setRoom('');
      setIssue('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit report.");
    }
  };

  return (
    <div>
      <h2>Report an Issue</h2>
      {submitted && <p style={{ color: 'green' }}>Report submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Classroom/Lab ID (e.g., C301)"
          required
        />
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the issue (e.g., Fan not working)"
          required
        ></textarea>
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}
export default IssueReport;