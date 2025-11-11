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
  
// Place the objects into an array. 
// Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

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

  const Content = ({ part }) => {

    return(
      <>
      <Part name={part[0].name} exercise={part[0].exercises} />
      <Part name={part[1].name} exercise={part[1].exercises} />
      <Part name={part[2].name} exercise={part[2].exercises} />
      </>
    )
  }

  const Total = ({part}) => {

    return(
      <>
            <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>
      </>
    )
  }

  return (
    <div>
      <Header head={course} />
      <Content 
      part={parts} />
      <Total part={parts} />
    </div>
  )
}

export default App