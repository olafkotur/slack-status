const fetch = require("node-fetch");

const token = 'xoxp-1239974001189-1265186998656-1226671593351-2d2031a760828f5c0ba207d0a0388db6';

const options = {
  "status_text": "Herro bubba",
  "status_emoji": ":heart:",
  "status_expiration": 0
};
const encoded = encodeURI(JSON.stringify(options));

fetch(`https://slack.com/api/users.profile.set\?profile\=${encoded}&token=${token}`, { method: 'POST'});