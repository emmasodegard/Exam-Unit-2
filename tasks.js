// Task: Functions are a popping
function square(n) {
  return n * n;
}

function inchesToMm(inches) {
  return inches * 25.4;
}

function sqrt(number) {
  if (number < 0) return NaN;
  let guess = number / 2;
  for (let i = 0; i < 10; i++) {
    if (guess === 0) break;
    guess = (guess + number / guess) / 2;
  }
  return guess;
}

function cube(n) {
  return n * n * n;
}

function circleArea(radius) {
  const pi = 3.14159;
  return pi * radius * radius;
}

function greeting(name) {
  return "Hello, " + name + "!";
}

console.log("Square of 5:", square(5));
console.log("5 inches in mm:", inchesToMm(5));
console.log("Square root of 25:", sqrt(25));
console.log("Cube of 3:", cube(3));
console.log("Area of a circle with radius 4:", circleArea(4));
console.log(greeting("Simonsen"));
console.log();



// Task: Flatten those numbers
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof item === 'number') {
      result.push(item);
    } else if (Array.isArray(item)) {
      let flattened = flattenArray(item);
      for (let j = 0; j < flattened.length; j++) {
        result.push(flattened[j]);
      }
    }
  }
  return result;
}

const nestedArray = [
  435,
  2028,
  [
    [
      3047, 4910, 8146,
      7999, 1433, 7211,
      1197, 6002
    ],
    2821,
    3508
  ]
];

console.log("Flattened array:", flattenArray(nestedArray));
console.log();



// Task: Left and right up and down, away we go.
function Node(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
}

function sumTree(node) {
  if (node === null) return 0;
  return node.value + sumTree(node.left) + sumTree(node.right);
}

function countNodes(node) {
  if (node === null) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}

function deepestLevel(node) {
  if (node === null) return 0;
  let leftDepth = deepestLevel(node.left);
  let rightDepth = deepestLevel(node.right);
  return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
}

const root = new Node(67,
  new Node(765),
  new Node(167,
    new Node(564, null, new Node(379)),
    null
  )
);

console.log("Tree Sum =", sumTree(root));
console.log("Tree Deepest Level =", deepestLevel(root));
console.log("Tree Nodes =", countNodes(root));
console.log();



// Task: My books they are a mess.
const books = [
  {
    title: "Meditations: A New Translation",
    publication_year: 2002,
    author: "Marcus Aurelius (Translated by Gregory Hays)",
    isbn: "978-0812968255"
  },
  {
    title: "Snuff",
    publication_year: 2011,
    author: "Terry Pratchett",
    isbn: "0-385-61823-5"
  },
  {
    title: "The Collapsing Empire",
    publication_year: 2017,
    author: "John Scalzi",
    isbn: "978-0765388889"
  },
  {
    title: "The Colour of Magic",
    publication_year: 1983,
    author: "Terry Pratchett",
    isbn: "0-86140-324-X"
  }
];

function booksStartingWithThe(books) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].title.substring(0, 3) === "The") {
      result.push(books[i]);
    }
  }
  return result;
}

function booksByAuthorWithT(books) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let author = books[i].author;
    if (author.indexOf('t') !== -1 || author.indexOf('T') !== -1) {
      result.push(books[i]);
    }
  }
  return result;
}

function countBooksAfterYear(books, year) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].publication_year > year) {
      count++;
    }
  }
  return count;
}

function countBooksBeforeYear(books, year) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].publication_year < year) {
      count++;
    }
  }
  return count;
}

function isbnsForAuthor(books, authorName) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === authorName) {
      result.push(books[i].isbn);
    }
  }
  return result;
}

function compareStrings(s1, s2) {
  let minLen = s1.length < s2.length ? s1.length : s2.length;
  for (let i = 0; i < minLen; i++) {
    if (s1.charCodeAt(i) < s2.charCodeAt(i)) return -1;
    if (s1.charCodeAt(i) > s2.charCodeAt(i)) return 1;
  }
  if (s1.length === s2.length) return 0;
  return s1.length < s2.length ? -1 : 1;
}

