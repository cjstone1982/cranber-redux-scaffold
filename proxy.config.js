module.exports = {
  '/api/login': function (req, res) {
    setTimeout(function () {
      res.json({
        "sessionToken": "098f6bcd4621d373cade4e832627b4f6"
      });
    }, 1000);
  },

  '/api/accounts': function (req, res) {
    setTimeout(function () {
      res.json([{
        "accountId": 1,
        "mobileNumber": 15022222222,
        "realName": "guox",
        "refererCode": 231,
        "role": "basic",
        "address": "",
        "balance": "",
        "createdAt": ""
      }]);
    }, 1000);
  }
};
