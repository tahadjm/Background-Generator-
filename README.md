# JavaScript DOM Manipulation Project

This project is a simple **to-do list** application that demonstrates how to dynamically interact with a webpage using **JavaScript** and the **DOM (Document Object Model)**. Users can add new items to a list through a button or by pressing the "Enter" key.

## Features

- **Add New Items:**
  - Users can type an item into the input field and either click the "Click me!" button or press "Enter" to add it to the list.
  - If the input field is empty, an alert appears prompting the user to enter text.

- **Dynamic DOM Manipulation:**
  - New items are added as `<li>` elements to an existing `<ul>` list.
  - The input field is automatically cleared after adding an item.

- **Event Handling:**
  - Button clicks are handled using the `click` event.
  - Keyboard interactions are supported via the `keydown` event (specifically for the "Enter" key).
  - Input validation ensures only non-empty items are added.

## Technologies Used

- **HTML:** Defines the webpage structure, including headings, buttons, and the list.
- **CSS:** Adds styling to the webpage (optional; style.css included).
- **JavaScript:** Handles the interactivity and DOM manipulation.

## How to Run

1. Clone the repository or download the files.
2. Ensure the project contains the following files:
   - `index.html`: The main HTML file.
   - `style.css`: Optional styling file for the project.
   - `script.js`: JavaScript file containing the logic for the to-do list.
3. Open the `index.html` file in a web browser.

## Project Structure

. ├── index.html # Main HTML structure ├── style.css # (Optional) CSS for styling └── script.js # JavaScript logic for the application

## Usage

1. Open the application in a web browser.
2. Type an item into the input field.
3. Click the "Click me!" button or press "Enter" to add the item to the list.
4. The input field will clear automatically after adding an item.

## Learning Objectives

This project showcases:
- DOM traversal and manipulation.
- Handling user events (button clicks and keyboard input).
- Validating user input before performing actions.
- Clearing input fields programmatically.

## Future Improvements

- Add a delete button for each list item.
- Implement item editing functionality.
- Include persistent storage using **localStorage** or **sessionStorage**.

## License

This project is open-source and available under the [MIT License](LICENSE).
