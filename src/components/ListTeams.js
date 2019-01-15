import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTeams, fetchTeam } from '../data/actions';

class ListTeams extends Component {
  componentWillMount() {
    this.props.getTeams();
  }

  render() {
    const { teams, isLoading, fetchTeam } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return [
      <Link to="/create">Create new team</Link>,
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.color}</td>
                <td>{t.name}</td>
                <td>{t.color}</td>
                <td>{t.color}</td>
                <td>{t.color}</td>
                <td>
                  <Link to={`/edit/${t.id}`} onClick={() => fetchTeam(t.id)}>Edit</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>,
    ];
  }
}

const mapStateToProps = ({ teamsState }) => ({
  teams: teamsState.teams,
  isLoading: teamsState.teamsLoading,
});

const mapDispatchToProps = {
  getTeams,
  fetchTeam
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTeams);
