const Stack = require("../Stack/Stack.js");
const Queue = require("../Queue/Queue.js");
const LinkedList = require("../LinkedList/LinkedList.js");
const Edge = require("Edge.js");
const Node = require("Node.js");

module.exports = class Graph{

    constructor(){

        this.nodes = {};

    }

    addNode(value){}//TODO

    removeNode(value){}//TODO

    connectNodes(node1, node2){}//TODO

    disconnectNodes(node1, node2){}//TODO

    getSize(){}//TODO

    findShortestPath(node1, node2){}//TODO

    printDepthFirst(){}//TODO

    printBreadthFirst(){}//TODO

}