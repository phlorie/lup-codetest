import apiRequest from './apiRequest';

export function listTeams() {
  return apiRequest({
    path: 'teams',
  });
}

export function saveTeam(formValues) {
  return apiRequest({
    path: 'teams',
    method: 'POST',
    payload: formValues,
  });
}

export function editTeam(formValues, teamId) {
  return apiRequest({
    path: `teams/${teamId}`,
    method: 'PUT',
    payload: formValues,
  });
}