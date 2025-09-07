import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamForm = ({ addTeam, editingTeam, setEditingTeam, updateTeam }) => {
    const [teamName, setTeamName] = useState('');
    const [captainName, setCaptainName] = useState('');
    const [coachName, setCoachName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [players, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [playerAge, setPlayerAge] = useState('');
    const [playerRole, setPlayerRole] = useState('');
    const [playerBattingStyle, setPlayerBattingStyle] = useState('');
    const [playerBowlingStyle, setPlayerBowlingStyle] = useState('');

    useEffect(() => {
        if (editingTeam) {
            setTeamName(editingTeam.teamName);
            setCaptainName(editingTeam.captainName);
            setCoachName(editingTeam.coachName);
            setContactEmail(editingTeam.contactEmail);
            setContactPhone(editingTeam.contactPhone);
            setPlayers(editingTeam.players);
        }
    }, [editingTeam]);

    const resetForm = () => {
        setTeamName('');
        setCaptainName('');
        setCoachName('');
        setContactEmail('');
        setContactPhone('');
        setPlayers([]);
        setPlayerName('');
        setPlayerAge('');
        setPlayerRole('');
        setPlayerBattingStyle('');
        setPlayerBowlingStyle('');
        setEditingTeam(null);
    };

    const addPlayer = () => {
        if (playerName && playerAge && playerRole && playerBattingStyle && playerBowlingStyle) {
            const newPlayer = {
                name: playerName,
                age: parseInt(playerAge),
                role: playerRole,
                battingStyle: playerBattingStyle,
                bowlingStyle: playerBowlingStyle,
            };
            setPlayers([...players, newPlayer]);
            setPlayerName('');
            setPlayerAge('');
            setPlayerRole('');
            setPlayerBattingStyle('');
            setPlayerBowlingStyle('');
        }
    };

    const removePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (players.length < 1) {
            alert('Please add at least one player');
            return;
        }

        const teamData = {
            teamName,
            captainName,
            coachName,
            contactEmail,
            contactPhone,
            players,
        };

        try {
            if (editingTeam) {
                const response = await axios.put(
                    `http://localhost:5000/api/teams/${editingTeam._id}`,
                    teamData
                );
                updateTeam(response.data);
            } else {
                const response = await axios.post(
                    'http://localhost:5000/api/teams',
                    teamData
                );
                addTeam(response.data);
            }
            resetForm();
        } catch (error) {
            console.error('Error saving team:', error);
            alert('Error saving team. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">
                {editingTeam ? 'Edit Team' : 'Register New Team'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Team Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Captain Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={captainName}
                        onChange={(e) => setCaptainName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Coach Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={coachName}
                        onChange={(e) => setCoachName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Contact Email</label>
                    <input
                        type="email"
                        className="form-input"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Contact Phone</label>
                    <input
                        type="tel"
                        className="form-input"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <h3 className="form-label">Add Players</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                            <label className="form-label">Player Name</label>
                            <input
                                type="text"
                                className="form-input"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="form-label">Age</label>
                            <input
                                type="number"
                                className="form-input"
                                value={playerAge}
                                onChange={(e) => setPlayerAge(e.target.value)}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                        <div>
                            <label className="form-label">Role</label>
                            <select
                                className="form-input"
                                value={playerRole}
                                onChange={(e) => setPlayerRole(e.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="Batsman">Batsman</option>
                                <option value="Bowler">Bowler</option>
                                <option value="All-rounder">All-rounder</option>
                                <option value="Wicket-keeper">Wicket-keeper</option>
                            </select>
                        </div>
                        <div>
                            <label className="form-label">Batting Style</label>
                            <select
                                className="form-input"
                                value={playerBattingStyle}
                                onChange={(e) => setPlayerBattingStyle(e.target.value)}
                            >
                                <option value="">Select Batting Style</option>
                                <option value="Right-handed">Right-handed</option>
                                <option value="Left-handed">Left-handed</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <label className="form-label">Bowling Style</label>
                        <select
                            className="form-input"
                            value={playerBowlingStyle}
                            onChange={(e) => setPlayerBowlingStyle(e.target.value)}
                        >
                            <option value="">Select Bowling Style</option>
                            <option value="Right-arm fast">Right-arm fast</option>
                            <option value="Left-arm fast">Left-arm fast</option>
                            <option value="Right-arm medium">Right-arm medium</option>
                            <option value="Left-arm medium">Left-arm medium</option>
                            <option value="Right-arm off break">Right-arm off break</option>
                            <option value="Left-arm orthodox">Left-arm orthodox</option>
                            <option value="Leg break">Leg break</option>
                            <option value="Does not bowl">Does not bowl</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addPlayer}
                        style={{ marginTop: '15px' }}
                    >
                        Add Player
                    </button>
                </div>

                {players.length > 0 && (
                    <div className="player-list">
                        <h4 className="form-label">Players ({players.length})</h4>
                        {players.map((player, index) => (
                            <div key={index} className="player-item">
                                <div className="player-info">
                                    <strong>{player.name}</strong> ({player.age}) - {player.role}
                                    <div>
                                        Batting: {player.battingStyle}, Bowling: {player.bowlingStyle}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => removePlayer(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className="btn btn-primary">
                        {editingTeam ? 'Update Team' : 'Register Team'}
                    </button>
                    {editingTeam && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={resetForm}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TeamForm;