import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../data/actions';

class ListTeams extends Component {
  componentWillMount() {
    this.props.getTeams();
  }

  render() {
    const { teams, isLoading } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Points</th>
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
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (teamsState) => ({
  teams: teamsState.teams,
  isLoading: teamsState.teamsLoading,
});

const mapDispatchToProps = {
  getTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTeams);
