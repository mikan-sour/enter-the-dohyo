import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssModulesPlugin from 'esbuild-css-modules-plugin';

// client bundle
await esbuild.build({
    entryPoints: ["./src/client/pages/draft/client.tsx"],
    jsx: "automatic",
    bundle: true,
    minify: true,
    sourcemap: 'inline',
    outfile: "./public/draft/index.js",
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