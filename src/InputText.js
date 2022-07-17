import  Col  from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'


function InputText ({data}) {
    return (
        <div>
        {Object.keys(data).map(input =><Col className='input' key={data[input].id}>
            <Form.Label htmlFor={input}>
              {data[input].name}
            </Form.Label>
            <InputGroup className='textGroup'>
              <InputGroup.Text></InputGroup.Text>
              <Form.Control id="username" name='username' placeholder={data[input].placeholder}
              type={data[input].type}  isInvalid={data[input].error}/>
              <Form.Control.Feedback type='invalid'>
                {data[input].error}
              </Form.Control.Feedback>
            </InputGroup>
            </Col>)}
        </div>
    )
}

export default InputText