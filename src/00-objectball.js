function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          // ... rest of the players for the home team
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          // ... rest of the players for the away team
        }
      }
    };
  }
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      for (let player in game[team].players) {
        if (player === playerName) {
          return game[team].players[player].points;
        }
      }
    }
    return "Player not found.";
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      for (let player in game[team].players) {
        if (player === playerName) {
          return game[team].players[player].shoe;
        }
      }
    }
    return "Player not found.";
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found.";
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        const playerNumbers = [];
        for (let player in game[team].players) {
          playerNumbers.push(game[team].players[player].number);
        }
        return playerNumbers;
      }
    }
    return "Team not found.";
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      for (let player in game[team].players) {
        if (player === playerName) {
          return game[team].players[player];
        }
      }
    }
    return "Player not found.";
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > largestShoeSize) {
          largestShoeSize = game[team].players[player].shoe;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Bonus functions:
  
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMaxPoints = "";
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          playerWithMaxPoints = player;
        }
      }
    }
    return playerWithMaxPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (homePoints < awayPoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > mostSteals) {
          mostSteals = game[team].players[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
    return playerWithMostSteals === longestName;
  }
  
  
  