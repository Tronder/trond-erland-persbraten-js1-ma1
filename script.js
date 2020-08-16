// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

// question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question 6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p>New paragraph</p>";

resultContainer.style.backgroundColor = "yellow";

// question 7
// ***from script.js NoroffFEU repo:
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];
// ***
// Answer:

function listNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listNames(cats);

// question 8

function createCats(cats) {
  let listCats = "";

  for (let i = 0; i < cats.length; i++) {
    //console.log(cats[i]);
    let catAge = "Age Unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    listCats = listCats + "<h5>" + cats[i].name + "</h5><p>" + catAge + "</p>";
  }

  const finalHtml = "<div>" + listCats + "</div>";

  return finalHtml;
}

createCats(cats);
