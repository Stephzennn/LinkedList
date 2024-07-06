class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
  }
  toString() {
    return this.data + this.nextNode;
  }
  setNextNode(Node) {
    this.nextNode = Node;
  }

  getNextNode() {
    return this.nextNode;
  }

  setValue(data) {
    this.data = data;
  }

  getvalue() {
    return this.data;
  }
}

export { Node };
