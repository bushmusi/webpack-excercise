
import './style.scss';

console.log("hello webpack!");

const fancyFunc = () => {
    return [1, 2];
  };
  
const [a, b] = fancyFunc();
console.log('a:'+a+' b:'+b);
