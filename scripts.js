function storeInput() {

    const date = document.getElementById('date');
    const address = document.getElementById('address');
    const summary = document.getElementsById('summary');

    date.addEventListener('change', (event) =>{

        event.preventDefault();
        const selectedDate = event.target.value;
        let date = document.getElementById('date').value;
        console.log(date);
    })
}
console.log('date', 'address', 'summary')