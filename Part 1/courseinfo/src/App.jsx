const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  // 1.2: Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
  // Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

  // Step 1: Create the Part component
  const Part = ({ name, exercises }) => {
    return(
      <p>
        {name} {exercises}
      </p>
    )
  }

  // Step 2: Refactor the Content component
  //Instead of having <p> elements inside Content, we call Part three times:
  
 
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <>
    <Part name={part1} exercises={exercises1} />
    <Part name={part2} exercises={exercises2} />
    <Part name={part3} exercises={exercises3} />
    </>
  )
}
  
// Step 3: Refactor the App component
//Now, use Header, Content, and Total components properly:
const Header = ({ course }) => {
  return(
    <>
    <h1>{course}</h1>
    </>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return(
    <>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

  return (
    <div>
     <Header course={course}/>
     <Content 
     part1={part1} exercises1={exercises1}
     part2={part2} exercises2={exercises2}
     part3={part3} exercises3={exercises3}/>
     <Total/>
    </div>
  )
}

export default App

