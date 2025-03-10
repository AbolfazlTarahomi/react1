import Header from "./Header";
import About from "./About";
import Student from "../src/Student"
export default function Home() {

  let courseOne = {
    title : "COURSE11",
    details : "About COURSE11"
  }

  return (
    <div>
      <h1>WELCOME</h1>
      <Header />
      <About />
      <Student name="Ali" Age={20}/>
      <hr />

      <Student course = {courseOne}/>

    </div>
  );
}
