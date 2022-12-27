const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

function solution(s) {
	return s.replace(/\!$/, "");
}

function rand(from, to) {
	return Math.floor((to - from + 1) * Math.random() + from);
}

function randLetter() {
	const letters = "abcdefghijklmnopqrstuvwxyz";
	return letters[~~(letters.length * Math.random())];
}

function randWord(n) {
	const len = n || rand(3, 7), array = [];
	for (let i = 0; i < len; i++)
		array[i] = randLetter();
	return array.join("");
}

function randMarksString() {
	const len = rand(1, 6), array = [];
	for (let i = 0; i < len; i++)
		array[i] = randWord() + (rand(0, 1000) % 4 == 0 ? "!" : "");

	return array.join(" ") + "!".repeat(Math.max(0, rand(-2, 5)));
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
	});

	it("random tests", function () {
		for (let i = 0; i < 100; i++) {
			const string = randMarksString();
			doTest(string, solution(string));
		}
	});
});