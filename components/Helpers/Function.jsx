export function randomPosition(arr) {
  let data = arr

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return data
}

export function randomOnePosition(arr) {
  let data = arr

  data = Math.floor(Math.random() * data.length);

  return data
}