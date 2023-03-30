


let ansbox = document.getElementById('ansbox');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                ansbox.innerText = '';
                break;
             case 'DEL':
                 ansbox.innerText= slice(0,-1);
                 break;
            case '=':
                ansbox.innerText = eval(ansbox.innerText);
                break;
            default:
                ansbox.innerText += e.target.innerText;
        }
    });
});

