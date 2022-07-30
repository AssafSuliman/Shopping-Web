import  {Col, Row, Form, InputGroup}  from 'react-bootstrap'

function InputText ({setData, data, inputsHandler}) {
    return (
        <div>
        {Object.keys(data).map((input, index) =>
            <Col key={index} className='loginInput' >
              <Form.Label htmlFor={input}>
                {data[input].name}
              </Form.Label>
              <InputGroup className='textGroup'>
                <InputGroup.Text></InputGroup.Text>
                <Form.Control id={input} name={input} placeholder={data[input].placeholder}
                type={data[input].type} onBlur={(e) => inputsHandler(e, setData, data)}
                isInvalid={data[input].errors.length}/>
              </InputGroup>
                {data[input].errors.map((error, index) =>(
                  <span className='errors' key={index} type='invalid'>
                  {error}
                  </span>))}
            </Col>)}
        </div>
    )
}

export default InputText

/* {data[input].errors.map((error, index) =>(
  <Form.Control.Feedback key={index} type='invalid'>
  {error}
  </Form.Control.Feedback>))} */