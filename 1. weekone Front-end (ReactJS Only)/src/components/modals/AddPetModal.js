import React, { Component } from 'react';
import {Button, Modal, Form, Card} from 'react-bootstrap';
class AddPetModal extends Component {
  documentData;
  constructor(props){
    super(props)

    this.loginClose = this.loginClose.bind(this);
    this.loginShow = this.loginShow.bind(this);
    this.state = {
      login: false
    }
  }

  loginClose(){
      this.setState({
          login:false
      });
  }

  loginShow(){
      this.setState({
          login:true
      });
  }





  render(){ 

    return (
      <>
        <Modal show={this.state.login} onHide={this.loginClose} animation={false}>
          <div>
          <Modal.Title id="txt-form"><h2>Premium</h2></Modal.Title>
          <Modal.Body>
            <div className="txt-center">
              <h6>Upgrade Bridnder mu dan nikmati<br/><br/>fitur <b>PRO.</b></h6>
              <br/>
              <h6><b>Brindnder : 0000000000</b></h6>
              <br/>
            <Form.Group controlId="text">
              <Form.Control type="text" placeholder="No. Rekening" readOnly />
            </Form.Group>
            <Card className="upload-transfer">
              Upload Transfer
            </Card>
            </div>
            <br/>
            <Button id="btn-true" variant="primary">Kirim</Button>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}> Close </Button>
          </div>

        </Modal>
        <Button id="btn-false" className="btn btn-lg btn-block" onClick={this.loginShow}><b>Add Pet</b></Button>
      </>
    )};
}

export default AddPetModal;
