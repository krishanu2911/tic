if (
    (updated[0][0] === updated[0][1] &&
      updated[0][1] === updated[0][2] &&
      updated[0][2] === player) ||
    (updated[1][0] === updated[1][1] &&
      updated[1][1] === updated[1][2] &&
      updated[1][2] === player) ||
    (updated[2][0] === updated[2][1] &&
      updated[2][1] === updated[2][2] &&
      updated[2][2] === player) ||
    (updated[0][0] === updated[1][0] &&
      updated[1][0] === updated[2][0] &&
      updated[2][0] === player) ||
    (updated[0][1] === updated[1][1] &&
      updated[1][1] === updated[2][1] &&
      updated[2][1] === player) ||
    (updated[0][2] === updated[1][2] &&
      updated[1][2] === updated[2][2] &&
      updated[2][2] === player) ||
    (updated[0][0] === updated[1][1] &&
      updated[1][1] === updated[2][2] &&
      updated[2][2] === player) ||
    (updated[0][2] === updated[1][1] &&
      updated[1][1] === updated[2][0] &&
      updated[2][0] === player)
  ) {
    console.log(player+ "  won");
    alert(player + " won");
  }