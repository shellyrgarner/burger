var orm = require("../models/burger.js");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    //insert
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res) {
            callback(res);
        });
    },

    update: function(objectColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};
  


module.exports = burger;