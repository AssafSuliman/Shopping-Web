
export const validate = (name, value, validations, data) => {
    
    
    const errors = []

    
    if(!value && validations.required) {
        errors.push(`*Field is required`)
        
    }
    if(validations.minLength && validations.minLength > value.length) {
        errors.push(`*Must be atleast ${validations.minLength} characters`)
       
    }
    if(validations.pattern && !value.match(validations.pattern)){
        if(name==='password'){
            errors.push(`
            Your password have to contain atleast one uppercase letter,
            one lowercase letter and one number`)
        }
        else errors.push(`*${name} not valid!`)
    }
    if(validations.matching){
        if(name === 'confirmPassword' && value != data.password.value
            || name === 'confirmEmail' && value != data.email.value){
            errors.push(`Fields not matching`)
        }
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