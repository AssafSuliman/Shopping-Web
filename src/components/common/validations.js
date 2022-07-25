
export const validate = (name, value, validations, matchingValue) => {
    //console.log(name, value, matchingValue)
    
    const errors = []

    //validations
    if(!value && validations.required) {
        errors.push(`*${name} is required`)
        //1- validate
        //2- add to errros if invalid

        // errors.push(`${name} is required`)
    }
    if(validations.minLength && validations.minLength > value.length) {
        errors.push(`*${name} must be atleast ${validations.minLength} characters`)
        //1- validate
        //2- add to errros if invalid
    }
    if(validations.pattern && !value.match(validations.pattern)){
        if(name==='password'){
            errors.push(`
            Your password have to contain atleast one uppercase letter,
            one lowercase letter and one number`)
        }
        else errors.push(`*${name} not valid!`)
    }
    if(validations.matching && value != matchingValue){
        errors.push(`Field not matching`)
    }
    if(validations.age){
        const dateEntered = new Date(value)
        const today = new Date()
        if((today.getFullYear() - dateEntered.getFullYear()) < 16){
            errors.push(`You must be atleast at age 16 to signup`)
        }
    }


    return errors
}