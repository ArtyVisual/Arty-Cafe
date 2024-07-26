
document.querySelectorAll('.change-btn').forEach(coffee => {
    coffee.addEventListener('click', () => {
        rotateCups();
    });
});

function rotateCups() {
    const coffee1 = document.querySelector('.coffee1');
    const coffee2 = document.querySelector('.coffee2');
    const coffee3 = document.querySelector('.coffee3');
    const coffee4 = document.querySelector('.coffee4');
    const coffee5 = document.querySelector('.coffee5');

    // Temporarily disable the transition for coffee5
    coffee5.classList.add('no-transition');

    coffee1.classList.replace('coffee1', 'temp');
    coffee2.classList.replace('coffee2', 'coffee3');
    coffee3.classList.replace('coffee3', 'coffee4');
    coffee4.classList.replace('coffee4', 'coffee5');
    coffee5.classList.replace('coffee5', 'coffee1');
    document.querySelector('.temp').classList.replace('temp', 'coffee2');

    // Force reflow to apply the no-transition class
    void coffee5.offsetWidth;

    // Re-enable the transition after the replacement is complete
    coffee5.classList.remove('no-transition');
}


function count(tableName) {
    // Retrieve the table from localStorage
    const table = JSON.parse(localStorage.getItem(tableName));
    
    if (table && Array.isArray(table)) {
        return table.length;
    } else {
        return 0;
    }
}


    const dot =  document.querySelector('.dot');
    const num = count('bags');

    if(num==0){
    dot.hidden=true;
    }
    else
    {
        dot.innerText= num;
    }


    
    document.querySelectorAll('.change-btn').forEach(coffee => {
        coffee.addEventListener('mouseenter', () => {
            document.querySelector('.circle1').style.opacity = '100%';
        });
        coffee.addEventListener('mouseleave', () => {
            document.querySelector('.circle1').style.opacity = '20%';
        });
        
    });



    let currentRotation = 0;

        document.querySelectorAll('.change-btn').forEach(coffee => {
            coffee.addEventListener('click', () => {
                currentRotation += 20;
                
                document.querySelector('.inner-circle').style.transform = `rotate(${currentRotation}deg)`;
                document.querySelector('.circle0').style.transform = `rotate(${currentRotation}deg)`;
            });
    });


    const effect = document.querySelector('.sound');

    function playaudio(){
        effect.currentTime=0;
        effect.play();
        
    }



