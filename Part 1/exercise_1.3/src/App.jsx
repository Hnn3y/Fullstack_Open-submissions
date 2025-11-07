const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
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
  
 
const Content = ({ part1, part2, part3, }) => {
  return (
    <>
    <Part name={part1.name} exercises={part1.exercises} />
    <Part name={part2.name} exercises={part2.exercises} />
    <Part name={part3.name} exercises={part3.exercises} />
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
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )
}

  return (
    <div>
     <Header course={course}/>
     <Content 
     part1={part1}
     part2={part2}
     part3={part3}/>
     <Total/>
    </div>
  )
}

export default App

