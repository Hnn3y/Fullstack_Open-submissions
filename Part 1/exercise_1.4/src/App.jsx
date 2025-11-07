const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
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
  
 
const Content = ({ parts }) => {
  return (
    <>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
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

const Total = ({ parts }) => {
  return(
    <>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
}

  return (
    <div>
     <Header course={course}/>
     <Content
     parts={parts}/>
     <Total parts={parts}/>
    </div>
  )
}

export default App

