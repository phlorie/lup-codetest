import { listTeams } from './source';

export function getTeams() {
  return {
    type: 'TEAMS/LIST',
    promise: listTeams(),
  };
}