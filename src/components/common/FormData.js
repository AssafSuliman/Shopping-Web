import {validate} from './validations.js'

  export const formData = {
        username:{
          id:'1',
          type:'text',
          name:'Username',
          placeholder:'Enter Username',
          value:'',
          validations:{
            required:true,
            minLength: 2,
          },
          errors: []
        },
        password:{
          id:'2',
          type:'password',
          name:'Password',
          placeholder:'Enter Password',
          value:'',
          validations:{
            required:true,
            minLength:8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
          },
          errors: []
        },
        confirmPassword:{
          id:'3',
          type:'password',
          name:'Confirm Password',
          placeholder:'Confirm password here',
          value:'',
          validations:{
            required:true,
            matching:true
          },
          errors: []
        },
        firstName:{
          id:'1',
          type:'text',
          name:'First Name',
          placeholder:'Enter First Name',
          value:'',
          validations:{
            required:true,
            minLength: 2,
          },
          errors: []
        },
        lastName:{
          id:'1',
          type:'text',
          name:'Last Name',
          placeholder:'Enter Last Name',
          value:'',
          validations:{
            required:true,
            minLength: 2,
          },
          errors: []
        },
        email:{
          id:'4',
          type:'email',
          name:'Email',
          placeholder:'Enter email',
          value:'',
          validations:{
            required:true,
            pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          },
          errors: []
        },
        confirmEmail:{
          id:'5',
          type:'email',
          name:'Confirm Email',
          placeholder:'Confirm email',
          value:'',
          validations:{
            required:true,
            matching:true
          },
          errors: []
        },
        address:{
          id:'6',
          type:'text',
          name:'Address',
          placeholder:'Enter your address here',
          value:'',
          validations:{
            required:true,
            minLength: 15
          },
          errors: []
        },
        birthday:{
          id:'7',
          type:'date',
          name:'Birthday',
          value:'',
          validations:{
            required:true,
            age: 18
          },
          errors : []
        }
      }
  export function inputsHandler({target:{name,value}}, setData, data){
      data[name].value=value
      if (name === 'confirmPassword'){
        data[name].errors = validate(name, value, data[name].validations, data.password.value)
        console.log('pass1')
      }
      else if (name === 'confirmEmail'){
        data[name].errors = validate(name, value, data[name].validations, data.email.value)
      }
      else data[name].errors = validate(name, value, data[name].validations)
      setData({...data})
      if(data[name].errors.length > 0) return false
      return true
  }
    
  export function validateForm(setData, data) {
      let notValid = false
      for(let input in data){
      data[input].errors = validate(input ,data[input].value, data[input].validations)
      if(data[input].errors.length) {
        notValid = true
        }
        setData({...data})
      }
    }
    

