Q-1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are given bellow-

document.getElementById("id") : It can tSelects a single element with the given id,returns the element object or null if not found,IDs must be unique in the page.

document.getElementsByClassName("className"): Selects all elements with the given class,returns a live HTMLCollection (updates if DOM changes),it needs to loop through it to access multiple elements.

document.querySelector("selector"): It Selects the first element that matches the CSS selector Example: document.querySelector(".myClass"), document.querySelector("#myId").

document.querySelectorAll("selector"): It Selects all elements that match the CSS selector,returns a static NodeList (does not auto-update) and supports modern CSS selectors.



                             <!-- 2nd Qs -->



Q-2: How to create and insert a new element into the DOM?

Ans: Create the element:- document.createElement("tagName") then (Optional) Add text, attributes, or classes, then append or insert into the DOM

exmple:  const newDiv = document.createElement("div");   
newDiv.textContent = "Hello World!";          
newDiv.className = "greeting";                

document.body.appendChild(newDiv);            


                        <!-- 3rd Question -->


Q-3: What is Event Bubbling and how does it work?

Ans: Event Bubbling means when an event happens on a child element, it first runs on that element, then bubbles up to its parent, grandparent, and so on until it reaches document.



                       <!-- 4th Question -->


Q-4: What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means attaching one event listener to a parent element to handle events for its child elements, instead of attaching listeners to each child separately, uses event bubbling to detect which child triggered the event

It is useful because,
Improves performance (fewer listeners),Works for dynamically added elements (no need to re-attach).Cleaner, easier to code.


                              <!-- 5th Question -->


Q-5: Difference between preventDefault() and stopPropagation().

Ans: event.preventDefault():- It Prevents the default action of an element from happening.
like it Stops a form from submitting, a link from navigating.

event.stopPropagation():- Prevents the event from bubbling up to parent elements.

we can say like:  A click won’t trigger handlers on ancestors.




                                <!-- This is the end -->