import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TeamList from './components/TeamList';
import Footer from './components/Footer';
import './styles/App.css';
import TeamForm from './components/teamForm';

function App() {
  const [teams, setTeams] = useState([]);
  const [editingTeam, setEditingTeam] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/teams');
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const addTeam = (team) => {
    setTeams([...teams, team]);
  };

  const updateTeam = (updatedTeam) => {
    setTeams(teams.map(team => team._id === updatedTeam._id ? updatedTeam : team));
  };

  const deleteTeam = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/teams/${id}`, {
        method: 'DELETE',
      });
      setTeams(teams.filter(team => team._id !== id));
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <TeamForm
          addTeam={addTeam}
          editingTeam={editingTeam}
          setEditingTeam={setEditingTeam}
          updateTeam={updateTeam}
        />
        <TeamList
          teams={teams}
          deleteTeam={deleteTeam}
          setEditingTeam={setEditingTeam}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;