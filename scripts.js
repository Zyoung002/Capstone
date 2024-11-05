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

const date = document.getElementById('date');

date.addEventListener('change', (event) =>{

    const selectedDate = event.target.value;
    let date = document.getElementById('date').value;
    console.log(date);
})
// code capture form submission with out page turn over and log it out//



let postsubmit = document.getElementById("inputs");

    postsubmit.addEventListener("submit", (d) => {
        d.preventDefault();

        let date = document.getElementById("date");
        let address = document.getElementById("address");
        let summary = document.getElementById('summary');

        if (address.value == "1307 Street name" || summary.value == "") {
            alert("Ensure you have filled out all fields!")
        } else {
            alert("Your data has been added to the feed!");
            console.log(`This form has date of ${date.value} and a location of ${address.value}`);
        }    
        
    })

    function validateform() {
        let x = documents.forms["inputs"]["address"].value;
        if (x =="") {
            alert("Address required");
            return false;
        }
        let y = documents.forms["inputs"]["summary"].value;
        if (y =="") {
            alert("Brief Summary required");
            return false;
        }
    
    }


    document.getElementById('inputs').addEventListener('submit', (postsubmit)) 
    {
        

        const formData = new FormData(document.getElementById('inputs'));
        const inputValue = formData.get(postsubmit);
        document.getElementById('feeddisplay').textContent = inputValue;

    }