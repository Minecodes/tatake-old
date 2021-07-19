import chalk from "chalk";

function log(text: String) {
    process.stdout.write(`[${chalk.green("Log")}] ${text}\n`);
}

function info(text: String) {
    process.stdout.write(`[${chalk.green("Info")}] ${text}\n`);
}

function error(error: Error) {
    process.stderr.write(`[${chalk.red("ERROR")}] ${error}\n`);
}

function warn(warn: String) {
    process.stdout.write(`[${chalk.yellow("Warn")}] ${warn}\n`);
}

function debug(text: String) {
    process.stdout.write(`[${chalk.blue("Debug")}] ${text}\n`);
}

export { log, info, error, warn, debug }