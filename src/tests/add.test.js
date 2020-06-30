const add = (a, b) => a + b;
/*
test('Should add two numbers', () => {
    const result = add(3,4);
    if (result !== 7) {
        throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    }
});*/

test('Should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
test('Should generate Greeting - Lorena', () => {
    const result = generateGreeting('Lorena');
    expect(result).toBe('Hello Lorena!');
});

test('Should generate Greeting - Anonymous', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});