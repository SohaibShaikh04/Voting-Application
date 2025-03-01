import { useEffect, useState } from "react";
import io from "socket.io-client";
import React from 'react';
const socket = io("http://localhost:3000"); // Connect to backend WebSocket server

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch initial candidate data
    const fetchCandidates = async () => {
      try {
        const res = await fetch("http://localhost:3000/candidate");
        const data = await res.json();
        setCandidates(data);
      } catch (err) {
        console.error("Error fetching candidates:", err);
      }
    };

    fetchCandidates();

    // Listen for real-time vote updates
    socket.on("voteUpdate", (updatedCandidates) => {
      setCandidates(updatedCandidates);
    });

    return () => {
      socket.off("voteUpdate");
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="py-2 px-4">Candidate Name</th>
            <th className="py-2 px-4">Party</th>
            <th className="py-2 px-4">Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate, index) => (
              <tr key={index} className="border-t dark:border-gray-600">
                <td className="py-2 px-4">{candidate.name}</td>
                <td className="py-2 px-4">{candidate.party}</td>
                <td className="py-2 px-4">{candidate.voteCount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
