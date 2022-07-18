import  Col  from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'



function InputText ({data, inputsHandler}) {
    return (
        <div>
        {Object.keys(data).map(input =><Col className='input' key={data[input].id}>
            <Form.Label htmlFor={input}>
              {data[input].name}
            </Form.Label>
            <InputGroup className='textGroup'>
              <InputGroup.Text></InputGroup.Text>
              <Form.Control name={data[input].name} placeholder={data[input].placeholder}
              type={data[input].type} onBlur={inputsHandler} isInvalid={data[input].errors.length}/>
              {data[input].errors.map((error, index) =>(
                <Form.Control.Feedback key={index} type='invalid'>
                {error}
                </Form.Control.Feedback>))}
            </InputGroup>
            </Col>)}
        </div>
    )
}

export default InputText