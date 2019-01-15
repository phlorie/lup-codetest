export const required = value =>
  value !== undefined && value !== null && value !== ''
    ? undefined
    : 'Required';

export const isNumber = value =>
  isFinite(value) ? undefined : 'Must be a number';