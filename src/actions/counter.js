export const up = (value) => {
  return {
    type: 'UP',
    value: value
  }
}
export const down = (value) => {
  return {
    type: 'DOWN',
    value: value
  }
}
export const reset = (value) => {
  return {
    type: 'RESET',
    value: value
  }
}