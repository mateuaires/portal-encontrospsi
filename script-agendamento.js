document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a visibilidade das seções
    document.getElementById('section1').style.display = 'block';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'none';

    // Adiciona ouvintes de eventos para os botões
    document.getElementById('nextButton1').addEventListener('click', () => {
        if (checkCompletion(1)) {
            document.getElementById('section1').style.display = 'block';
            document.getElementById('section2').style.display = 'block';
            document.getElementById('nextButton1').style.display = 'none'; // Oculta o botão "Próximo" da seção 1
            document.getElementById('prevButton2').style.display = 'none'; // Oculta o botão "Anterior" da seção 2
            scrollToElement('section2');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    document.getElementById('nextButton2').addEventListener('click', () => {
        if (checkCompletion(2)) {
            document.getElementById('section2').style.display = 'block';
            document.getElementById('section3').style.display = 'block';
            document.getElementById('nextButton2').style.display = 'none'; // Oculta o botão "Próximo" da seção 2
            document.getElementById('prevButton3').style.display = 'none'; // Oculta o botão "Anterior" da seção 3
            scrollToElement('section3');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    document.getElementById('prevButton2').addEventListener('click', () => {
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section1').style.display = 'block';
        document.getElementById('nextButton1').style.display = 'block'; // Mostra o botão "Próximo" da seção 1
        document.getElementById('prevButton2').style.display = 'none'; // Oculta o botão "Anterior" da seção 2
        scrollToElement('section1');
    });

    document.getElementById('prevButton3').addEventListener('click', () => {
        document.getElementById('section3').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        document.getElementById('nextButton2').style.display = 'block'; // Mostra o botão "Próximo" da seção 2
        document.getElementById('prevButton3').style.display = 'none'; // Oculta o botão "Anterior" da seção 3
        scrollToElement('section2');
    });

    document.getElementById('clearButton').addEventListener('click', () => {
        document.getElementById('myForm').reset();
        document.getElementById('section1').style.display = 'block';
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section3').style.display = 'none';
        document.getElementById('nextButton1').style.display = 'block';
        document.getElementById('nextButton2').style.display = 'block';
        document.getElementById('prevButton2').style.display = 'none'; // Oculta o botão "Anterior" da seção 2
        document.getElementById('prevButton3').style.display = 'none'; // Oculta o botão "Anterior" da seção 3
    });
});

function checkCompletion(sectionNumber) {
    const currentSection = document.getElementById('section' + sectionNumber);
    const inputs = currentSection.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.type === 'radio') {
            // Verifica se pelo menos um botão de rádio foi selecionado
            if (!currentSection.querySelector('input[name="' + input.name + '"]:checked')) {
                allFilled = false;
            }
        } else {
            // Verifica se os campos de entrada estão preenchidos
            if (!input.value) {
                allFilled = false;
            }
        }
    });

    return allFilled;
}

function scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


// Aplicar máscara ao campo de telefone
Inputmask("(99) 99999-9999").mask("#whatsapp");