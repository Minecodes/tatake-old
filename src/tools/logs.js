"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.debug = exports.warn = exports.error = exports.info = exports.log = void 0;
var chalk_1 = __importDefault(require("chalk"));
function log(text) {
    process.stdout.write("[" + chalk_1["default"].green("Log") + "] " + text + "\n");
}
exports.log = log;
function info(text) {
    process.stdout.write("[" + chalk_1["default"].green("Info") + "] " + text + "\n");
}
exports.info = info;
function error(error) {
    process.stderr.write("[" + chalk_1["default"].red("ERROR") + "] " + error + "\n");
}
exports.error = error;
function warn(warn) {
    process.stdout.write("[" + chalk_1["default"].yellow("Warn") + "] " + warn + "\n");
}
exports.warn = warn;
function debug(text) {
    process.stdout.write("[" + chalk_1["default"].blue("Debug") + "] " + text + "\n");
}
exports.debug = debug;
