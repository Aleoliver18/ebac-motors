$(document).ready(function () {
    $('#carrousel-imagens').slick({
        autoplay: true,
    })

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!!!'
        },
        submitHandle: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            alert(`Falta ${camposInvalidos} Campos a serem preenchidos!!!`)
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()
        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})