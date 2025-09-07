import React from 'react';

const TeamList = ({ teams, deleteTeam, setEditingTeam }) => {
    if (teams.length === 0) {
        return (
            <div className="teams-container">
                <h2 className="teams-title">Registered Teams</h2>
                <div className="empty-teams">
                    <p>No teams registered yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="teams-container">
            <h2 className="teams-title">Registered Teams ({teams.length})</h2>
            {teams.map((team) => (
                <div key={team._id} className="team-card">
                    <div className="team-header">
                        <h3 className="team-name">{team.teamName}</h3>
                        <div className="team-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() => setEditingTeam(team)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTeam(team._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="team-details">
                        <div className="team-detail">
                            <span className="detail-label">Captain:</span>
                            <span>{team.captainName}</span>
                        </div>
                        <div className="team-detail">
                            <span className="detail-label">Coach:</span>
                            <span>{team.coachName}</span>
                        </div>
                        <div className="team-detail">
                            <span className="detail-label">Email:</span>
                            <span>{team.contactEmail}</span>
                        </div>
                        <div className="team-detail">
                            <span className="detail-label">Phone:</span>
                            <span>{team.contactPhone}</span>
                        </div>
                    </div>

                    <div className="players-list">
                        <h4 className="player-header">Players</h4>
                        <div className="player-header-row">
                            <span>Name</span>
                            <span>Role</span>
                            <span>Style</span>
                        </div>
                        {team.players.map((player, index) => (
                            <div key={index} className="player-row">
                                <span>
                                    {player.name} ({player.age})
                                </span>
                                <span>{player.role}</span>
                                <span>
                                    {player.battingStyle} / {player.bowlingStyle}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamList;