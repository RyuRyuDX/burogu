// esbuild.config.js
module.exports = {
  entryPoints: ["./app/javascript/application.js"],
  bundle: true,
  outfile: "./public/packs/js/application.js",
  watch: process.env.ESBUILD_WATCH === "true",
};
