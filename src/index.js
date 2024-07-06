import "./style.css";

import { Node } from "./Node";
import { LinkedList } from "./LinkedList";

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);

l.prepend(0);

console.log(l.toString());

l.pop();
console.log(l);

console.log(l.find(5));
console.log(l.find(2));

console.log(l.toString());
l.insertAt(89, 1);

console.log(l.toString());

l.removeAt(1);

console.log(l.toString());
