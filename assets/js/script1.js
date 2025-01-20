document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black';
    });
});


// var global color 
let globalColor ='';

//keydown
document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');

    switch (event.key) {
        case 'a':
            globalColor = 'pink';
            keyDiv.style.backgroundColor = globalColor;
            break;
            
        case 's':
            globalColor = 'orange';
            keyDiv.style.backgroundColor = globalColor;
            break;
            
        case 'd':
            globalColor = 'lightblue';
            keyDiv.style.backgroundColor = globalColor;
            break;
            
        case 'q':
            const newDivPurple = createNewDiv('purple');
            document.body.appendChild(newDivPurple);
            break;


        case 'w':
            const newDivGrey = createNewDiv('grey');
            document.body.appendChild(newDivGrey);
            break;
            

        case 'e':
            const newDivBrown = createNewDiv('brown');
            document.body.appendChild(newDivBrown);
            break;
    }
});


// función para poder crear los nuevos divs con las dimensiones especificadas
function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.backgroundColor = color
    return newDiv;
}

