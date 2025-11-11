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
  
// Modify the variable definitions of the App component as follows and also refactor the application so that it still works:

// "The only way to go fast, is to go well"

  const Header = ({head}) => {

    return(
      <>
      <h1>{head}</h1>
      </>
    )
  }

  const Part = ({name, exercise}) => {

    return(
      <> 
      <p>
      {name} {exercise}
    </p>
      </>
    )
  }

  const Content = ({ parts1, parts2, parts3 }) => {

    return(
      <>
      <Part name={parts1.name} exercise={parts1.exercises} />
      <Part name={parts2.name} exercise={parts2.exercises} />
      <Part name={parts3.name} exercise={parts3.exercises} />
      </>
    )
  }

  const Total = ({parts1, parts2, parts3}) => {

    return(
      <>
            <p>Number of exercises {parts1.exercises + parts2.exercises + parts3.exercises}</p>
      </>
    )
  }

  return (
    <div>
      <Header head={course} />
      <Content 
      parts1={part1} 
      parts2={part2} 
      parts3={part3} />
      <Total parts1={part1} 
      parts2={part2} 
      parts3={part3}/>
    </div>
  )
}

export default App