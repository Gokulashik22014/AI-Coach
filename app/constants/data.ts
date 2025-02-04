export const questions=[
    {
      "level": "easy",
      "question": "What is the output of the following code? \nprint(2 * 3 + 4)",
      "options": ["10", "12", "8", "14"],
      "answer": "10"
    },
    {
      "level": "easy",
      "question": "Which keyword is used to define a function in Python?",
      "options": ["func", "def", "function", "lambda"],
      "answer": "def"
    },
    {
      "level": "easy",
      "question": "Which data type is used to store True or False values?",
      "options": ["int", "str", "bool", "float"],
      "answer": "bool"
    },
    {
      "level": "intermediate",
      "question": "What will the following code return? \nlist1 = [1, 2, 3]\nlist2 = list1\nlist2.append(4)\nprint(list1)",
      "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "[1, 2, 4]", "Error"],
      "answer": "[1, 2, 3, 4]"
    },
    {
      "level": "intermediate",
      "question": "What is the output of the following code? \nprint(type({1: 'a', 2: 'b'}))",
      "options": ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
      "answer": "<class 'dict'>"
    },
    {
      "level": "intermediate",
      "question": "Which of the following methods removes the last element from a list?",
      "options": ["remove()", "del()", "pop()", "discard()"],
      "answer": "pop()"
    },
    {
      "level": "intermediate",
      "question": "How do you open a file named 'data.txt' in write mode?",
      "options": ["open('data.txt', 'r')", "open('data.txt', 'w')", "open('data.txt', 'rw')", "open('data.txt')"],
      "answer": "open('data.txt', 'w')"
    },
    {
      "level": "hard",
      "question": "What is the result of this code? \ndef foo(x, lst=[]):\n    lst.append(x)\n    return lst\nprint(foo(1))\nprint(foo(2))",
      "options": ["[1], [2]", "[1], [1, 2]", "[1], [2, 1]", "Error"],
      "answer": "[1], [1, 2]"
    },
    {
      "level": "hard",
      "question": "What does the following code output? \ndef func(a, b=2, c=3):\n    return a + b * c\nprint(func(2, c=5))",
      "options": ["13", "16", "17", "Error"],
      "answer": "17"
    },
    {
      "level": "hard",
      "question": "What will the following code output? \nfrom itertools import permutations\nperm = permutations([1, 2, 3])\nprint(len(list(perm)))",
      "options": ["3", "6", "9", "Error"],
      "answer": "6"
    }
  ]