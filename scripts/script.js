const completeBtns = document.getElementsByClassName('complete-btn');

for (const completeBtn of completeBtns) {
    completeBtn.addEventListener('click', function (event) {

        // alert
        alert('Board updated successfully.')

        // task assigned
        const taskAssigned = getElementValue('task-assigned');
        document.getElementById('task-assigned').innerText = taskAssigned - 1;

        if(taskAssigned - 1 === 0) {
            alert('Congrates!! You have complete all task.')
        }

        // added task
        const taskAdd = getElementValue('added-task');
        document.getElementById('added-task').innerText = taskAdd + 1;


        // add task in history        
        const task = event.target.parentNode.parentNode.childNodes[3].innerText;

        // get now time 
        const now = new Date();
        // extract hours, minutes, seconds
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // determine am or pm
        const ampm = hours >= 12 ? 'PM' : 'AM';
        // convert to 12 hour format 
        hours = hours % 12;
        hours = hours ? hours : 12 // 0 become 12
        // add leading 0 if need
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        // combine into a time string 
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`


        const newTaskWithTimeString = `You have Complete The Task ${task} at ${timeString}`;

        const p = document.createElement('p');
        p.innerText = newTaskWithTimeString;

        p.classList.add('bg-body');
        p.classList.add('p-2.5');
        p.classList.add('rounded-xl');
        p.classList.add('mb-3');

        const taskHistoryContainer = document.getElementById('task-history');
        taskHistoryContainer.appendChild(p);


        // disabled Btn
        event.target.setAttribute('disabled', 'disabled');
        event.target.classList.remove('bg-secondary');
        event.target.classList.add('bg-disabled');


    })
}


// clear history 
document.getElementById('clear-history-btn').addEventListener('click', function () {
    document.getElementById('task-history').innerHTML = '';
})




function getElementValue(id) {
    const elementValue = document.getElementById(id).innerText;
    const convertedValue = parseInt(elementValue);
    return convertedValue;
}


// change background color
document.getElementById('bg-btn').addEventListener('click', function randomBackground() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.classList.remove('bg-body');
    document.body.style.backgroundColor = color;
});



// show day and date
const currentDate = new Date(); 
const dateString = currentDate.toDateString(); 
document.getElementById('current-date').innerText = dateString; 