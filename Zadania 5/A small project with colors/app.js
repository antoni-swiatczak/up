"use strict";
import chalk from "chalk";

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log(chalk.rgb(255, 0, 0).bold(i));
  } else if (i % 3 != 0 && i % 5 == 0) {
    console.log(chalk.rgb(0, 0, 255).bold(i));
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(chalk.rgb(184, 3, 255).bold(i));
  } else {
    console.log(chalk.rgb(255, 255, 255).bold(i));
  }
}