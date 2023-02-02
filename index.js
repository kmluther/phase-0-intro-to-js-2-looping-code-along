function writeCards(names, event) {
    let messages = []
    for (let x = 0; x < names.length; x++) {
      messages.push("Thank you, " + names[x] + "," + " for the wonderful " + event + " gift!")
    }
    return messages;
  }

function countDown() {
    let i = 10;
    while (i >= 0) {
      console.log(i--);
    }
  }
  
  countDown(10);
