import './style/Informacao.module.css'

function Infromacao({ dados }) {

    return (
        <>
            {
                Object.entries(dados)
                    .filter(([key, value]) => value !== null && value !== undefined && value !== "")
                    .map(([key, value], index) => {
                    // Verifique se a chave é 'ddd' ou 'uf'
                    const isSpecialKey = ['ddd', 'uf', 'ibge', 'gia', 'siafi'].includes(key)

                    // Formate o texto de acordo com a chave
                    const formattedKey = isSpecialKey ? key.toUpperCase() : `${key.charAt(0).toUpperCase()}${key.slice(1)}`

                    return (
                        <p key={index}>
                        {`${formattedKey}: ${value}`}
                        </p>
                    )
                })
            }
        </>
    )
}

export default Infromacao