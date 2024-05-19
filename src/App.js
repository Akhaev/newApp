
const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
const positive = array.filter(item => {
    if (item > 0) {
        return item
    }
})

console.log(positive);


const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
]

console.log(messages.filter(item => {
    if (item.error == false) {
        return item
    }
})); 


const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html']
console.log(words.map(item => {
    if (item.length < 5) {
        return item = '*'
    }else{
        return item
    }
})); 


let sendMessage = (message) => {
    /*
    * тут какой-то большой код для отправки сообщения
    */
}

let half = (number) => {
    return number / 2;
}

let showConsole = () => {
    console.log('Экспо');
}

let concatWords = (first, second) => {
    return first + second
}

function justText() {
    'expo'
} 

function logging(text) {
    console.log(text)
} 

function add(x,y) {
    const z = 3;
  
    return z * x * y;
}

function onlyPositive(number) {
    if(number < 0) {
      return false;
    }
  
    return true;
}

function App() {
}

export default App