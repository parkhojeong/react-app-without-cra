import { addNumbers } from "./utils/add.js";
import { substractNumbers } from './utils/substract.js';
import { multiplyNumbers } from './utils/multiply.js';
import { divideNumbers } from './utils/divide.js';

console.log(addNumbers(1,1));
console.log(substractNumbers(1,1));
console.log(multiplyNumbers(1,1));
console.log(divideNumbers(2,1));

const App = () => <h1>HELLO REACT WORLD WITH JSX {process.env.TEST_API_URL}</h1>
ReactDOM.render(<App />, document.getElementById("root"));
