import React, {Component} from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/widget/row'

class Empresa extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Empresa' small='Versao 1.0' />
                <Content>
                    <Row>          

                    </Row>
                </Content>
            </div>
        )
    } 
}

export default Empresa