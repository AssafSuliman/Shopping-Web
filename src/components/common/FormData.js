import {validate} from './validations.js'

  export const formData = {
        user_name:{
          id:'1',
          type:'text',
          name:'Username',
          placeholder:'Enter Username',
          value:'',
          validations:{
            required:true,
            minLength: 4,
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
        first_name:{
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
        last_name:{
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
        city : {
          id:'6',
          type:'text',
          name:'City',
          placeholder:'Enter your City here',
          value:'',
          validations:{
            required:true,
            minLength:3
          },
          errors: []
        },
        address:{
          id:'7',
          type:'text',
          name:'Address',
          placeholder:'Enter your address here',
          value:'',
          validations:{
            required:true,
            minLength: 10
          },
          errors: []
        },
        birthday:{
          id:'8',
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
      data[name].value = value
      data[name].errors = validate(name, value, data[name].validations, data)
      setData({...data})
      if(data[name].errors.length > 0) return false
      return true
  }
    
  export function validateForm(setData, data) {
      let notValid = false
      for(let input in data){
        data[input].errors = validate(input ,data[input].value, data[input].validations, data)
        if(data[input].errors.length) {
          notValid = true
          }
        }
      setData({...data})
      return notValid
    }
    

