const Graph = require("Graph.js");
const Node = require("Node.js");

module.exports = class Edge{

    constructor(destination, cost){

        this.destination = destination;
        this.cost = cost;

    }
}