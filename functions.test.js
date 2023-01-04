const functions = require('./functions.js')

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue()).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toMatchObject({ firstName: 'Brad', lastName: 'Traversy' });
});
// or
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' });
});


// Tests are really just functions. To demonstrate that, 
// we now let you create tests that work without outside input:

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toContain('I');
});
// or
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
