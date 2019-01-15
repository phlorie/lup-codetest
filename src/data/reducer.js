import i from 'icepick/icepick.min.js';
import { handle } from 'redux-pack';

const initialState = {
  teams: [],
  teamsLoading: false,
  editTeamData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEAMS/LIST': {
      return handle(state, action, {
        start: prevState => i.set(prevState, 'teamsLoading', true),
        finish: prevState => i.set(prevState, 'teamsLoading', false),
        success: prevState => i.set(prevState, 'teams', action.payload.json),
      });
    }
    case 'TEAM/FETCH': {
      const teamData = state.teams.find(t => t.id === action.meta.teamId);
      return { ...initialState, editTeamData: teamData };
    }
    default:
      return state;
  }
}
