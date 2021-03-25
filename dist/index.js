"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var words = require("./words");
var app = express();
app.get('/', function (req, res) {
    var _a = req.query.maxWordLength, maxWordLength = _a === void 0 ? 6 : _a;
    var filteredWords = words.words
        .split(',')
        .filter(function (word) { return word.length <= maxWordLength; })
        .map(function (word) { return word.toLowerCase(); });
    var randomIndex = Math.floor(Math.random() * (filteredWords.length - 0 + 1) + 0);
    var word = filteredWords[randomIndex];
    res.header({
        'Access-Control-Allow-Origin': '*',
    });
    res.json({ word: word });
});
app.listen(process.env.PORT || 8080, function () {
    /* eslint-disable-next-line no-console */
    console.info('Server running on port 8080.');
});
