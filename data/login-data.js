/**
 * Credential sets for parameterized sign-in verification.
 * Each entry includes an email, password, and anticipated outcome.
 */
module.exports = [
    {
        email: "abhis.capstone.tester@gmail.com",
        password: "T3stAcc0unt!",
        expected: "success"
    },
    {
        email: "random.fake.addr@hotmail.com",
        password: "n0tR3alPwd",
        expected: "failure"
    },
    {
        email: "",
        password: "blindEntry99",
        expected: "failure"
    },
    {
        email: "missing.pwd.field@outlook.com",
        password: "",
        expected: "failure"
    },
    {
        email: "spaces.only@test.org",
        password: "   ",
        expected: "failure"
    }
];
