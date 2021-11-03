import PortaModel from '../model/porta'

export function criarPortas(qtde: number, portacomPresente: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portacomPresente
        return new PortaModel(numero, temPresente)
    })
}

// isso aqui é como se fosse um hook para modificar a porta selecionada, pois caso o contrário
// todas as portas poderiam ficar selecionadas ao mesmo tempo

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if (igualModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}