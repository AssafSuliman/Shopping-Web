
export const validate = (name, value, validations) => {
    
    const errors = []

    //validations
    if(!value && validations.required) {
        errors.push(`${name} is required`)
        //1- validate
        //2- add to errros if invalid

        // errors.push(`${name} is required`)
    }
    if(validations.minLength && validations.minLength > value.length) {
        errors.push(`${name} must be atleast ${validations.minLength} characters`)
        //1- validate
        //2- add to errros if invalid
    }
    if(validations.pattern && !value.match(validations.pattern)){
        errors.push(`${name} not valid!`)
    }


    return errors
}