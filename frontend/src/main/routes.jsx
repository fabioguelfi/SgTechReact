import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

/*dashboard*/
import Dashboard from '../dashboard/dashboard'

/*admin*/
import NovaEmpresa from '../admin/novaEmpresa/novaEmpresa'
import Empresa from '../admin/empresa/empresa' 
import Reservas from '../admin/reservas/reservas'
import Vouchers from '../admin/vouchers/vouchers'
import Cambio from '../admin/cambio/cambio'
import Usuarios from '../admin/usuarios/usuarios'
import alteracaoMassa from '../admin/alteracaoMassa/alteracaoMassa'
import NovosCadastros from '../admin/novosCadastros/novosCadastros'

/*agente viagens*/
import AgenteReservas from '../agenteViagens/agenteReservas/agenteReservas'
import AgenteVouchers from '../agenteViagens/agenteVouchers/agenteVouchers'
import AgenteUsuarios from '../agenteViagens/agenteUsuarios/agenteUsuarios'
import AgenteIframe from '../agenteViagens/agenteIframe/agenteIframe' 
import AgenteDocumentos from '../agenteViagens/agenteDocumentos/agenteDocumentos'

/*cadastro*/
import CadastroConsultarEmpresas from '../cadastro/cadastroConsultarEmpresas/cadastroConsultarEmpresas'
import CadastroPerguntasFrequentes from '../cadastro/cadastroPerguntasFrequentes/cadastroPerguntasFrequentes'

/*stur*/
import SturImportar from '../stur/sturImportar/sturImportar'
import SturStatusImportar from '../stur/sturStatusImportar/sturStatusImportar'
import SturRelatorios from '../stur/sturRelatorios/sturRelatorios'

/*nf*/
import NfIncluir from '../nf/nfIncluir/nfIncluir'
import NfListar from '../nf/nfListar/nfListar'

/*faleConosco*/
import FaleConosco from '../faleConosco/faleConosco'

/*sac*/
import Sac from '../sac/sac'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/novaEmpresa' component={NovaEmpresa} />
        <Route path='/empresa' component={Empresa} />
        <Route path='/reservas' component={Reservas} />
        <Route path='/vouchers' component={Vouchers} />
        <Route path='/cambio' component={Cambio} />
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/alteracaoMassa' component={alteracaoMassa} />
        <Route path='/novosCadastros' component={NovosCadastros} />
        <Route path='/agenteReservas' component={AgenteReservas} />
        <Route path='/agenteVouchers' component={AgenteVouchers} />
        <Route path='/agenteUsuarios' component={AgenteUsuarios} />
        <Route path='/agenteIframe' component={AgenteIframe} />
        <Route path='/agenteDocumentos' component={AgenteDocumentos} />
        <Route path='/cadastroConsultarEmpresas' component={CadastroConsultarEmpresas} />
        <Route path='/cadastroPerguntasFrequentes' component={CadastroPerguntasFrequentes} />
        <Route path='/sturImportar' component={SturImportar} />
        <Route path='/sturStatusImportar' component={SturStatusImportar} />
        <Route path='/sturRelatorios' component={SturRelatorios} />
        <Route path='/NfIncluir' component={NfIncluir} />
        <Route path='/NfListar' component={NfListar} />
        <Route path='/faleConosco' component={FaleConosco} />
        <Route path='/sac' component={Sac}/>
        <Redirect form='*' to='/'/>
    </Router>
)