export const wonTheGame = game => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const win of wins) {
    const [a, b, c] = win;
    if (game[a] && game[a] === game[b] && game[a] === game[c])
      return game[a];
  }
  return null;
}
