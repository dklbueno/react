import './App.css'
import React from 'react'

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#1352A2">
                <Mega></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#ADC4CC">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E8B71A">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#78C0A8">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#8C4646">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#660066">
                <ParOuImpar numero={8}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando'}} />
                {/* <UsuarioInfo usuario={{ email: 'fer@nando.com'}} /> */}
            </Card>

            <Card titulo="#7 - Desafio Repetição" color="#3B5998">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#6 - Lista de Alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={40} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)