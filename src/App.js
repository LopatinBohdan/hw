import logo from './logo.svg';
import './App.css';
import React from "react";
import { Person }  from './person'
import { City } from './city';

function Hello(){
  return <h1>Hello, React</h1>
}

function PersonInfo(){
  let person=new Person("MyName", "444444", "myMail@google.com");
  
  return <div>
    <h1>Person Info</h1>
      <ul><b>{person.name}</b>
       <li>phone: {person.phone}</li>
       <li>mail: {person.mail}</li>
      </ul>
  </div>
}
function CityInfo(){
  let city=new City("City", "Country", "987", ["/img1.jpg", "/img2.jpg", "/img3.jpg"])
  let arr=[];
  city.photos.forEach(el=>{arr.push(<div class="box"><img src={el}></img><br></br></div>)})

  return <div>
    <h1>{city.cityName}</h1>
    <p>Country: {city.country}</p>
    <p>Was found: {city.wasFound}</p>
    <p><b>Photos</b></p>
    <div class="wrapper">
      {arr}
    </div>
  </div>
}

function App() {
  return (
    <>
    <div class="myBody">
      <Hello></Hello>
      <hr></hr>
      <PersonInfo></PersonInfo>
      <hr></hr>
      <CityInfo></CityInfo>
      <hr></hr>
    </div>
    </>
  );
}

export default App;
