module.exports = [
    {
        name: "Jane Miller",
        email: "jane.qa.testing@gmail.com",
        expected: "success"
    },
    {
        name: "",
        email: "invalidname@gmail.com",
        expected: "failure"
    },
    {
        name: "Test Failure",
        email: "incorrect_email_format",
        expected: "failure"
    }
];
