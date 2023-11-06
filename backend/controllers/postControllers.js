"use strict";

const sequelize = require('sequelize');
const Models = require("../models");

const getPost = (res) => {
    Models.Posts.findAll({}).then(function (data) {
        res.send({results: 200, data: data})
    }).catch(err => {
        throw err
    });
};

const createPost = (data, res) => {
    Models.Posts.create(data).then(function (data) {
        res.send({results: 200, data: data})
    }).catch(err => {
        throw err
    });
};

const getPostById = (id, res) => {
    Models.Posts.findOne({where: {id: id}}).then(function (data) {
        res.send({results: 200, data: data})
    }).catch(err => {
        throw err
    });
};

const updatePost = (id, data, res) => {
    Models.Posts.update(data, {where: {id: id}}).then(function (data) {
        res.send({results: 200, data: data})
    }).catch(err => {
        throw err
    });
};


const deletePost = (id, res) => {
    Models.Posts.destroy({where: {id: id}}).then(function (data) {
        res.send({results: 200, data: data})
    }).catch(err => {
        throw err
    });
};

module.exports = {
    getPost,
    createPost,
    getPostById,
    updatePost,
    deletePost
};