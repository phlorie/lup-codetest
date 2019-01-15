import { listTeams, saveTeam, editTeam } from './source';

export function getTeams() {
  return {
    type: 'TEAMS/LIST',
    promise: listTeams(),
  };
}

export function fetchTeam(teamId) {
  return {
    type: 'TEAM/FETCH',
    meta: { teamId },
  };
}

export function createTeam(formValues) {
  return {
    type: 'TEAMS/LIST',
    promise: saveTeam(formValues),
  };
}

export function updateTeam(formValues, teamId) {
  return {
    type: 'TEAMS/UPDATE',
    promise: editTeam(formValues, teamId),
  };
}