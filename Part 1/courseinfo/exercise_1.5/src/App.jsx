const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

//  Change the course and its parts into a single JavaScript object. 
// Fix everything that breaks.

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
      <Header head={course.name} />
      <Content 
      part={course.parts} />
      <Total part={course.parts} />
    </div>
  )
}

export default App