import './Mega.css'
import React, {useState} from 'react'

import InputMega from './InputMega'

export default props => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 7)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Números Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Qtde de Números: </label>
                <input
                    min="5"
                    max="15"
                    type="number"
                    value={qtde}
                onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}

// class Mega extends Component {

//     state = {
//         qtde: this.props.qtdeInicial || 7
//     }

//     setQtde = (novaQtde) => {
//         this.setState({
//             qtde: novaQtde
//         })
//     }

//     // gerarNumeros = (qtde) => {
//     //     let arr = new Array()
//     //     for (var i = 0; i < qtde; i++) {
//     //         let numero = parseInt(Math.random() * 61) + 1
//     //         if (arr.indexOf(numero) > -1) {
//     //             qtde++
//     //             continue
//     //         }
//     //         arr.push(numero.toString().padStart(2,0))
//     //     }

//     //     return arr.join(',')
//     // }

//     gerarNumeroNaoContido = (min, max, array) => {
//         const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
//         return array.includes(aleatorio) ?
//             this.gerarNumeroNaoContido(min, max, array) :
//             aleatorio
//     }

//     gerarNumeros = (qtde) => {
//         const numeros = Array(qtde)
//             .fill(0)
//             .reduce((nums) => {
//                 const novoNumero = this.gerarNumeroNaoContido(1,60,nums)
//                 return [...nums, novoNumero]
//             }, [])
//             .sort((n1, n2) => n1 - n2)

//             return numeros.join(',')
//     }

//     render() {
//         return (
//             <div className="Mega">
//                 <h2>Números Mega Sena</h2>
//                 {this.gerarNumeros(this.state.qtde)}
//                 <InputMega qtde={this.state.qtde} setQtde={this.setQtde} />
//             </div>
//         )
//     }

// }

// export default Mega