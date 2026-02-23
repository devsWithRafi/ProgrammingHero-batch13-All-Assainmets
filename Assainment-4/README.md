# Answers to Questions

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

### **Answer:**

The difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll` is its depend on what we need or what type of opparetion we want to perform.

`getElementById` is used for select a single element from DOM using its unique ID and the id is unique thats why this method returns a single element.

**Example:**

```js
const element = document.getElementById('element-id');
```

And the `getElementsByClassName` is used for selecting all the elements that contain the same className, This method returns multiple/all element that have the same className.

**Example:**

```js
const elements = document.getElementsByClassName('class-name');
```

On the other hand `querySelector` and `querySelectorAll` are more modern and flexible methods, This methods allow us to use CSS selector.

- `querySelector` Returns the first element that match the className/Id
- `querySelectorAll` Returns all the element that match the className

**Example:**

```js
const firstElement = document.querySelector('.class-name');
// we can use id as well
const firstElementById = document.querySelector('#id-name');
const allElements = document.querySelectorAll('.class-name');
```

## 2. How do you `create` and `insert` a new element into the DOM?

### **Answer:**

For create and inster a new element into DOM we will use `document.createElement()` method to create the element and then we will use `appendChild()` method for insert the element into parent element.

**Example:**

_HTML_

```html
<section id="parent"></section>
```

_Javascript_

```js
// Create new element
const newElement = document.createElement('div');

// Select the parent element
const parentElement = document.querySelector('#parent');

// Insert the new element
parentElement.appendChild(newElement);
```

## 3. What is `Event Bubbling`? And how does it work?

### **Answer:**

Event Bubbling is a concept of DOM its means that when we click on a element the event first happens on that element and then it will move up to its parent element, Its one kind of like the event bubbling up from the inside element to outside element

**Example:**

_HTML_

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

_Javascript_

```js
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', () => {
    console.log('Parent clicked');
});

child.addEventListener('click', () => {
    console.log('Child clicked');
});
```

So if we click the button it will console.log the `Child clicked` first and then `Parent clicked`

## 4. What is `Event Delegation` in JavaScript? Why is it useful?

### **Answer:**

Sorry i have no idea about this topic 😓

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

### **Answer:**

The difference between `preventDefault()` and `stopPropagation()` is the `preventDefault()` method stops the browsers default behaviors and the `stopPropagation()` method stops the event moving /bubbling to parent element.

**Example:**

**🔹 `preventDefault()`**

The `preventDefault()` method is used to prevent the default actions of a element, for example when we submitting a form the browser reloads the page by default and its lost our forms data or states, So to stop the browsers default behaviors we can use `preventDefault()`

_Example of Form Submission_

```html
<form id="myForm">
    <input type="text" />
    <button type="submit">Submit</button>
</form>
```

```js
const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted without reloading');
});
```

**🔹 `stopPropagation()`**

The `stopPropagation()` method is used to stops the event bubbling problems. For example we want like when we click the popup/modal overlay the popup should be close, But when we click anything inside the popup the popup is closed but we dont want that, to solve this we can use `stopPropagation()` method.

_Example of Modal / Popup_

```html
<div id="overlay">
    <div id="modal">
        <p>Modal Content</p>
    </div>
</div>
```

```js
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');

overlay.addEventListener('click', () => {
    console.log('Modal closed');
});

modal.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop the event bubbling
});
```



---
<p align='center'>The End</p>

---