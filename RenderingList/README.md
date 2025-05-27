# 📋 ListGroup Component

The ListGroup component is a basic yet interactive React component that displays a list of cities with two main functionalities: item selection and search filtering.

- It allows users to click on a city name to select it, highlighting the selection and showing a confirmation message.

- Users can reset the selection with a button.

- It includes a search input that dynamically filters the list of cities as the user types, making it easy to find specific entries.

This component demonstrates fundamental React concepts like useState, event handling, conditional rendering, and list filtering — making it a great learning example for beginners.


# 🚀 Features
- Renders a list of predefined cities

- Highlights the selected city in red

- Displays a message showing the selected city

- Includes a Reset button to clear the selection

- Provides a search box to filter cities dynamically




# 📦 Installation
1. Clone this repository or copy the component into your React project.

2. Ensure React is installed (react, react-dom).

3. Import and use the component:

```
import ListGroup from './ListGroup';

function App() {
  return <ListGroup heading="City List" />;
}
```


# 🧩 Component Breakdown

```
<ListGroup heading="City List" />
```


| Prop    | Type   | Description              |
| ------- | ------ | ------------------------ |
| heading | string | The heading for the list |


# 🧠 How It Works
- City List: Renders a list of cities from an internal array.

- Selection: Click on a city to select it; the text turns red.

- Reset: Click the Reset button to deselect.

- Search: Filter the list using the search input (case-insensitive match).


# ✨ Example UI Behavior
- When nothing is selected:


```
NewYork
San Francisco
Tokyo
London
Paris
```

- After selecting "Tokyo":

```
[Tokyo turns red]
You selected: Tokyo
[Reset Button]
```


- After typing "Lon" in the search input:

```
London
```

# 🛠 Possible Improvements
- Move items to props to allow dynamic input.

- Style the component with a CSS module or styled-components.

- Add keyboard navigation or accessibility support.

- Debounce the search input for performance.



# 📝 Notes
- Two lists are rendered:

  - Full list with selection

  - Filtered list based on search input

- You might want to combine them for a cleaner UI in production.




# 📄 License
This component is free to use in personal or commercial projects.









