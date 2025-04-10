#!/usr/bin/env node
import { debuglog } from "util";
import { execSync, spawn as s } from "child_process";

import pkg from "./package.json" with { type: "json" };

const logger = debuglog(pkg.name);

/** @param {string} cmd */
function exec(cmd) {
  logger(cmd);

  return execSync(cmd, { encoding: "utf8" }).trim();
}

/**
 * @param {string} cmd
 * @param {...string} args
 * @returns {Promise<number>}
 */
function spawn(cmd, ...args) {
  logger([cmd].concat(...args).join(" "));

  return new Promise((resolve, reject) => {
    const child = s(cmd, args);

    child.stdout.on("data", (data) => {
      process.stdout.write(data);
    });

    child.stderr.on("data", (data) => {
      process.stderr.write(data);
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on("error", reject);
  });
}

try {
  const output = exec("git status --porcelain=v1 --untracked-files=no");

  if (output.length > 0) {
    await spawn("git", "commit", "-am", "fix: formatting [skip ci]");

    const branch = exec("git rev-parse --abbrev-ref HEAD");

    await spawn("git", "push", "origin", branch);
  } else {
    logger("nothing to commit");
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
