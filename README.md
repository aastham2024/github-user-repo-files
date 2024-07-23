# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Project Description

This project is a React app using JavaScript and JSX. The user can query a github user based on their username. The application retrieves up to 100 of the user's public github repositories. Github API pagination limits caused the limitation of 100 repositories. Clicking on any of the repositories lists all the file contents of that particular repo. 

vite was used to create the skeleton of the project. 

## Instructions to Run

```
cd github-user-repo-files
npm i
npm run dev
```