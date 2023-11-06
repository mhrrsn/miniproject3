"use strict";

const Posts = require("./posts");
async function init() {
    await Posts.sync();
};

init();

module.exports = {
    Posts,
};