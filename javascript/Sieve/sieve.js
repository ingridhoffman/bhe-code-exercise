/**
 * based on Sieve of Eratosthenes
 * future optimization: segment the sieve for larger n values
 */
class Sieve {
	NthPrime(n) {
		// estimated number of values needed to find the nth prime
		const length = 20 * n || 3;

		// array of booleans to be marked as prime or not
		const boolArray = Array(length).fill(true);

		const primeNumbers = [];
		// loop starting at 2 (the 1st prime)
		for (let i = 2; i < length; i++) {
			if (boolArray[i]) {
				// add the number to the list of primes
				primeNumbers.push(i);

				// stop when there are enough primes
				if (primeNumbers.length > n) break;

				// mark all multiples of the prime as not prime
				for (let j = i + i; j <= length; j += i) {
					boolArray[j] = false;
				}
			}
		}

		return primeNumbers[n];
	}
}

module.exports = Sieve;
