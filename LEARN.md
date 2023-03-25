# How to Build Notie :wrench:

Before we learn how to build **Notie**, we must first understand the concept behind it.
This single paged application accepts a user's note via an input element and saves it to the browser's storage using the localStorage API provided to us by the browser's window. It first checks if it has any saved value to the _Notes_[^1] key of the storage object. If it doesn't, it returns an empty array.

[^1]: **Notes** is the key used to identify all the notes as an array data in the storage.

### Pre Requisite

I expect you to have some knowledge on

- [ReactJs](https://reactjs.org/)
- [NextJS](https://nextjs.org/)

---

## Let's Begin

This web app is split into 5 main sections namely

- ### View

  > This displays all the saved notes in a flex-row style

- ### Preview

  > This displays one note at a time for preview

- ### Edit

  > This is where a user creates a new note that can be sent to the local storage

- ### EditNote

  > This is where a user can modify values of an existing note such as the color, title and body

  <a id="mode-top"></a>

- ### Top
  > This section holds the logo and the logoDecider[^2] for making actions neccessary specific to each Mode[^3] such as
  >
  > - creating a new note
  > - modifying an existing note
  > - exposing a note properties
  > - saving changes

[^2]: **logoDecider** is a function in the [Top](#mode-top) component that renders different action buttons depending on the mode of the application
[^3]: **Mode** is the display state of the application

## Components

All sections are react component that depend on the [Handle Notes](./components/HandleNote.js) file to get functions that would be used to Create, Read, Update or Delete data to/from the local storage. They are stored in the [components](./components/) folder

### Warning :warning:

While building your own flavour of _Notie_ there are some things you should know.

- localStorage is not accessible by default in NextJS, this is because the localStorage object is only accessible in the windows interface which can be gotten from the browser BUT NextJS runs from the server-side and not the client-side(the browser).
  So what do we do? we could call the window via a _useEffect_[^4] hook and update a state based on what we received from the the functions responsible for reading the value in the Notes key of the local storage. While that would work, it would become difficult to call the functions responsible for updating the value in the Notes key. So we have to make use of the dynamic import function given to us by NextJS to add the component(CardsSection) that needs the windows API indirectly to map data to the UI, this can be shown below

  ```
    import dynamic from "next/dynamic";

    const CardsSection = dynamic(() => import("../components/CardsSection"), {
    ssr: false,
    });
  ```

  The object which is the second argument in the dynamic funciton has a property with the key of **ssr**, this accepts a boolean value that decides if NextJS should render the page on the server-side or not. You can read more about dynamic imports [here](https://nextjs.org/docs/advanced-features/dynamic-import)

[^4]: The **useEffect** is a react hook that prevents a block of code from running during server-side rendering and only when the component mounts. You can read more about the useEffect hook [here](https://react.dev/reference/react/useEffect)
