import React from 'react';
import Slider from './Slider'
import Card from './Card'
import FeaturedCard from './FeaturedCard'

function Home(){
  return(
    <div>

      <div class="container">
        <Slider />
      </div>

      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <Card imgName="star_wars_1.jpg" />
          </div>
          <div class="col">
            <Card imgName="star_wars_2.jpg"/>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Card imgName="star_wars_4.jpg" />
          </div>

          <div class="col">
            <Card imgName="star_wars_5.jpg" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <FeaturedCard />
          </div>
        </div>



      </div>
    </div>
  );
}

export default Home;
