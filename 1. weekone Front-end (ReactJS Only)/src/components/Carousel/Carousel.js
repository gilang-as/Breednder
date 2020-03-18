import React, { Component } from 'react';

import {Carousel, Card, Image} from 'react-bootstrap';
class Carosel extends Component {



  render(){ 
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      var a = ["kucing1","kucing2","kucing3","kucing1","kucing2","kucing3","kucing1","kucing2","kucing3","kucing1","kucing2","kucing3"];
      
    return (
        <Carousel className="swipe-item-frame" data-interval="false">
            {
            shuffle(a).map(function(image) {
              return (
                <Carousel.Item>
                <Card className="text-right">              
                    <Image className="card-img-top swipe-item" key={image} src={require(`../../image/${image}.jpg`)}/>
                </Card>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            )
            })
          }
        </Carousel>
    )};
}

export default Carosel;
