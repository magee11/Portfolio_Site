// Runs the Next.js CLI from the real (correctly cased) project path.
// On Windows, opening the project as e.g. "c:\projects\..." instead of
// "C:\Projects\..." makes webpack load React twice, which breaks <Link>
// navigation and can fail builds with "Cannot find module for page: /_document".
const { spawn } = require("child_process");
const fs = require("fs");

const cwd = fs.realpathSync.native(process.cwd());
const nextBin = require.resolve("next/dist/bin/next", { paths: [cwd] });

spawn(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd,
  stdio: "inherit",
}).on("exit", (code) => process.exit(code ?? 0));
