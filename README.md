## JSX Basics

JSX, or JavaScript XML, is a syntax extension for JavaScript used with React to describe what the UI should look like. It looks similar to XML/HTML but ultimately gets transpiled to JavaScript.

Here's a basic example:

```jsx
// React component using JSX
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a basic example.</p>
    </div>
  );
};
```

In this example, `<div>`, `<h1>`, and `<p>` tags are used to describe the structure of the component. JSX makes it more concise and readable compared to creating elements using pure JavaScript.

You can also use JavaScript expressions within JSX using curly braces `{}`. Here's an example:

```jsx
const name = "John";
const greeting = <p>Hello, {name}!</p>;

// Output: <p>Hello, John!</p>
```

JSX allows you to embed dynamic values and expressions directly within the structure.

Additionally, you can use JSX in control structures like loops and conditionals:

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);

// Output: <ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
```

In this example, an array of numbers is mapped to create a list of `<li>` elements.

Remember that JSX needs to be transpiled to JavaScript before it can run in the browser. Tools like Babel are commonly used for this purpose in React projects.

***