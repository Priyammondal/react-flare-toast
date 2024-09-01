# React Flare Toast

React Flare Toast is a simple and customizable toast component for React applications.

![./src/assets/react-flare-toast-demo.gif](https://github.com/Priyammondal/react-flare-toast/blob/main/src/assets/react-flare-toast-demo.gif)

## Installation

You can install React Flare Toast via npm:

```jsx
npm i react-flare-toast
```

## Usage

To use React Flare Toast in your React application, follow these steps:

Import the useToast hook and necessary styles in your component:

```jsx
import useToast from "react-flare-toast";
```

Initialize the useToast hook with your preferred position:

```jsx
const { Toast, triggerToast } = useToast("top-right");
```

#### Postions

- "top"
- "top-left"
- "top-right"
- "bottom"
- "bottom-left"
- "bottom-right"

Use Toast in your JSX to display toasts:

```jsx
return (
  <div className="App">
    {Toast}
    {/* Your other JSX content */}
  </div>
);
```

Trigger toasts using the triggerToast function:

```jsx
triggerToast({
  type: "success",
  message: "This is a success message!",
  duration: 3000,
});
```

#### Animations

You can specify an animation type for the toasts. The available animations are:

- "fade"
- "pop"
- "slide"

```jsx
triggerToast({
  type: "success",
  message: "This is a success message with a pop animation!",
  duration: 3000,
  animation: "pop",
});
```

## API

```jsx
useToast(position: PositionType)
```

This hook returns an object with the following properties:

- `Toast`: React element representing the toast container.
- `triggerToast(toastProps: toastProps)`: Function to trigger a toast with the specified properties.

`toastProps`
The triggerToast function accepts an object of type toastProps, which includes:

- type: Type of the toast (success, info, warning, error).
- message: Message to display in the toast.
- duration: Duration in milliseconds for which the toast should be displayed.
- animation (optional): Animation type for the toast (fade, pop, slide).

## Example

Here's a basic example of how to use React Flare Toast:

```jsx
import React from "react";
import useToast from "react-flare-toast";

function App() {
  const { Toast, triggerToast } = useToast("top-right");

  const handleButtonClick = () => {
    triggerToast({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
      animation: "slide",
    });
  };

  return (
    <div className="App">
      {Toast}
      <h1>Toast Component</h1>
      <button onClick={handleButtonClick}>Show Success</button>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License
