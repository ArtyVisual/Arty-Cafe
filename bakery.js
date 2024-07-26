// scripts.js
document.querySelectorAll('.change-btn').forEach(coffee => {
    coffee.addEventListener('click', () => {
        rotateCups();
    });
});


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


    
function rotateCups() {
    const cake1 = document.querySelector('.cake1');
    const cake2 = document.querySelector('.cake2');
    const cake3 = document.querySelector('.cake3');
    const cake4 = document.querySelector('.cake4');
    const cake5 = document.querySelector('.cake5');

    // Temporarily disable the transition for coffee5
    cake5.classList.add('no-transition');

    cake1.classList.replace('cake1', 'temp');
    cake2.classList.replace('cake2', 'cake3');
    cake3.classList.replace('cake3', 'cake4');
    cake4.classList.replace('cake4', 'cake5');
    cake5.classList.replace('cake5', 'cake1');
    document.querySelector('.temp').classList.replace('temp', 'cake2');

    // Force reflow to apply the no-transition class
    void cake5.offsetWidth;

    // Re-enable the transition after the replacement is complete
    cake5.classList.remove('no-transition');
}

        // JavaScript to handle hover events
        document.querySelectorAll('.change-btn').forEach(coffee => {
            coffee.addEventListener('mouseenter', () => {
                document.querySelector('.circle1').style.opacity = '100%';
            });
            coffee.addEventListener('mouseleave', () => {
                document.querySelector('.circle1').style.opacity = '50%';
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

//active class function
