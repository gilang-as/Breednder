import React, { Component } from 'react';
import {Col, Image, Card, Row} from 'react-bootstrap';
import '../../MainStyle.css';
import data from '../../data.json';
class PhotoGridItem extends Component {

render(){
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    return (
        <Row className="grid-photo-scrool">
  
          {
            shuffle(data).map(function(image) {
              return (
                <Col md={4} className="p-2">
                    <Card className="text-right">
                      <Image className="card-img-top photo-item" key={image.pics[0]} src={require(`../../image/${image.pics[0]}`)}/>        
                      <h6 className="card-grid-title">{image.name}</h6>
                    </Card>
                </Col>)
            })
          }
        </Row>
      )
};
}

export default PhotoGridItem;
