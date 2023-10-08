const wordList = [
    {
      word: "variable",
      hint: "What do you call a container for storing data in a program?"
    },
    {
      word: "function",
      hint: "What is a reusable block of code that performs a specific task?"
    },
    {
      word: "loop",
      hint: "What programming construct allows you to repeat a set of instructions multiple times?"
    },
    {
      word: "array",
      hint: "What data structure is used to store a collection of elements, typically of the same type?"
    },
    {
      word: "string",
      hint: "What data type is used to represent text in programming?"
    },
    {
      word: "boolean",
      hint: "What data type has only two possible values: true or false?"
    },
    {
      word: "if statement",
      hint: "What control structure allows you to make decisions in your code?"
    },
    {
      word: "comment",
      hint: "What is used to add explanatory notes to your code for human readers?"
    },
    {
      word: "parameter",
      hint: "What is a variable in a method definition that receives a value when the method is called?"
    },
    {
      word: "argument",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "HTML",
      hint: "What markup language is used for creating web pages?"
    },
    {
      word: "CSS",
      hint: "What style sheet language is used for styling web pages?"
    },
    {
      word: "JavaScript",
      hint: "What scripting language is commonly used for web development?"
    },
    {
      word: "DOM",
      hint: "What does DOM stand for in the context of web development?"
    },
    {
      word: "algorithm",
      hint: "What is a step-by-step procedure for solving a problem?"
    },
    {
      word: "IDE",
      hint: "What acronym stands for Integrated Development Environment?"
    },
    {
      word: "syntax",
      hint: "What refers to the rules governing the structure of code in a programming language?"
    },
    {
      word: "debugging",
      hint: "What is the process of finding and fixing errors in code?"
    },
    {
      word: "compiler",
      hint: "What is a program that translates code written in one programming language into another language?"
    },
    {
      word: "variable declaration",
      hint: "What is the process of creating a new variable in code?"
    },
    {
      word: "API",
      hint: "What acronym stands for Application Programming Interface?"
    },
    {
      word: "data type",
      hint: "What classifies values to determine what kind of data they can hold?"
    },
    {
      word: "operator",
      hint: "What is a symbol or keyword used in programming to perform operations on variables and values?"
    },
    {
      word: "debugger",
      hint: "What tool is used to step through code and examine its state during execution?"
    },
    {
      word: "syntax error",
      hint: "What type of error occurs when code violates the rules of the programming language?"
    },
    {
      word: "camelCase",
      hint: "What naming convention is commonly used in JavaScript for variable names?"
    },
    {
      word: "concatenation",
      hint: "What is the process of combining two or more strings together?"
    },
    {
      word: "parameter",
      hint: "What is a variable in a method definition that receives a value when the method is called?"
    },
    {
      word: "return statement",
      hint: "What statement is used to specify the value that a function should return?"
    },
    {
      word: "function call",
      hint: "What is the process of executing a function in your code?"
    },
    {
      word: "conditional statement",
      hint: "What type of statement allows you to execute different code based on a condition?"
    },
    {
      word: "iteration",
      hint: "What is the repetition of a process in coding?"
    },
    {
      word: "array index",
      hint: "What is used to access an element within an array?"
    },
    {
      word: "object",
      hint: "What is a data structure that stores data and methods that operate on that data?"
    },
    {
      word: "property",
      hint: "What is a key-value pair associated with an object?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "algorithm",
      hint: "What is a step-by-step procedure for solving a problem?"
    },
    {
      word: "API",
      hint: "What acronym stands for Application Programming Interface?"
    },
    {
      word: "data type",
      hint: "What classifies values to determine what kind of data they can hold?"
    },
    {
      word: "operator",
      hint: "What is a symbol or keyword used in programming to perform operations on variables and values?"
    },
    {
      word: "debugger",
      hint: "What tool is used to step through code and examine its state during execution?"
    },
    {
      word: "syntax error",
      hint: "What type of error occurs when code violates the rules of the programming language?"
    },
    {
      word: "camelCase",
      hint: "What naming convention is commonly used in JavaScript for variable names?"
    },
    {
      word: "concatenation",
      hint: "What is the process of combining two or more strings together?"
    },
    {
      word: "parameter",
      hint: "What is a variable in a method definition that receives a value when the method is called?"
    },
    {
      word: "return statement",
      hint: "What statement is used to specify the value that a function should return?"
    },
    {
      word: "function call",
      hint: "What is the process of executing a function in your code?"
    },
    {
      word: "conditional statement",
      hint: "What type of statement allows you to execute different code based on a condition?"
    },
    {
      word: "iteration",
      hint: "What is the repetition of a process in coding?"
    },
    {
      word: "array index",
      hint: "What is used to access an element within an array?"
    },
    {
      word: "object",
      hint: "What is a data structure that stores data and methods that operate on that data?"
    },
    {
      word: "property",
      hint: "What is a key-value pair associated with an object?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    },
    {
      word: "parameter",
      hint: "What is a value passed to a function when it is invoked?"
    },
    {
      word: "method",
      hint: "What is a function associated with an object?"
    },
    {
      word: "class",
      hint: "What is a blueprint for creating objects in object-oriented programming?"
    },
    {
      word: "constructor",
      hint: "What is a special method used to initialize objects in a class?"
    },
    {
      word: "inheritance",
      hint: "What is a mechanism in which one class acquires the properties and behaviors of another class?"
    },
    {
      word: "encapsulation",
      hint: "What is the concept of bundling data and methods that operate on that data into a single unit?"
    },
    {
      word: "interface",
      hint: "What is a contract that specifies a set of methods that a class must implement?"
    },
    {
      word: "instance",
      hint: "What is an individual object created from a class?"
    }
  ];
  
