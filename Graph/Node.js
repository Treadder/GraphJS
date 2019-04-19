const Edge = require("Edge.js");
const Graph = require("Graph.js");

module.exports = class Node{

    constructor(value){

        this.value = value;
        this.edges = {};

    }
}