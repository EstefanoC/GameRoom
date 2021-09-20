export function playComputer(difficulty, status) {
  if (difficulty) {
    if (Math.round(Math.random() * 10) === 1) {
      let random;

      do {
        random = Math.round(Math.random() * 9)
      } while (status.tableAll.some(el => el === random) || random === 0);

      return({...status, tableX: [...status.tableX, random], tableAll: [...status.tableAll, random]})
    } else if (status.tableAll.length === 0) {
      return({...status, tableX: [...status.tableX, 5], tableAll: [...status.tableAll, 5]})
    } else if (!status.tableAll.some(el => el === 1)) {
      return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
    } else if (!status.tableAll.some(el => el === 3)) {
      return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
    } else if (!status.tableAll.some(el => el === 7)) {
      return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
    } else if (!status.tableAll.some(el => el === 9)) {
      return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
    } else {
      // When CPU win
      if (!status.tableAll.some(el => el === 1) && (status.tableX.some(el => el === 2) && status.tableX.some(el => el === 3) || status.tableX.some(el => el === 4) && status.tableX.some(el => el === 7) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 9))) {
        return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 3) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 8))) {
        return({...status, tableX: [...status.tableX, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 2) || status.tableX.some(el => el === 6) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (status.tableX.some(el => el === 5) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (status.tableX.some(el => el === 4) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 2) && status.tableX.some(el => el === 8) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (status.tableX.some(el => el === 4) && status.tableX.some(el => el === 5) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 9))) {
        return({...status, tableX: [...status.tableX, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (status.tableX.some(el => el === 8) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 4) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 2) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 8) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
      }
      // When stop a win
      else if (!status.tableAll.some(el => el === 1) && (status.tableO.some(el => el === 2) && status.tableO.some(el => el === 3) || status.tableO.some(el => el === 4) && status.tableO.some(el => el === 7) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 9))) {
        return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (status.tableO.some(el => el === 1) && status.tableO.some(el => el === 3) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 8))) {
        return({...status, tableX: [...status.tableX, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (status.tableO.some(el => el === 1) && status.tableO.some(el => el === 2) || status.tableO.some(el => el === 6) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (status.tableO.some(el => el === 5) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (status.tableO.some(el => el === 4) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 2) && status.tableO.some(el => el === 8) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 7))) {
        return({...status, tableX: [...status.tableX, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (status.tableO.some(el => el === 4) && status.tableO.some(el => el === 5) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 9))) {
        return({...status, tableX: [...status.tableX, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (status.tableO.some(el => el === 8) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 4) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (status.tableO.some(el => el === 7) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 2) && status.tableO.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (status.tableO.some(el => el === 7) && status.tableO.some(el => el === 8) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
      }
      else if (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 3)) {
        return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
      } else if (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 7)) {
        return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
      } else if (status.tableX.some(el => el === 3) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 1)) {
        return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
      } else if (status.tableX.some(el => el === 3) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 9)) {
        return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
      } else if (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 1)) {
        return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
      } else if (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 9)) {
        return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
      } else if (status.tableX.some(el => el === 9) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 3)) {
        return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
      } else if (status.tableX.some(el => el === 9) && status.tableX.some(el => el === 5) && !status.tableAll.some(el => el === 7)) {
        return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
      }
      // Create a strategy
      else if (!status.tableAll.some(el => el === 1) && (!status.tableAll.some(el => el === 2) && status.tableX.some(el => el === 3) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 2) || !status.tableAll.some(el => el === 4) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 4) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (!status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 3) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 1) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (!status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 2) || !status.tableAll.some(el => el === 2) && status.tableX.some(el => el === 1) || !status.tableAll.some(el => el === 6) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 6) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 5))) {
        return({...status, tableX: [...status.tableX, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (!status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableX.some(el => el === 5) || !status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 1))) {
        return({...status, tableX: [...status.tableX, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (!status.tableAll.some(el => el === 4) && status.tableX.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableX.some(el => el === 4) || !status.tableAll.some(el => el === 2) && status.tableX.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableX.some(el => el === 2) || !status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 1) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 3))) {
        return({...status, tableX: [...status.tableX, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (!status.tableAll.some(el => el === 4) && status.tableX.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 4) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 3))) {
        return({...status, tableX: [...status.tableX, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (!status.tableAll.some(el => el === 8) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 8) || !status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 4) || !status.tableAll.some(el => el === 4) && status.tableX.some(el => el === 1) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 3))) {
        return({...status, tableX: [...status.tableX, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (!status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 2) && status.tableX.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 2))) {
        return({...status, tableX: [...status.tableX, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (!status.tableAll.some(el => el === 7) && status.tableX.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableX.some(el => el === 7) || !status.tableAll.some(el => el === 3) && status.tableX.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableX.some(el => el === 3) || !status.tableAll.some(el => el === 1) && status.tableX.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableX.some(el => el === 1))) {
        return({...status, tableX: [...status.tableX, 9], tableAll: [...status.tableAll, 9]})
      } else {
        let random;

        do {
          random = Math.round(Math.random() * 9)
        } while (status.tableAll.some(el => el === random) || random === 0);

        return({...status, tableX: [...status.tableX, random], tableAll: [...status.tableAll, random]})
      }
    }
  } else {
    if (Math.round(Math.random() * 10) > 3) {
      // When CPU win
      if (!status.tableAll.some(el => el === 1) && (status.tableO.some(el => el === 2) && status.tableO.some(el => el === 3) || status.tableO.some(el => el === 4) && status.tableO.some(el => el === 7) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 9))) {
        return({...status, tableO: [...status.tableO, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (status.tableO.some(el => el === 1) && status.tableO.some(el => el === 3) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 8))) {
        return({...status, tableO: [...status.tableO, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (status.tableO.some(el => el === 1) && status.tableO.some(el => el === 2) || status.tableO.some(el => el === 6) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 5) && status.tableO.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (status.tableO.some(el => el === 5) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (status.tableO.some(el => el === 4) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 2) && status.tableO.some(el => el === 8) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (status.tableO.some(el => el === 4) && status.tableO.some(el => el === 5) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 9))) {
        return({...status, tableO: [...status.tableO, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (status.tableO.some(el => el === 8) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 4) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (status.tableO.some(el => el === 7) && status.tableO.some(el => el === 9) || status.tableO.some(el => el === 2) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (status.tableO.some(el => el === 7) && status.tableO.some(el => el === 8) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 6) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 9], tableAll: [...status.tableAll, 9]})
      }
      // When stop a win
      else if (!status.tableAll.some(el => el === 1) && (status.tableX.some(el => el === 2) && status.tableX.some(el => el === 3) || status.tableX.some(el => el === 4) && status.tableX.some(el => el === 7) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 9))) {
        return({...status, tableO: [...status.tableO, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 3) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 8))) {
        return({...status, tableO: [...status.tableO, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 2) || status.tableX.some(el => el === 6) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 5) && status.tableX.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (status.tableX.some(el => el === 5) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (status.tableX.some(el => el === 4) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 2) && status.tableX.some(el => el === 8) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 7))) {
        return({...status, tableO: [...status.tableO, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (status.tableX.some(el => el === 4) && status.tableX.some(el => el === 5) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 9))) {
        return({...status, tableO: [...status.tableO, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (status.tableX.some(el => el === 8) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 4) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 9) || status.tableX.some(el => el === 2) && status.tableX.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 8) || status.tableX.some(el => el === 3) && status.tableX.some(el => el === 6) || status.tableX.some(el => el === 1) && status.tableX.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 9], tableAll: [...status.tableAll, 9]})
      }
      // Create a strategy
      else if (!status.tableAll.some(el => el === 1) && (!status.tableAll.some(el => el === 2) && status.tableO.some(el => el === 3) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 2) || !status.tableAll.some(el => el === 4) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 4) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 1], tableAll: [...status.tableAll, 1]})
      } else if (!status.tableAll.some(el => el === 2) && (!status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 3) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 1) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 2], tableAll: [...status.tableAll, 2]})
      } else if (!status.tableAll.some(el => el === 3) && (!status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 2) || !status.tableAll.some(el => el === 2) && status.tableO.some(el => el === 1) || !status.tableAll.some(el => el === 6) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 6) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 5))) {
        return({...status, tableO: [...status.tableO, 3], tableAll: [...status.tableAll, 3]})
      } else if (!status.tableAll.some(el => el === 4) && (!status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableO.some(el => el === 5) || !status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 1))) {
        return({...status, tableO: [...status.tableO, 4], tableAll: [...status.tableAll, 4]})
      } else if (!status.tableAll.some(el => el === 5) && (!status.tableAll.some(el => el === 4) && status.tableO.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableO.some(el => el === 4) || !status.tableAll.some(el => el === 2) && status.tableO.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableO.some(el => el === 2) || !status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 1) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 3))) {
        return({...status, tableO: [...status.tableO, 5], tableAll: [...status.tableAll, 5]})
      } else if (!status.tableAll.some(el => el === 6) && (!status.tableAll.some(el => el === 4) && status.tableO.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 4) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 3))) {
        return({...status, tableO: [...status.tableO, 6], tableAll: [...status.tableAll, 6]})
      } else if (!status.tableAll.some(el => el === 7) && (!status.tableAll.some(el => el === 8) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 8) || !status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 4) || !status.tableAll.some(el => el === 4) && status.tableO.some(el => el === 1) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 3))) {
        return({...status, tableO: [...status.tableO, 7], tableAll: [...status.tableAll, 7]})
      } else if (!status.tableAll.some(el => el === 8) && (!status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 9) || !status.tableAll.some(el => el === 9) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 2) && status.tableO.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 2))) {
        return({...status, tableO: [...status.tableO, 8], tableAll: [...status.tableAll, 8]})
      } else if (!status.tableAll.some(el => el === 9) && (!status.tableAll.some(el => el === 7) && status.tableO.some(el => el === 8) || !status.tableAll.some(el => el === 8) && status.tableO.some(el => el === 7) || !status.tableAll.some(el => el === 3) && status.tableO.some(el => el === 6) || !status.tableAll.some(el => el === 6) && status.tableO.some(el => el === 3) || !status.tableAll.some(el => el === 1) && status.tableO.some(el => el === 5) || !status.tableAll.some(el => el === 5) && status.tableO.some(el => el === 1))) {
        return({...status, tableO: [...status.tableO, 9], tableAll: [...status.tableAll, 9]})
      } else {
        let random;

        do {
          random = Math.round(Math.random() * 9)
        } while (status.tableAll.some(el => el === random) || random === 0);

        return({...status, tableO: [...status.tableO, random], tableAll: [...status.tableAll, random]})
      }
    } else {
      let random;

      do {
        random = Math.round(Math.random() * 9)
      } while (status.tableAll.some(el => el === random) || random === 0);

      return({...status, tableO: [...status.tableO, random], tableAll: [...status.tableAll, random]})
    }
  }
}

