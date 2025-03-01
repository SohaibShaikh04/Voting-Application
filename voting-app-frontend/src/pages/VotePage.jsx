import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import React from "react";
const VotePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [message, setMessage] = useState("");
  const socket = io("http://localhost:3000");

  useEffect(() => {
    fetchCandidates();

    socket.on("voteUpdate", (updatedCandidates) => {
      setCandidates(updatedCandidates);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://localhost:3000/candidate");
      setCandidates(res.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const handleVote = async () => {
    if (!selectedCandidate) return;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:3000/candidate/vote/${selectedCandidate}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      socket.emit("vote");
      setMessage("Vote submitted successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error submitting vote");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Vote for Your Candidate</h2>
        {candidates.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">No candidates available</p>
        ) : (
          <ul className="mt-4">
            {candidates.map((candidate) => (
              <li
                key={candidate._id}
                className={`p-3 rounded-lg cursor-pointer text-center ${
                  selectedCandidate === candidate._id ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
                }`}
                onClick={() => setSelectedCandidate(candidate._id)}
              >
                {candidate.name} ({candidate.party})
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleVote}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit Vote
        </button>
        {message && <p className="mt-3 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default VotePage;
