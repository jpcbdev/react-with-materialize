import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

  <nav> 
    <div class="row">
      <a href="#" class="col l2 m2 s2 center-align left">
          <i class=" material-icons">
              language
          </i>
      </a>
            <div class="col l8 m8 center hide-on-small-only">
              <div class="container">
                <div class="row">
                 <a href="#"  class="col l4 m4">Sobre nosotros</a>
                 <a href="#"  class="col l4 m4">Sucursales</a>
                 <a href="#"  class="col l4 m4">Contacto</a>
                </div>
              </div>
            </div>
       <a href="#" class="col l2 m2 s2 center-align right ">
          <i class=" material-icons">
              account_circle
          </i>
       </a>
   </div>
  </nav>
    );
  }
}

export default App;