export function playInline(status) {
  if (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 2) && status.tableX.some(el => el === 3) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 2) && status.tableO.some(el => el === 3)) {
    let XO;

    status.tableX.some(el => el === 1)
    ?
      XO = 'X'
    :
      XO = 'O'

      return(['123', XO]);
  } else if (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 4) && status.tableX.some(el => el === 7) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 4) && status.tableO.some(el => el === 7)) {
    let XO;

    status.tableX.some(el => el === 1)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['147', XO]);
  } else if (status.tableX.some(el => el === 1) && status.tableX.some(el => el === 5) && status.tableX.some(el => el === 9) || status.tableO.some(el => el === 1) && status.tableO.some(el => el === 5) && status.tableO.some(el => el === 9)) {
    let XO;

    status.tableX.some(el => el === 1)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['159', XO]);
  } else if (status.tableX.some(el => el === 2) && status.tableX.some(el => el === 5) && status.tableX.some(el => el === 8) || status.tableO.some(el => el === 2) && status.tableO.some(el => el === 5) && status.tableO.some(el => el === 8)) {
    let XO;

    status.tableX.some(el => el === 2)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['258', XO]);
  } else if (status.tableX.some(el => el === 3) && status.tableX.some(el => el === 6) && status.tableX.some(el => el === 9) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 6) && status.tableO.some(el => el === 9)) {
    let XO;

    status.tableX.some(el => el === 3)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['369', XO]);
  } else if (status.tableX.some(el => el === 3) && status.tableX.some(el => el === 5) && status.tableX.some(el => el === 7) || status.tableO.some(el => el === 3) && status.tableO.some(el => el === 5) && status.tableO.some(el => el === 7)) {
    let XO;

    status.tableX.some(el => el === 3)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['357', XO]);
  } else if (status.tableX.some(el => el === 4) && status.tableX.some(el => el === 5) && status.tableX.some(el => el === 6) || status.tableO.some(el => el === 4) && status.tableO.some(el => el === 5) && status.tableO.some(el => el === 6)) {
    let XO;

    status.tableX.some(el => el === 4)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['456', XO]);
  } else if (status.tableX.some(el => el === 7) && status.tableX.some(el => el === 8) && status.tableX.some(el => el === 9) || status.tableO.some(el => el === 7) && status.tableO.some(el => el === 8) && status.tableO.some(el => el === 9)) {
    let XO;

    status.tableX.some(el => el === 7)
    ?
      XO = 'X'
    :
      XO = 'O'

    return(['789', XO]);
  }
}