describe('Fixed Tests', () => {
    it('should work properly', () => {
        Test.assertEquals(
            isAnagram('foefet', 'toffee'),
            true,
            'The word foefet is an anagram of toffee'
        );
        Test.assertEquals(
            isAnagram('Buckethead', 'DeathCubeK'),
            true,
            'The word Buckethead is an anagram of DeathCubeK'
        );
        Test.assertEquals(
            isAnagram('Twoo', 'WooT'),
            true,
            'The word Twoo is an anagram of WooT'
        );

        Test.assertEquals(
            isAnagram('dumble', 'bumble'),
            false,
            'Characters do not match for test case dumble, bumble'
        );
        Test.assertEquals(
            isAnagram('ound', 'round'),
            false,
            'Missing characters for test case ound, round'
        );
        Test.assertEquals(
            isAnagram('apple', 'pale'),
            false,
            'Same letters, but different count'
        );
    });
});

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const changeCase = (c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());
const randomInt = (n) => ~~(Math.random() * n);
const randomChar = () => ALPHABET[randomInt(ALPHABET.length)];
const randomStr = (n) => [...new Array(n)].map((_) => randomChar()).join('');
const randomIndex = (s) => randomInt(s.length);

const randomAddChar = (s, i = randomIndex(s)) => s.slice(0, i) + randomChar() + s.slice(i);
const randomDeleteChar = (s, i = randomIndex(s)) => s.slice(0, i) + s.slice(i + 1);
const randomEditChar = (s, i = randomIndex(s)) => s.slice(0, i) + randomChar() + s.slice(i + 1);
const randomChangeCase = (s, i = randomIndex(s)) => s.slice(0, i) + changeCase(s[i]) + s.slice(i + 1);

const shuffle = (s) => {
    const a = s.split(''),
        l = s.length;
    for (let i = 0; i < l - 1; i++) {
        const j = i + randomInt(l - i);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.join('');
};

const randomModifyStr = (s) => {
    const t = shuffle(s),
        r = Math.random();
    if (r < 0.25) return randomAddChar(t);
    if (r < 0.5) return randomDeleteChar(t);
    if (r < 0.75) return randomEditChar(t);
    return randomChangeCase(t);
};

const normalize = (s) => s.toLowerCase().split('').sort().join('');

describe('Random Tests', () => {
    for (let i = 0; i < 100; i++) {
        it('should work for random tests', () => {
            const original = randomStr(8 + randomInt(12));
            const modified = randomModifyStr(original);
            Test.assertEquals(
                isAnagram(original, modified),
                normalize(modified) === normalize(original)
            );
        });
    }
});