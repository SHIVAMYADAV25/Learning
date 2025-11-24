## strongly typed language

# Examples - Java, C++, C, Rust

# Benefits - 
- Lesser runtime errors
- Stricter codebase
- Easy to catch errors at compile time

# Code doesn’t work ❌

#include <iostream>

int main() {
  int number = 10;
  number = "text";
  return 0;
}

# how it runs:

- g++ ./a.cpp  converts into =>  a.out
- while coverting it checks error called as compiler error
- after that it get convert into 0 and 1 it runs after this there may be runtime erro
-./stronlyandlossly.png


## Loosely typed languages

# Examples - Python, Javascript, Perl, php

# Benefits
- Easy to write code
- Fast to bootstrap
- Low learning curve

# Code does work ✅

function main() {
  let number = 10;
  number = "text";
  return number;
}

# how it runs:

-no compiler error only runtime error

# People realised that javascript is a very power language, but lacks types. Typescript was introduced as a new language to add types on top of javascript.

