module.exports = [
    {
        email: "alex.dev.testing@gmail.com",
        password: "securePass123",
        expected: "success"
    },
    {
        email: "bad.user.account@yahoo.com",
        password: "wrongpassword11",
        expected: "failure"
    },
    {
        email: "",
        password: "anypassword5",
        expected: "failure"
    },
    {
        email: "user.auth@outlook.com",
        password: "",
        expected: "failure"
    }
];
