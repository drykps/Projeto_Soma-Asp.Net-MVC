var iniciarBotoes = function () {
    var btnSomar = document.getElementById('btn-somar');

    if (btnSomar) {
        btnSomar.addEventListener('click', function () {
            carregarResultado();
        });
    }
};

var carregarResultado = function () {
    var data = $('#form-soma').serialize();
    var numero1 = document.getElementById('numero1');
    var numero2 = document.getElementById('numero2');



    if ((numero1 && numero2 && (numero1.value && numero2.value)) && data) {
        $.ajax({
            url: "/Home/Total",
            type: 'POST',
            data: data,
        }).done(function (res) {
            alert("Resultado: " + res);
        }).fail(function () {
            alert("Erro");
        });;

    } else {
        alert("Por favor, preencha os campos.");

    }
};

iniciarBotoes();