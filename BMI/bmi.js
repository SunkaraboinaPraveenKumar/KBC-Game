let weight=document.getElementById("weight");
    let height=document.getElementById("height");
    let weightInkG=document.getElementById("weightInKG");
    let weightInPounds=document.getElementById("weightInPounds");
    let heightInMeters=document.getElementById("heightInMeters");
    let heightInCentimeters=document.getElementById("heightInCentimeters");
    let heightInFeets=document.getElementById("heightInFeets");
    let heightInInches=document.getElementById("heightInInches");
    let result=document.querySelector(".result");
    let form =document.querySelector(".form");
    weight.addEventListener("change", () => {
        if (weight.value === "kg") {
            weightInkG.style.display = "block";
            weightInPounds.style.display = "none";
        } else if (weight.value === "pound") {
            weightInkG.style.display = "none";
            weightInPounds.style.display = "block";
        }
    });
    
    height.addEventListener("change", () => {
        if (height.value === "meter") {
            heightInMeters.style.display = "block";
            heightInCentimeters.style.display = "none";
            heightInFeets.style.display = "none";
            heightInInches.style.display = "none";
        } else if (height.value === "centimeter") {
            heightInMeters.style.display = "none";
            heightInCentimeters.style.display = "block";
            heightInFeets.style.display = "none";
            heightInInches.style.display = "none";
        } else if (height.value === "feet") {
            heightInMeters.style.display = "none";
            heightInCentimeters.style.display = "none";
            heightInFeets.style.display = "block";
            heightInInches.style.display = "block";
        }
    });
    function calculate(){
        let heightinmt=0;
        let weightinkg=0;
        if(weight.value==='kg'){
            weightinkg=weightInkG.value;
        }
        else if(weight.value==='pound'){
            weightinkg=weightInPounds.value*0.453592;
        }
        if(height.value==='meter'){
            heightinmt=heightInMeters.value;
        }
        else if(height.value==='centimeter'){
            heightinmt=heightInCentimeters.value*0.01;
        }
        else if(height.value==="feet"){
            heightinmt=heightInFeets.value*0.3048+
            heightInInches.value*0.0254;
        }
        let bmi=weightinkg/(heightinmt*heightinmt);
        alert(bmi.toFixed(2));
        let status="";
        if(bmi<18.5){
            status="You need to gain Weight";
        }
        else if(bmi>=18.5&&bmi<24.9){
            status="You are in normal Weight";
        }
        else if(bmi>=25&&bmi<=29.9){
            status="You are OverWeight";
        }
        else if(bmi>=30){
            status="You are Obese";
        }
        result.style.display="block";
        form.style.display="none";
        result.querySelector('h2').innerHTML=`Your BMI is: ${bmi.toFixed(2)}`;
        result.querySelector('.status').innerHTML=status;
    }