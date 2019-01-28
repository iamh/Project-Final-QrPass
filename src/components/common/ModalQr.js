// Dependencies
import React, { Component} from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';



class ModalQr extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(props) {
    if (props.passCard) {
      this.setState({ 
          token: props.passCard.key,
          userName: props.passCard.fullName ,
          titleEvent: props.passCard.titleEvent,
          hourEvent: props.passCard.hourEvent
      });
    }
  }

  getscreenshot() {

    html2canvas(document.querySelector('#capture')).then(canvas => {
			let pdf = new jsPDF('p', 'mm', [90,115]);
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 90, 115);
			pdf.save("card.pdf");
    });
    
}

  render() {

    return (
      <div className="modal fade" id="modalImageQr" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">

          <div className="modal-content">
            <div className="modal-header text-center">
            <h5 className="modal-title"> <i className="fa fa-user mr-2" /> { this.state.userName } </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center" id="capture">
              <div>
                <img 
                  className="name-logo mb-3"
                  width="120" 
                  src= { require('../../images/appNameBlack.png') } 
                  alt="appName" 
                />
              </div>
              <QRCode value={"https://final-app-dd7be.firebaseapp.com/card/"+this.state.token} size={250} />
              <div>
                <p>
                  <span className="title-event text-primary"> { this.state.titleEvent } </span> <br />
                  <span> <b> Hora: </b> { this.state.hourEvent } </span>
                </p>
                
              </div>
            </div>
            <button onClick={() => this.getscreenshot()} className="btn btn-info">Descargar</button>
          </div>

        </div>
      </div>
    )
  }

}

export default ModalQr