function sortBooksAlphabetically(books, ascending = true) {
  let sorted = books.slice();
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      let cmp = compareStrings(sorted[i].title, sorted[j].title);
      if ((ascending && cmp > 0) || (!ascending && cmp < 0)) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted;
}

function sortBooksChronologically(books, ascending = true) {
  let sorted = books.slice();
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (ascending && sorted[i].publication_year > sorted[j].publication_year) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
      if (!ascending && sorted[i].publication_year < sorted[j].publication_year) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted;
}

function getAuthorLastName(author) {
  let parenIndex = author.indexOf('(');
  if (parenIndex !== -1) {
    author = author.substring(0, parenIndex).trim();
  }
  let parts = author.split(' ');
  return parts.length > 0 ? parts[parts.length - 1] : author;
}

function groupBooksByAuthorLastName(books) {
  let groups = {};
  for (let i = 0; i < books.length; i++) {
    let lastName = getAuthorLastName(books[i].author);
    if (!groups[lastName]) {
      groups[lastName] = [];
    }
    groups[lastName].push(books[i]);
  }
  return groups;
}

function getAuthorFirstName(author) {
  let parenIndex = author.indexOf('(');
  if (parenIndex !== -1) {
    author = author.substring(0, parenIndex).trim();
  }
  let parts = author.split(' ');
  return parts.length > 0 ? parts[0] : author;
}

function groupBooksByAuthorFirstName(books) {
  let groups = {};
  for (let i = 0; i < books.length; i++) {
    let firstName = getAuthorFirstName(books[i].author);
    if (!groups[firstName]) {
      groups[firstName] = [];
    }
    groups[firstName].push(books[i]);
  }
  return groups;
}

console.log("Books starting with 'The':");
let booksWithThe = booksStartingWithThe(books);
for (let i = 0; i < booksWithThe.length; i++) {
  console.log(" -", booksWithThe[i].title);
}
console.log();

function booksByAuthorWithT(books) {
  let result = [];
  for (let i = 0; i < books.length; i++) {
    let authorFull = books[i].author;
    let mainAuthor = authorFull.split('(')[0].trim();
    if (mainAuthor.indexOf('t') !== -1 || mainAuthor.indexOf('T') !== -1) {
      result.push(books[i]);
    }
  }
  return result;
}
console.log("Books with 't' in the author's name:");
let booksWithT = booksByAuthorWithT(books);
for (let i = 0; i < booksWithT.length; i++) {
  console.log(" -", booksWithT[i].title, "by", booksWithT[i].author);
}
console.log();


console.log("Books after 1992:", countBooksAfterYear(books, 1992));
console.log("Books before 2004:", countBooksBeforeYear(books, 2004));
console.log();

console.log("ISBNs for Terry Pratchett:");
let isbns = isbnsForAuthor(books, "Terry Pratchett");
for (let i = 0; i < isbns.length; i++) {
  console.log(" -", isbns[i]);
}
console.log();

console.log("Books sorted alphabetically (ascending):");
let sortedAlpha = sortBooksAlphabetically(books, true);
for (let i = 0; i < sortedAlpha.length; i++) {
  console.log(" -", sortedAlpha[i].title);
}
console.log();

console.log("Books sorted chronologically (descending):");
let sortedChrono = sortBooksChronologically(books, false);
for (let i = 0; i < sortedChrono.length; i++) {
  console.log(" -", sortedChrono[i].title, "(", sortedChrono[i].publication_year, ")");
}
console.log();

console.log("Books grouped by author last name:");
let groupedLastName = groupBooksByAuthorLastName(books);
for (let lastName in groupedLastName) {
  console.log("Last Name:", lastName);
  for (let i = 0; i < groupedLastName[lastName].length; i++) {
    console.log("   -", groupedLastName[lastName][i].title);
  }
}
console.log();

console.log("Books grouped by author first name:");
let groupedFirstName = groupBooksByAuthorFirstName(books);
for (let firstName in groupedFirstName) {
  console.log("First Name:", firstName);
  for (let i = 0; i < groupedFirstName[firstName].length; i++) {
    console.log("   -", groupedFirstName[firstName][i].title);
  }
}
