import React from 'react'
import './Style.css';

const Day4 = () => {
  return (
    <div>
        <h3>Question2:What is Context API?</h3>
        <p className='que1'>React context API is a react structurethat introduced with react v.16.3</p><br></br>
        <h3>Question3:What is the difference between callback and useCallback Hook ?</h3>
        <p>
          callback
          <ul className='items'>
            <li>callback is a function which is to be executed after another function has finished their execution.</li>
          </ul>
          useCallback
          <ul className='items'>
            <li>useCallback is a hook that return a memoized callback when a passed a function and list of dependencies that sets a parameter.</li>
            <li>useCallback is useful when a component is passing a callback to its child component in order to prevent the re-rendering.</li>
          </ul>
        </p><br></br>
        <h3>Question4:What is Props Drilling Concept and State Uplifting concept?</h3>
        <p>
          propDrilling
          <ul className='items'>
            <li>Props drilling referes to the process of passing data from the parent components to the final destination of child component and if there is nested comonent present in the child component then in order to passing the components from parent then other components present in the child components owing the props just to pass it down to the chain.This process is known as props drilling.</li>
            <li>To avoid prop drilling,it is recommended to use useContext hook which is based on context API and it works with mechnism of provider and consumer.</li>
          </ul>
          State upLifting
          <ul className='items'>
            <li>State upLifting - when several components needs to share same changing data then its is recommended to lift the shared data state up to their closed ancestor.</li>
            <li>So,if two child component uses same data from its parents component,then move the state to parent instead of maintaing local state in both of the child component.</li>
          </ul>
        </p><br></br>
        <h3>Question5:What is the difference between useEffect hook and useContext hook?</h3>
        <p>
          useEffect()
          <ul className='que1'>
            <li>useEffect hook allow us to implement the lifecycle methods in the functional components.</li>
            <li>CompoentDidMount(),componentDidUpdate() and compinentWillUnmount() methods gets triggered in the useEffect hook function.</li>
          </ul>
          useContext()
          <ul className='que1'>
            <li>useContext() hook allow us to work with react's context API which itself a mechanism to allow us to share data within its components tree without passing data through props.</li>
          </ul>
        </p><br></br>
        <h3>Question6:What are React Life cycles Explain each one with Example?</h3>
        <p className='que1'>Every react components has a lifecycles of its own.Lifecycle methods we used to monitored our components in different stages of the components existence.</p>
        <p className='que1'>Lifecycles has four phases that are mentioned below as:</p>
        <ul className='items'>
          <li>Initialization:In Initialization stage,the components is contructed wth the given props and default stage.This is done in the constructor of a components class.</li>
          <li>Mounting:Munting is the stage of rendering the JSX returned by the render method itself.In this stage,componentDidMount() methods gets called.</li>
          <li>updating:Updating is the stage where the state of the components is updated.In this stage,componentDidUpdate() method gets called.</li>
          <li>Unmounting:This is the final stage of the component lifecycle whre the component is removed from or destoryed from the browser page.In this stage componentWillUnmount() method gets called.</li>
        </ul>
    </div>
  )
}

export default Day4