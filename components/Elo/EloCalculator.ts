
/**
 * Calcule l'expected score d'un joueur contre un autre.
 * 
 * @param self Le classement Elo du joueur dont on veut calculer l'expected score.
 * @param opponent Le classement Elo du joueur contre lequel on veut calculer l'expected score.
 * 
 * @returns L'expected score du joueur dont le classement Elo est spécifié contre le joueur dont le classement Elo est spécifié.
 */
function expectedScore(self: number, opponent: number) {
  return 1 / (1 + 10 ** ((opponent - self) / 400));
}

/**
 * Calcule le nouveau classement Elo de deux joueurs ou plus.
 * 
 * @param ratings Les classements Elo des joueurs, rangés du plus meilleur au moins bon (le premier joueur est celui qui a gagné).
 * @param kFactor Le facteur K, qui détermine l'importance d'une victoire ou d'une défaite (Plus il est élevé, plus le classement change)
 * @param selfRating Le classement Elo du joueur dont on veut calculer le nouveau classement (si non spécifié, le classement Elo du premier joueur est utilisé)
 */
function eloCalculator(ratings: number[], kFactor = 32, selfRating?: number): number[] {
  const newRating = (rating: number, i: number) =>
    (selfRating || rating) +
    kFactor *
      (i -
        expectedScore(
          i ? ratings[0] : ratings[1],
          i ? ratings[1] : ratings[0]
        )); // Formule du nouveau classement Elo d'un joueur, qui dépend de son classement actuel, du facteur K et de l'expected score.

  if (ratings.length === 2) {
    return [newRating(ratings[0], 1), newRating(ratings[1], 0)]; // Si il n'y a que deux joueurs, on calcule le nouveau classement Elo de chacun d'eux.
  }

  for (let i = 0; i < ratings.length; i++) { // Si il y a plus de deux joueurs, on calcule le nouveau classement Elo de chacun d'eux en les faisant jouer les uns contre les autres.
    for (let j = i + 1; j < ratings.length; j++) { // On ne fait jouer que les joueurs qui n'ont pas encore joué.
      [ratings[i], ratings[j]] = eloCalculator([ratings[i], ratings[j]], kFactor); // On calcule le nouveau classement Elo des deux joueurs qui jouent l'un contre l'autre.
    }
  }

  return ratings;
}

export default eloCalculator;