import {createSVG} from "fumen-svg";

const TYPES = {
  index: Number,
  delay: Number,
  size: Number
};

export function onRequestGet(context) {
  const url = new URL(context.request.url);
  const options = {};
  for (const key in TYPES) {
    if (url.searchParams.has(key)) {
      options[key] = TYPES[key](url.searchParams.get(key));
    }
  }
  const svg = createSVG(options);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000"
    }
  });
}
