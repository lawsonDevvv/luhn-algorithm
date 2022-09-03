import * as readline from 'readline';

console.log(
	`Hey! This program was made by lawsonDevvv and is licensed under the MIT license.\n` +
		`IDGAF what you do with this code, just credit me please. Remember kids: Programmers are professional thieves.\n\n`
);

const luhnAlgorithm = (ccNumber: string) => {
	const length = ccNumber.length;
	let count = 0;
	for (let i = 0; i < length; i++) {
		let currentDigit = parseInt(ccNumber[i]);

		if ((i + 2) % 2 === 0) if ((currentDigit *= 2) > 9) currentDigit -= 9;

		count += currentDigit;
	}

	return count % 10 === 0;
};

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter your credit card number: ', (ccNumber) => {
	if (!ccNumber.length) {
		console.log('No.');
		rl.close();
	}

	luhnAlgorithm(ccNumber)
		? console.log(`\nThis CC number is valid and passes the Luhn Algorithm.`)
		: console.log(`\nThis CC number is invalid and fails the Luhn Algorithm.`);

	rl.close();
});
