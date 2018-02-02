import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/widget/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Reservar' small='Versao 1.0' />
                <Content>
                <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Compare os Melhores Preços</h3>
                </div>
                <div className="box-body">
                  <h4>Retirada</h4>
                  <div className="row">
                    <div className="col-xs-6">
                      <input type="text" className="form-control" placeholder="Cidade ou Aeroporto de Retirada"/>
                    </div>
                    <div className="col-xs-3">
                      <input type="date" className="form-control" placeholder="Data"/>
                    </div>
                    <div className="col-xs-3">
                      <input type="text" className="form-control" placeholder="Horário"/>
                    </div>
                  </div>
                  <h4>Devolução</h4>
                  <div className="row">
                    <div className="col-xs-6">
                      <input type="text" className="form-control" placeholder="Cidade ou Aeroporto de Devolução"/>
                    </div>
                    <div className="col-xs-3">
                      <input type="date" className="form-control" placeholder="Data"/>
                    </div>
                    <div className="col-xs-3">
                      <input type="text" className="form-control" placeholder="Horário"/>
                    </div>
                  </div>
                </div>
                <div>
                    <button type="button" className="btn btn-block btn-primary btn-sm">Reservar</button>
                </div>
              </div>
                </Content>
            </div>
        )
    } 
}

export default Dashboard