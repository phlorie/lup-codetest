import apiRequest from './apiRequest';

export function listTeams() {
  return apiRequest({
    path: 'teams',
  });
}