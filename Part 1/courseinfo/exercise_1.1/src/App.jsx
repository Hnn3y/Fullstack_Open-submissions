const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
// Refactor the code so that it consists of three new components: Header, Content, and Total. 
// All data still resides in the App component, which passes the necessary data to each component using props. 
// Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises 
// and Total renders the total number of exercises.

  const Header = ({head}) => {

    return(
      <>
      <h1>{head}</h1>
      </>
    )
  }

  const Content = ({p1, p2, p3, e1, e2, e3}) => {

    return(
      <>
      <p>
        {p1} {e1}
      </p>
      <p>
        {p2} {e2}
      </p>
      <p>
        {p3} {e3}
      </p>
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
      p1= {part1} e1={exercises1} 
      p2= {part2} e2={exercises2} 
      p3= {part3} e3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App