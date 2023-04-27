import React from 'react'
import { Card,CardHeader } from '@material-ui/core'
import ContactForm from './ContactForm'
import { Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap'
function Contact() {
  return (
    <div>
      <ContactForm/>

{/* 
       <h1>JIO - 8217251058</h1>
      <h1>Airtel - 9801041051</h1> */}
     {/* <Card className="home-header-data-card bg-primary">
            <p>Ready</p>
            <h5>jkrjgw</h5>
            </Card>
            <Card className="home-header-data-card bg-success">
            <p>Running</p>
            <h5>rdngnk</h5>
            </Card> */}
          {/* <form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
</form> */}
{/* <FormGroup className="discover_form_formgroup">
              <Label sm='4' className='form-label required'>
                 Retry Interval
              </Label>
              <Input type='text' placeholder='' />
            </FormGroup> */}
    </div>
  )
}

export default Contact
