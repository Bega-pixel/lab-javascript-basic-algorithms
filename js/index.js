// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name
const hacker1 = prompt("Insert a user hacker1");
//1.3 Create a variable `hacker2` with the navigator's name
const hacker2 = prompt("Insert a user hacker2");
//1.2 Print `"The driver's name is XXXX"`
console.log(`The driver´s name is ${hacker1}`);
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals Depending on which name is longer, print:
const hacker1Num = hacker1.length;
const hacker2Num = hacker2.length;

if (hacker1Num > hacker2Num) {
  console.log(
    `The driver has the longest characters ${hacker1}, with ${hacker1Num}`
  );
} else if (hacker1Num < hacker2Num) {
  console.log(
    `The driver has the longest characters ${hacker2}, with ${hacker2Num}`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Num} characters!`
  );
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const hacker1Spl = hacker1.split("");
console.log(hacker1Spl);

const hacker2Spl = hacker2.split("");
console.log(hacker2Spl);

//3.2  Print all the characters of the navigator's name, in reverse order
const reHacker1 = hacker1Spl.reverse();
const reHacker2 = hacker2Spl.reverse();

console.log(reHacker1.join(""));
console.log(reHacker2.join(""));

let newNavigator = hacker2.split("");
let newOrder = "";
for (let i = newNavigator.length - 1; i >= 0; i--) {
  newOrder += newNavigator[i];
}
console.log(newOrder);

//3.3 Depending on the lexicographic order of the strings, print:
const alWord = [hacker2, hacker1];
let Nom = alWord.sort();
if (Nom[0] === hacker1) {
  console.log(`The driver's ${hacker1} goes first`);
} else if (Nom[0] === hacker2) {
  console.log(` ${hacker2}, the navigator goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const phar =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in turpis in velit luctus facilisis eu vitae quam. Phasellus rhoncus vel ipsum in euismod. Maecenas lacus neque, gravida non dignissim vitae, vestibulum non metus. Sed sit amet tempus nibh, quis rutrum urna. Etiam dolor nisi, pharetra eu malesuada vel, dapibus quis lorem. Praesent cursus condimentum facilisis. Nullam malesuada interdum dapibus. Donec lobortis placerat est, eu dignissim lorem placerat non. In in nibh vitae felis fermentum scelerisque quis porttitor magna. Ut et auctor magna. Aliquam semper fermentum odio, eget sollicitudin ante. Integer consequat ipsum urna, non tempor magna luctus eu. Donec purus nulla, iaculis vel blandit sit amet, sodales sit amet risus. Ut non semper urna. Suspendisse at tellus vitae tellus egestas egestas. Aenean tincidunt turpis sit amet enim mattis varius. Etiam pellentesque iaculis mauris dignissim vulputate. Maecenas dignissim est nisl, in eleifend nulla rhoncus a. Nunc aliquet dui vitae nibh auctor, et vehicula orci luctus. Suspendisse ut bibendum erat. Cras non arcu urna. Nunc quis leo quis mauris mattis commodo a sit amet risus. Fusce venenatis neque dolor, sit amet molestie purus tincidunt et. Vivamus feugiat libero ut lorem mattis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae feugiat nunc, sit amet blandit lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit felis a augue consequat tincidunt. Etiam vel odio sit amet arcu porttitor rutrum. Quisque porta mollis fermentum. Suspendisse sed porta est. Vivamus tristique diam nec diam ultricies ultricies. Ut pretium, nunc sit amet blandit condimentum, sapien enim dapibus enim, vel fringilla mauris eros eget augue. Morbi efficitur elit iaculis varius vehicula. Donec gravida dui ac dui vehicula luctus. Phasellus in orci vitae tellus porttitor euismod. Nunc arcu lorem, feugiat et auctor eu, sagittis at ante. Aliquam vel aliquet diam. Nulla eget nisi at elit congue sodales ut in sem. Praesent porta magna in orci dapibus ultrices. Sed libero felis, laoreet ut iaculis sed, viverra sit amet magna. Nulla dictum pellentesque nisi sit amet finibus. Morbi porttitor, velit eget tempor aliquam, leo erat fermentum massa, et blandit nunc lectus vitae leo. Duis vel elit ullamcorper, tristique eros in, iaculis ipsum. Ut tortor mi, bibendum et sem a, semper rhoncus enim. Mauris eleifend molestie arcu, ac fermentum dolor placerat vel.";

const countWords = phar.split(" ");

console.log(`The number of words in the string is : ${countWords.length}`);

let count = 0;

for (let i = 0; i < phar.length; i++) {
  if (pahr[i] === et) {
    count++;
  }
}

// Bonus 2

function Palindrome(str) {
  let reOrder = /[\W_]/g;
  const fraseMin = str.toLowerCase().replace(reOrder, "");
  let invertStr = fraseMin.split("").reverse().join("");
  if (invertStr === fraseMin) {
    return true;
  } else {
    return false;
  }
}

console.log(Palindrome(readline()));
