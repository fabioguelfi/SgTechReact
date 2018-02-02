import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Reservar' icon='dashboard'/>
        <MenuTree label='Administrativo' icon='edit'>
            <MenuItem path='#novaEmpresa' label='Nova Empresa' icon='address-book' />
            <MenuItem path='#empresa' label='Empresa' icon='address-book' />
            <MenuItem path='#reservas' label='Reservas' icon='address-book' />
            <MenuItem path='#vouchers' label='Vouchers' icon='address-book' />
            <MenuItem path='#cambio' label='Cambio' icon='address-book' />
            <MenuItem path='#usuarios' label='Usuarios' icon='address-book' />
            <MenuItem path='#alteracaoMassa' label='Alteração em Massa' icon='address-book' />
            <MenuItem path='#novosCadastros' label='Novos Cadastros' icon='address-book' />
        </MenuTree>
        <MenuTree label='Agente de Viagens' icon='edit'>
            <MenuItem path='#agenteReservas' label='Reservas' icon='address-book' />
            <MenuItem path='#agenteVouchers' label='Vouchers' icon='address-book' />
            <MenuItem path='#agenteUsuarios' label='Usuarios' icon='address-book' />
            <MenuItem path='#agenteIframe' label='I-frame' icon='address-book' />
            <MenuItem path='#agenteDocumentos' label='Documentos' icon='address-book' />
        </MenuTree>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#cadastroConsultarEmpresas' label='Cadastro' icon='edit' />
            <MenuItem path='#CadastroPerguntasFrequentes' label='Perguntas Frequentes' icon='edit' />
        </MenuTree>
        <MenuTree label='STUR' icon='edit'>
            <MenuItem path='#sturImportar' label='Importar' icon='edit' />
            <MenuItem path='#sturStatusImportar' label='Status da Importação' icon='edit' />
            <MenuItem path='#sturRelatorios' label='Stur Relatorios' icon='edit' />
        </MenuTree>
        <MenuTree label='NF' icon='edit'>
            <MenuItem path='#nfIncluir' label='Incluir' />
            <MenuItem path='#nfListar' label='Listar' />
        </MenuTree> 
        <MenuItem path='#faleConosco' label ='Fale Conosco' icon='edit' />
        <MenuItem path='#sac' label='SAC' icon='edit' />       
    </ul>
)