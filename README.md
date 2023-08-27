# Trivia App

## Usage

You can play with the application yourself at [this link](https://bju12290.github.io/trivia-app/).

On the home screen you'll be introduced to a brief description of the project. You can press the "Start" button to begin a game, and questions will begin to be served to you. After you answer 5 questions, your score will be shown back to you, and you'll be presented with the opportunity to play again.

You can use the switch in the top right corner to toggle between Dark Mode and Light Mode.

If you want to restart, at any time you can click the logo in the Navigation Bar and you'll be taken back to the homepage.

## Visuals

#### Dark Mode/Light Mode Toggle
![DarkMode/LightMode Toggle](https://imgur.com/hEDudVE)
#### A Typical Playthrough
![Playthrough](https://imgur.com/bCLGbGs)
#### Possible Final Score Screens

##### Score of 0
![Better Luck Next Time FinalScore Screen](url_to_your_gif.gif)
##### Score of less than 3
![Not Bad FinalScore Screen](https://imgur.com/wY0MVOk)
##### Score of 3 or more
![Congratulations FinalScore Screen](https://imgur.com/pRzNZpr)
##### Perfect Score
![Perfect Score FinalScore Screen](https://imgur.com/CfWkGjS)

## Technologies Used
 - [Vite](https://vitejs.dev/): A build tool that offers fast development and optimized production builds for modern web applications.
 - [React](https://react.dev/): A JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive components.
 - [Bootstrap](https://getbootstrap.com/): A front-end framework that provides pre-designed UI components and responsive layout utilities.
 - [React Router](https://reactrouter.com/en/main): A routing library for React applications, enabling navigation between different pages and views.
 - [React Confetti](https://www.npmjs.com/package/react-confetti): A React component for adding confetti animations to celebrate special moments.
 - [React Use](https://www.npmjs.com/package/react-use): A collection of essential React hooks for common use cases and functionalities.
 - [he](https://www.npmjs.com/package/he): A JavaScript library for HTML entity encoding and decoding.

 ## Project Structure
- **'components/'**: This directory serves as a container for both reusable components and the major page designs that are used throughout the application. Each subfolder within the **'components/'** directory corresponds to a unique component, containing the component's JavaScript file and its associated styling. Notably, the **Start**, **Quiz**, and **FinalScore** components are higher-level components that function as pages within the application.
- **'src/'**: At the heart of the application, the **'src/'** directory houses various project assets, the **index.jsx** file for routing and high-level structure definition, and the **styles.css** file for application-wide styling.
    - **'assets/'**: This directory is dedicated to storing the project's assets, such as images, icons, and other media resources.
    - **'index.jsx'**: Within this file, the routing and overall structure of the application are defined. Additionally, this is where the rendering of the application into the DOM occurs.
    - **'styles.css'**: The **'styles.css'** file plays a dual role in the application. It is responsible for managing application-wide styling, ensuring a cohesive look and feel. It also extends its reach to style the major page designs, (Start, Quiz, and FinalScore) contributing to a consistent user experience. 

 #### Contact Information

Feel free to contact via email! 

```brian.phartnettjr@gmail.com```
 #### Known Issues
 
 - No known issues at this time. If you find one let me know! :)

 #### Project Goals

- Two screens (start & question):white_check_mark:
- Pull 5 Questions from the OTDB API:white_check_mark:
- Tally correct answers after "Check answers" is clicked:white_check_mark:

#### Additional Challenges

- Light Mode/Dark Mode Toggle :white_check_mark:



 

