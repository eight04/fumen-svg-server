const express = require("express");
const {createSVG} = require("fumen-svg");

const app = express();
app.get("/", (req, res) => {
  handleRequest(req)
    .then(
      r => {
        res.set(r.headers);
        res.send(r.body);
      },
      err => {
        console.error(err); // eslint-disable-line no-console
        res.status(500);
        res.json({
          error: true,
          message: err.message || String(err)
        });
      }
    );
});
app.listen(3000);

const TYPES = {
  index: Number,
  delay: Number,
  size: Number
};

async function handleRequest(req) {
  const options = Object.assign({}, req.query);
  for (const key in TYPES) {
    if (options[key] !== undefined) {
      options[key] = TYPES[key](options[key]);
    }
  }
  const svg = createSVG(options);
  return {
    body: svg,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000"
    }
  };
}
