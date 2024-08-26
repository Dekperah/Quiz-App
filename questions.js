let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},

  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Combined Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  
  {
    numb: 3,
    question: "What is the output of 2 + '2' in JavaScript?",
    answer: "22",
    options: [
      "4",
      "22",
      "undefined",
      "error"
    ]
  },

  {
    numb: 4,
    question: "How can you add an event listener to an element in JavaScript?",
    answer: "element.addEventListener('click', function() { });",
    options: [
      "element.onClick = function() { };",
      "element.addEvent('click', function() { });",
      "element.click(function() { });",
      "element.addEventListener('click', function() { });"
    ]
  },

  {
    numb: 5,
    question: "What does the parseInt function do in JavaScript?",
    answer: "Converts a string to an integer",
    options: [
      "Parses an integer from a string",
      "Converts an integer to a string",
      "Parses a string to a float",
      "Converts a string to an integer"
    ]
  },

  {
    numb: 6,
    question: "Which tag is used to define a section in a document?",
    answer: "div",
    options: [
      "section",
      "div",
      "article",
      "header"
    ]
  },

  {
    numb: 7,
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    options: [
      "Hyperlink and Text Markup Language",
      "Hightext Markup Language",
      "Hypertext Markup Language",
      "Hypertext Machine Language"
    ]
  },

  {
    numb:8,
    question: "Which HTML element is used to define the title of a document?",
    answer: "<title>",
    options: [
      "<meta>",
      "<title>",
      "<header>",
      "<head>"
    ]
  },

  {
    numb: 9,
    question: "How do you insert a comment in HTML?",
    answer: "<!-- comment -->",
    options: [
      "// comment",
      "/* comment */",
      "# comment",
      "<!-- comment -->"
    ]
  },

  {
    numb: 10,
    question: "Which HTML attribute specifies an alternate text for an image?",
    answer: "alt",
    options: [
      "title",
      "src",
      "alt",
      "href"
    ]
  },

  {
    numb: 11,
    question: "What does the z-index property control in CSS?",
    answer: "The stacking order of elements",
    options: [
      "The font size of text",
      "The color of text",
      "The stacking order of elements",
      "The margin of elements"
    ]
  },

  {
    numb: 12,
    question: "How do you make a list appear horizontal instead of vertical?",
    answer: "Set display: inline; on <li> elements",
    options: [
      "Set display: block; on <li> elements",
      "Set float: left; on <li> elements",
      "Set display: inline; on <li> elements",
      "Both A and C"
    ]
  },

  {
    numb: 13,
    question: "Which property is used to add space inside an element, between its border and content?",
    answer: "padding",
    options: [
      "padding",
      "margin",
      "border-spacing",
      "spacing"
    ]
  },

  {
    numb: 14,
    question: "How do you center text horizontally in CSS?",
    answer: "text-align: center;",
    options: [
      "text-align: middle",
      "align: center",
      "text-align: center;",
      "center: text"
    ]
  },

  {
    numb: 15,
    question: "How do you select an element with the ID header using JavaScript?",
    answer: "document.getElementById('header')",
    options: [
      "document.querySelector('#header')",
      "document.getElementById('header')",
      "document.select('#header')",
      "document.getElementByClass('header')"
    ]
  },

  {
    numb: 16,
    question: "Which JavaScript keyword is used to declare a variable that can be re-assigned?",
    answer: "let",
    options: [
      "const",
      "var",
      "static",
      "let"
    ]
  },

  {
    numb: 17,
    question: "What is the purpose of the return statement in a function?",
    answer: "To exit the function and optionally return a value",
    options: [
      "To call another function",
      "To create a new variable",
      "To display a message",
      "To exit the function and optionally return a value"
    ]
  },

  {
    numb: 18,
    question: "How do you add an event listener to an HTML element in JavaScript?",
    answer: "element.addEventListener('event', function)",
    options: [
      "element.addEventListener('event', function)",
      "element.on('event', function)",
      "element.attachEvent('event', function)",
      "element.add('event', function)"
    ]
  },

  {
    numb: 19,
    question: "Which HTML attribute can be used to add inline CSS styles?",
    answer: "style",
    options: [
      "class",
      "style",
      "id",
      "href"
    ]
  },

  {
    numb: 20,
    question: "How do you create a CSS class?",
    answer: ".classname { ... }",
    options: [
      ".classname { ... }",
      "#classname { ... }",
      "classname { ... }",
      "class classname { ... }"
    ]
  },

  {
    numb: 21,
    question: "What is the default value of the position property in CSS?",
    answer: "static",
    options: [
      "static",
      "relative",
      "fixed",
      "state "
    ]
  },

  {
    numb: 22,
    question: "Which HTML element is used to define a hyperlink?",
    answer: "<a>",
    options: [
      "<href>",
      "<a>",
      "<hef>",
      "<link>"
    ]
  },

  {
    numb: 23,
    question: "How do you create a list of items in HTML?",
    answer: "Both B and C",
    options: [
      "<list> and <item>",
      "<ol> and <li>",
      "<ul> and <li>",
      "Both B and C"
    ]
  },

  {
    numb: 24,
    question: "Which tag is used to include JavaScript in an HTML document?",
    answer: "<script>",
    options: [
      "<js>",
      "<script>",
      "<javascript>",
      "<code>"
    ]
  },

  {
    numb: 25,
    question: "What does the <meta> tag in HTML define?",
    answer: "Metadata about the HTML document",
    options: [
      "The body of the HTML document",
      "The footer of the HTML document",
      "The main content of the HTML document",
      "Metadata about the HTML document"
    ]
  },

  {
    numb: 26,
    question: "Which property is used to change the background color in CSS?",
    answer: "background-color",
    options: [
      "color",
      "bgcolor",
      "background-color",
      "bg-color"
    ]
  },

  {
    numb: 27,
    question: "How do you apply a style to an HTML element with an ID of header?",
    answer: "#header { ... }",
    options: [
      ".header { ... }",
      "*header { ... }",
      "#header { ... }",
      "+header { ... }"
    ]
  },

  {
    numb: 28,
    question: "Which CSS property controls the text size?",
    answer: "font-size",
    options: [
      "font-size",
      "text-size",
      "font-style",
      "text-style"
    ]
  },

  {
    numb: 29,
    question: "How do you select all <p> elements in CSS?",
    answer: "p { ... }",
    options: [
      ".p { ... }",
      "p { ... }",
      "#p { ... }",
      "*p { ... }"
    ]
  },

  {
    numb: 30,
    question: "Which property is used to set the space between lines of text?",
    answer: "line-height",
    options: [
      "letter-spacing",
      "word-spacing",
      "text-spacing",
      "line-height"
    ]
  },
];
