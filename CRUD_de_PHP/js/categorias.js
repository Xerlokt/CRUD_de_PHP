document.addEventListener("DOMContentLoaded", (event) => {
    carregarCategorias()
});


function carregarCategorias() {
    var url = '../backend/categorias_lista.php'
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
                        <td>`+ registro.cat_cod + `</td>
                        <td>`+ registro.cat_desc + `</td>
                        <td><button class = "button is-info" onclick="alterarCategoria(`+ registro.cat_cod + `)"><i class="fa-solid fa-pen"></i></button>
                        <button class = "button is-danger" onclick="excluirCategoria(`+ registro.cat_cod + `)"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>`
                })
            }
            document.getElementById("lista").innerHTML = tabela
        })
        .catch(err => console.log('Erro de solicitação', err));

}


function gravarCategoria() {
    var codigo = document.getElementById("codigo").value
    var inputdescricao = document.getElementById("descricao").value

    if(codigo == ''){
        var url = '../backend/categorias_incluir.php'
    }else{
        var url = '../backend/categorias_alterar.php'
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"codigo" : "' +codigo + '", "descricao":"'+inputdescricao+'"}',
    };


    fetch(url, options)

        .then(resposta => resposta.json())  // converter para json
        .then(dados => {
            alert(dados.mensagem)
            carregarCategorias()
            document.getElementById("codigo").value = ''
            document.getElementById("descricao").value = ''
        })
        .catch(err => console.log('Erro de solicitação', err));
}

function excluirCategoria(codigo) {
    var url = '../backend/categorias_excluir.php'

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
                carregarCategorias()
            })
            .catch(err => console.log('Erro de solicitação', err));
    }

}

function alterarCategoria(codigo) {
    var url = '../backend/categorias_lista.php'

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
                document.getElementById("codigo").value = dados.registros[0].cat_cod
                document.getElementById("descricao").value = dados.registros[0].cat_desc
            }
        })

}
