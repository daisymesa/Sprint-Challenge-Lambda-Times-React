1) What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes document the intended types of properties that are passed on to components, and React cross-checks the props that are passed to the components, to make sure that they patch. PropTypes are important because they help React developers with catching bugs earlier in the development process.  

2) Describe a life-cycle event in React?
The life-cycle for React events consist of several stages: Mounting, which is when the component is being built from the ground up and data that will be need to be accessed is defined in the constructor, Updating, which is when setState can be used to to change a component's state, and Unmounting which is when a component is removed from the screen.

3) Explain the details of a Higher Order Component?
Higher Order Components can take a component and optional arguments and return an enhanced component of the input component.  In addition to using Higher Order Components for sharing information and improved functionality when writing React, they can also act as containers for other components.

4) What are three different ways to style components in React? Explain some of the benefits of each.
Three different ways of styling components in React include: using Reactstrap which allows to take advantage of the features of the Bootstrap library when setting our styles; we can also use Styled Components, which is a library for writing CSS directly in our JS files, which allows our styled components to be more reusable and versatile; or we can use plain CSS to style our components, which allows us to style them using the same methods we've used in the past to style any other type of file.