const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
// Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

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

  const Content = ({parts1, exercise1, parts2, parts3, exercise2, exercise3}) => {

    return(
      <>
      <Part name={parts1} exercise={exercise1} />
      <Part name={parts2} exercise={exercise2} />
      <Part name={parts3} exercise={exercise3} />
      </>
    )
  }

  const Total = ({exercises1, exercises2, exercises3}) => {

    return(
      <>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </>
    )
  }

  return (
    <div>
      <Header head={course} />
      <Content 
      parts1={part1} exercise1={exercises1} 
      parts2={part2} exercise2={exercises2}
      parts3={part3} exercise3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App