import React from 'react';

function Card(props) {
  return (
    <div>
          <div class="card mb-3 shadow-lg" style={{maxWidth: 'fill'}}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={"./img/" +props.imgName} class="card-img" alt="..."></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
    }

    export default Card;


//img src="./img/star_wars_2.jpg"
