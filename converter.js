 /*
            1 meter = 3.281 feet
            1 liter = 0.264 gallon
            1 kilogram = 2.204 pound
        */

 //Function to convert units based on user input
        function convertUnits(){
                let inputVal = Number(document.getElementById("inputVal").value)

                if (!inputVal) {
                    throw new Error('Please enter a value for conversion.');
                }


                let length = document.getElementById('length')
                let volume = document.getElementById('volume')
                let mass = document.getElementById('mass')

                //Conversion formulas    
                let metersTofeet = inputVal * 3.281
                let feetTometers = inputVal / 3.281
    
                let litersToGallons = inputVal * 0.264
                let gallonsToLiters = inputVal / 0.264
    
                let kilogramsToPounds = inputVal * 2.204
                let poundsToKilograms = inputVal / 2.204


                //Update the HTML elements with the conversion results
                length.textContent = `${inputVal} meters = ${metersTofeet.toFixed(3)} feet | ${inputVal} feet = ${feetTometers.toFixed(3)} meters`
                volume.textContent = `${inputVal} liters = ${litersToGallons.toFixed(3)} gallons | ${inputVal} gallons = ${gallonsToLiters.toFixed(3)} liters`
                mass.textContent = `${inputVal} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputVal} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
        }
        


        //Get the convert button element
        const btn = document.getElementById("convertBtn")

        //Add event listener to the convert button
        btn.addEventListener('click', () => {

            try {
                    //Call the convertUnits() function to perform the unit conversion
                    convertUnits()

            } catch(err){
                    //Display an error message to the user
                    alert("An error occurred. Please try again")
                    console.log(err)
                }

        });
    
    
