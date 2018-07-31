import React, { Component } from 'react';
import im1 from './img/01.jpg';
import im2 from './img/02.jpg';
import im3 from './img/03.jpg';


class Section extends Component {

  render() {
    return (
    <section>
        <div class="row">
            <div class="col l12 m12 s12 ">

                <div class="slider">
                    <ul class="slides">
                        <li>
                            <img src={im1}/>
                            <div class="caption left-align">
                                <h3>Lorem ipsum</h3>
                                <h5 class="light grey-text text-lighten-3">Lorem ipsum</h5>
                            </div>
                        </li>
                        <li>
                            <img src={im2}/>
                            <div class="caption left-align">
                                <h3>Lorem ipsum</h3>
                                <h5 class="light grey-text text-lighten-3">Lorem ipsum</h5>
                            </div>
                        </li>
                        <li>
                            <img src={im3}/>
                            <div class="caption left-align">
                                <h3>Lorem ipsum</h3>
                                <h5 class="light grey-text text-lighten-3">Lorem ipsum</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
    );
  }
}

export default Section;
