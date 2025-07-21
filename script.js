const conditionText = [
    {
        condition: 'daily',
        texte: [
            '5',
            '7',
            '1',
            '2',
            '0',
            '1',
            '1',
            '1',
            '1',
            '3',
            '0',
            '1'
        ]
    },
    {
        condition: 'weekly',
        texte: [
            '32',
            '36',
            '10',
            '8',
            '4',
            '7',
            '4',
            '5',
            '5',
            '10',
            '2',
            '2'
        ]
    },
    {
        condition: 'monthly',
        texte: [
            '103',
            '128',
            '23',
            '29',
            '13',
            '19',
            '11',
            '18',
            '21',
            '23',
            '7',
            '11'
        ]
    }
];

function changeCondition(conditionIndex) {
    const texte = conditionText[conditionIndex].texte;

    for (let i = 0; i < texte.length; i++) {
        const textSpace = document.getElementById(`textSpace${i + 1}`);
        textSpace.innerText = texte[i];
    }
    
    const buttons = document.querySelectorAll('.container__background .container__p');
    buttons.forEach((button, index) => {
        if (index === conditionIndex) {
            button.style.color = 'white'; // Aktueller Zustand
        } else {
            button.style.color = ''; // Standardfarbe zurücksetzen
        }
    });
}
    

changeCondition(2);