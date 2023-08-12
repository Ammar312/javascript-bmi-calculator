const bmiCalculator = () =>{
    let weight = document.getElementById('1').value
    weight = Number(weight)
    let height = document.getElementById('2').value
    height = Number(height)
    let heightInMeter = ((height-0.08)*0.3048)**2
    console.log(heightInMeter)
    let bmi = weight/heightInMeter
    bmi = Number(bmi).toFixed(2)
    let advice = (bmi-22)*heightInMeter
    advice = advice.toFixed(1)
    let adviceToUnderweight = (22-bmi)*heightInMeter
    adviceToUnderweight = adviceToUnderweight.toFixed(1)
    //  outputFunc =(n)=> {
    //     return( `Your Body Mass Index is ${bmi}. This is considered ${n}. You should loose ${advice} kg to get healthy.`)}
    let underWeightResult = "Your Body Mass Index is " + bmi +"." + " This is considered Underweight. " + "You should gain " + adviceToUnderweight + "kg to get healthy."
    let normalResult = "Your Body Mass Index is " + bmi +"." +" This is considered Normal."
    let overWeightResult = "Your Body Mass Index is " + bmi +"." +" This is considered Overweight. " + "You should loose " + advice + "kg to get healthy."
    let obeseResult = `Your Body Mass Index is ${bmi}. This is considered Obese. You should loose ${advice}kg to get healthy.`

    if (bmi < 18.5){
    document.getElementById('result').innerHTML = underWeightResult;
    }
    else if (bmi >= 18.5 && bmi < 25){
        document.getElementById('result').innerHTML = normalResult
    }
    else if (bmi >= 25 && bmi < 30){
        // document.getElementsByClassName('output').style.backgroundColor = 'white'
        document.getElementById('result').innerHTML = overWeightResult;
    }
    else {
        document.getElementById('result').innerHTML =obeseResult;
    }
    }