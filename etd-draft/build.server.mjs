import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssModulesPlugin from 'esbuild-css-modules-plugin';

await esbuild.build({
    entryPoints: ["./src/server/index.tsx"],
    bundle: true,
    platform: "node",
    sourcemap: 'inline',
    target: ["node16"],
    outfile: "./build/app.js",
    loader:{'.scss':'file', '.svg':'file', '.ttf':'file'},
    plugins: [
      cssModulesPlugin(),
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([autoprefixer]).process(source);
          return css;
        },
      }),
    ],
  });