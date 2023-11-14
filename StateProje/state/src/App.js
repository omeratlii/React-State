import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = ['Porsche', 'Audi', 'Mercedes', 'Maserati'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])

  //spread operatörü kullandık. 3 nokta (...) courses, daha öncekiler geçerli dedik.
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });


  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Araba Ekle</button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
