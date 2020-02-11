# hosts-app

Web app showing boxes with information sortered done without framework and applying oop pattern. I've used typescript for many reasons but basically because it give me more confidence and for me I develop faster.

## Installation

```
npm install
```

## Start application

```
npm start
```

## Test

```
npm test or npm run test:watch
```

## Folder structure of src:

- src/@types (types definition of typscript)
- src/components (classes to create the DOM elements)
- src/services (main hosts service responsible to manage data layer)
  - test
  - views (service to create append elements to the DOM)
- src/statics (index.html and styles.css statics files)
- src/utils (so far a polyfill function for instantiation of polyfills if it is necessary)

## Hosts service

- The main idea of this service is to create from a json structure given a data structure data based on an object. Each property of this object is the name of the hosts. The reason to do this is because we can access the information of one host specifically without iterating into an array.
- The method getTopAppsByHost is the responsable to sorting the application by apdex before returning the object. In this way when we add or remove an application to the host we receive the applications resorted.
- I've used a quickSort algorithm for the sorting method of application in order to be as performant as possible.

## DOM elements

- Each web element created for the application is done by classes. There is a parent class that instantiates the properties and has the render method. Each child component has the responsibility to create and append his elements.
