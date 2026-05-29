/**
 * Registration candidate profiles for sign-up workflow testing.
 * Each entry defines a display name, email, and expected result.
 */
module.exports = [
    {
        name: "Abhishek Das",
        email: "abhishek.das.signup@gmail.com",
        expected: "success"
    },
    {
        name: "",
        email: "blank.name.field@protonmail.com",
        expected: "failure"
    },
    {
        name: "Bad Format Check",
        email: "not-a-valid-email-address",
        expected: "failure"
    },
    {
        name: "Duplicate Test",
        email: "abhis.capstone.tester@gmail.com",
        expected: "failure"
    }
];
