## ADDRESS BOOK APP

### TECHNOLOGIES

- **CREATE-REACT-APP**
- **YARN**
- **TYPESCRIPT**
- **REACT**
- **REACT HOOKS**
- **REACT-ROUTER**
- **REDUX**
- **REACT-INTERSECTION-OBSERVER**
- **AXIOS**
- **STYLED-COMPONENTS**
- **JEST**
- **REACT-TESTING-LIBRARY**

### SETUP

* **clone repo**: In your folder, open a new terminal and clone the repo
* **install dependencies**: Execute *yarn*
* **run local server**: Execute *yarn start*
* **create production files**: Execute *yarn build*
* **run test suites**: Execute *yarn test*

### DEVELOPMENT

First, I used CREATE-REACT-APP as build tool with YARN.

This app was mainly developed with React and Typescript. For the Styles, I used Styled Components.

The source files are in src folder that is composed of following folders:

* **components**: App components organized by the following folders:
    * **core**: Presentational components related to UI elements
    * **layout**: Presentational components related to the layout of the application
    * **pages**: Container components related to the pages of the application
- **services**: Api requests
- **store**: Global state by implementing reducers, actions and actionTypes
* **helpers**: Reusable values such as types, constants, and mocks
- **utils**: Supporting constants and models

### PERFORMANCE

In order to improve the performance of the application, I did the following:

- The HomePage loads all the images by using a lazyload by user scroll.
- I made the most of the UseCallback hook to improve the performace by memoizing some values...
- Nevertheless, the HomePage displays the stored images in Redux and if they are not available, they images are retrieved by consuming the request service.

### TESTING

I added unit tests to Layout and Core components with Jest and React-testing-library.


