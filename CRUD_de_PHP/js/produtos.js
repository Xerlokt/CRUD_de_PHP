document.addEventListener("DOMContentLoaded", (event) => {
    carregarProdutos()
});


function carregarProdutos() {
    var url = '../backend/produtos_lista.php'
    var tabela = ''
    var linha = 1



    // Solicitação GET.
    fetch(url)
        // Tratamento do sucesso
        .then(resposta => resposta.json())  // converter para json
        .then(dados => {
            if (dados.codigo == 200) {
                dados.registros.map((registro) => {
                    tabela = tabela + `
                    <tr>
                        <td>`+ linha++ + `</td>
                        <td>`+ registro.ID_produto + `</td>
                        <td>`+ registro.pro_descricao + `</td>
                        <td>`+ registro.pro_valor + `</td>
                        <td>`+ registro.pro_categoria + `</td>
                        <td>`+ registro.pro_unidade + `</td>
                        <td>`+ registro.pro_codigoean + `</td>
                        <td><button class = "button is-info" onclick="alterarProdutos(`+ registro.ID_produto + `)"><i class="fa-solid fa-pen"></i></button>
                        <button class = "button is-danger" onclick="excluirProdutos(`+ registro.ID_produto + `)"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>`
                })
            }
            document.getElementById("lista").innerHTML = tabela
        })
        .catch(err => console.log('Erro de solicitação', err));

}


function gravarProdutos() {
    var codigo = document.getElementById("codigo").value
    var inputDescricao = document.getElementById("descricao").value
    var inputValor = document.getElementById("valor").value
    var inputCategoria = document.getElementById("categoria").value
    var inputUnidade = document.getElementById("unidade").value
    var inputCodigoean = document.getElementById("codigoean").value

    if (codigo == '') {
        var url = '../backend/produtos_incluir.php'
    } else {
        var url = '../backend/produtos_alterar.php'
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"codigo" : "' + codigo + '", "descricao":"' + inputDescricao + '", "valor":"' + inputValor + '", "categoria":"' + inputCategoria + '", "unidade":"' + inputUnidade + '", "codigoean":"' + inputCodigoean + '"}',
    };


    fetch(url, options)

        .then(resposta => resposta.json())  // converter para json
        .then(dados => {
            alert(dados.mensagem)
            carregarProdutos()
            document.getElementById("codigo").value = ''
            document.getElementById("descricao").value = ''
            document.getElementById("valor").value = ''
            document.getElementById("categoria").value = ''
            document.getElementById("unidade").value = ''
            document.getElementById("codigoean").value = ''
        })
        .catch(err => console.log('Erro de solicitação', err));
}

function excluirProdutos(codigo) {
    var url = '../backend/produtos_excluir.php'

    if (confirm("tem certeza que deseja excluir??")) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"codigo" : "' + codigo + '"}',
        };


        fetch(url, options)

            .then(resposta => resposta.json())  // converter para json
            .then(dados => {
                alert(dados.mensagem)
                carregarProdutos()
            })
            .catch(err => console.log('Erro de solicitação', err));
    }

}

function alterarProdutos(codigo) {
    var url = '../backend/produtos_lista.php'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"codigo" : "' + codigo + '"}',
    };

    fetch(url, options)

        .then(resposta => resposta.json())  // converter para json
        .then(dados => {
            if (dados.codigo == 200) {
                document.getElementById("codigo").value = dados.registros[0].ID_produto
                document.getElementById("descricao").value = dados.registros[0].pro_descricao
                document.getElementById("valor").value = dados.registros[0].pro_valor
                document.getElementById("categorias").value = dados.registros[0].pro_categoria
                document.getElementById("codigoean").value = dados.registros[0].pro_codigoean
            }
        })

}
