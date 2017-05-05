import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/footer.css';
import moment from 'moment'

class Footer extends Component {
  render() {
    moment.locale('pt-br')
    return (
      <div className="footer navbar navbar-fixed-bottom">
        <div className="container">
          <p className="dateFooter">{`${moment().format('dddd')}, ${moment().format('LL')}`}</p>
        </div>
      </div>
    )
  }
}

export default Footer