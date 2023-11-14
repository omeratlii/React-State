// kısayoldan fuctional component açmak için ffc kısayolunu kullandık.
import Porsche from "./images/porsche.jpg";
import Audi from "./images/audi.jpg";
import Mercedes from "./images/mercedes.jpg";
import Maserati from "./images/maserati.jpg";
import './Course.css';

//key ve value değerleri birbirine eşitse yani Audi:Audi demek yerine direkt Audi yazmak yeterli.
const courseMap = {
    Porsche,
    Audi,
    Mercedes,
    Maserati,
}

function Course({ courseName }) {
    console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="courseImage" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
