import userEvent from '@testing-library/user-event';
import React, { Component } from 'react'
import Service from "../service/services";
import style from "../css/style.css";


import { Carousel } from "react-responsive-carousel";
import { logDOM } from '@testing-library/dom';
import Slider from 'infinite-react-carousel';

const fun = (dat, dat1,dat2,dat3) => {
  var str = dat
  var str1 = dat1
  if (d == undefined) {
    d = dat1
    dtitle = dat
    ddesc  = dat2
    dlogo = dat3
  }
  else if (d1 == undefined) {
    d1 = dat1
    d1title = dat
    d1desc  = dat2
    d1logo = dat3
  }
  else if (d2 == undefined) {
    d2 = dat1
    d2title = dat
    d2desc  = dat2
    d2logo = dat3
  }
  else if (d3 == undefined) {
    d3 = dat1
    d3title = dat
    d3desc  = dat2
    d3logo = dat3
  }
  else if (d4 == undefined) {
    d4 = dat1
    d4title = dat
    d4desc  = dat2
    d4logo = dat3
  }
  else if (d5 == undefined) {
    d5 = dat1
    d5title = dat
    d5desc  = dat2
    d5logo = dat3
  }
  var firstStringChar = str.charAt(7); //H
  if (firstStringChar == " ") {
    firstStringChar = "no"
  }
  console.log(d);
  return "column" + " " + firstStringChar + " " + "he";
}



var d;
var dtitle;
var  ddesc;
var dlogo;
var d1;
var d1title;
var  d1desc;
var d1logo;
var d2;
var d2title;
var  d2desc;
var d2logo;
var d3;
var d3title;
var  d3desc;
var d3logo;
var d4;
var d4title;
var  d4desc;
var d4logo;
var d5;
var d5title;
var  d5desc;
var d5logo;




export default class Page extends Component {
  constructor(pros) {
    super(pros)
    this.state = {
      users: [],
      pro: []
    };
  }
  componentDidMount() {
    Service.getPublicContent().then((response) => {
      this.setState({ users: response.data.features });
      // console.log("dfdsfsdf::"+JSON.stringify(this.state.users));

    })
  }
  render() {

    return (
      <div>
        <div class="row fadeshow">
          {
            this.state.users.map(user => (
              <div class={fun(user.title, user.image,user.desc,user.logo)}>
                <div id="text"> <img src={user.logo}/> {user.title} <hr></hr> {user.desc} </div>
                <img class="imghe" src={user.image} />
              </div>
            ))
          }
        </div>
        
        <div class="fadeshow1">
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container ">
                <div class="slide-image h">
                <div class="top" id="text1"> <img src={dlogo} />{dtitle} <hr></hr> <p >{ddesc}</p></div>
                <div class="q">
                  <img src={d}  id="t1" />
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-6" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image e">
                <div id="text1"> <img src={d1logo} />{d1title} <hr></hr> <p>{d1desc}</p></div>
                  <div>
                  <img src={d1} id="t1"/>
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-1" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li class="slide-container">
                <div class="slide-image t">
                <div id="text1"> <img src={d2logo} />{d2title} <hr></hr> <p>{d2desc}</p></div>
                  <div>
                  <img src={d2} id ="t1"/>
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-4" />
              <li class="slide-container">
                <div class="slide-image m">
                <div id="text1"> <img src={d3logo} />{d3title} <hr></hr> <p>{d3desc}</p></div>
                  <div>
                  <img src={d3} id="t1"/>
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-5" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-5" />
              <li class="slide-container">
                <div class="slide-image l">
                <div id="text1"> <img src={d4logo} />{d4title} <hr></hr> <p>{d4desc}</p></div>
                  <div>
                  <img src={d4} id="t1"/>
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-4" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-6" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-6" />
              <li class="slide-container">
                <div class="slide-image no">
                <div id="text1"> <img src={d5logo} />{d5title} <hr></hr> <p>{d5desc}</p></div>
                  <div>
                  <img src={d5} id="t5"/>
                  </div>
                </div>
                <div class="carousel-controls">
                  <label for="img-5" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
                <label for="img-4" class="carousel-dot" id="img-dot-4"></label>
                <label for="img-5" class="carousel-dot" id="img-dot-5"></label>
                <label for="img-6" class="carousel-dot" id="img-dot-6"></label>
              </div>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}