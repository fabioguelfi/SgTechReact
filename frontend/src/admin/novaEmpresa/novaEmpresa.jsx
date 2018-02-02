import React, {Component} from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/widget/row'

class NovaEmpresa extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Nova Empresa' small='Versao 1.0' />
                <Content>
                    <Row>          
                       
                    </Row>
                </Content>
            </div>
        )
    } 
}

export default NovaEmpresa