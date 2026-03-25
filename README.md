## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: We get the element by id name using getElementById and 
get the element by class name getElementsByClassName. On contary we can get element both by id and class using querySelector if the number of class is plural then we use querySelectorAll which returns a nodelist.

### 2. How do you create and insert a new element into the DOM?
Answer: using createElement() we can create new element and after selecting the parent where we want to push the element. we use appendChild() to push the element.

### 3. What is Event Bubbling? And how does it work?
Answer: It is encountered when an event is triggered on a child element and it moves upward to its parent element up to the body it self.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Instead of adding multiple eventListeners we can simply trigger them by targeting them by adding an event listener to document itself, then using conditional statement we can get our desired o/p. When we have 10000 or infinite number of button to trigger with eventlistener we use thid method which saves code and also makes it light weight.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() this stops browser default behaviour, link opens in new tab we can stop it on the otherhand stopPropagation() stops the bubbling .
