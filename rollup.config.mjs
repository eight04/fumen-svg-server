import glob from "tiny-glob";

import cjs from "rollup-plugin-cjs-es";
// import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

// const DEV = process.env.ROLLUP_WATCH;

function commonPlugins(cache) {
  return [
    resolve({
      dedupe: ["event-lite"]
    }),
    // json(),
    cjs({nested: true, cache})
  ];
}

export default async () => [
  {
    input: await glob("src/functions/*"),
    output: {
      format: "es",
      dir: "functions"
    },
    plugins: [
      // copy([
      //   {
      //     files: "src/static/**/*",
      //     dest: "dist-extension"
      //   }
      // ]),
      ...commonPlugins(),
      // inject({
      //   exclude: ["**/*/browser-polyfill.js"],
      //   browser: "webextension-polyfill"
      // }),
      // iife(),
      // output([
      //   {
      //     test: /(options|dialog)\.js$/,
      //     target: "dist-extension/$1.html",
      //     handle: (content, {htmlScripts}) => content.replace(/.*<\/body>/, `${htmlScripts}</body>`)
      //   },
      //   {
      //     test: /background\.js$/,
      //     target: "dist-extension/manifest.json",
      //     handle: (content, {scripts}) => {
      //       content.background.scripts = scripts;
      //       return content;
      //     }
      //   },
      //   {
      //     test: /content\.js$/,
      //     target: "dist-extension/manifest.json",
      //     handle: (content, {scripts}) => {
      //       content.content_scripts[0].js = scripts;
      //       content.content_scripts[0].exclude_globs = usm.getMeta().exclude;
      //       return content;
      //     }
      //   }
      // ]),
      // !DEV && terser({module: false})
    ]
  },
];

