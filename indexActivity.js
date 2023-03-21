console.log("Hello, Welcome to De La Salle University!")

function computeSupply(age, amountPerDay) {
    const maxAge = 92;
    const totalAmount = Math.round((maxAge - age) * 365 * amountPerDay);
    const message = `You need ${totalAmount} to last you until the ripe old age of ${maxAge}`;
    console.log(message);
  }

computeSupply(50, 3.5);
computeSupply(60, 6.9); 
computeSupply(80, 2.8);