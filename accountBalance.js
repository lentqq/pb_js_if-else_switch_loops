function accountBalance(input) {

    let n = Number(input.shift());

    let counter = 0;

    let balance = 0.0;

    while (counter < n) {

        let amount = Number(input.shift());

        if (amount < 0) {
            break;
        } //TODO Print message and exit the loop

        balance += amount;

        console.log(`Increase: ${amount.toFixed(2)}`);

        counter++;

    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance([3, 5.51, 69.42, 100])