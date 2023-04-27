import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  row,
  // CustomInput,
  Label
} from 'reactstrap'

const HorizontalForm = () => {
  return (
    <Card style={{ marginTop:'10px',marginRight:'10px', marginLeft:'10px'}}>
      <CardHeader>
        <CardTitle tag='h4'>Contact Us</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm='3' for='name'>
              First Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='First Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='name'>
              Last Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='Last Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Email'>
              Email
            </Label>
            <Col sm='9'>
              <Input type='email' name='Email' id='Email' placeholder='Email' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='mobile'>
              Mobile
            </Label>
            <Col sm='9'>
              <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">
             Comments
           </Label>
          <Input
          id="exampleText"
          name="text"
          type="textarea"
          />
          </FormGroup>
          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button  className='mr-3, md-3' color='primary' type='submit' onClick={e => e.preventDefault()}>
                Submit
              </Button>
              <Button outline color='secondary' type='reset'>
                Reset
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalForm

// import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'

// const MultipleColumnForm = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle tag='h4'>Contact Us</CardTitle>
//       </CardHeader>

//       <CardBody>
//         <Form>
//           <Row>
//             <Col md='6' sm='12'>
//               <FormGroup>
//                 <Label for='nameMulti'>First Name</Label>
//                 <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
//               </FormGroup>
//             </Col>
//             <Col md='6' sm='12'>
//               <FormGroup>
//                 <Label for='lastNameMulti'>Last Name</Label>
//                 <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
//               </FormGroup>
//             </Col>
           
//             <FormGroup row>
//             <Label sm='3' for='mobile'>
//               Mobile
//             </Label>
//             <Col sm='9'>
//               <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
//             </Col>
//           </FormGroup>

//             <Col md='6' sm='12'>
//               <FormGroup>
//                 <Label for='CountryMulti'>Country</Label>
//                 <Input type='text' name='country' id='CountryMulti' placeholder='Country' />
//               </FormGroup>
//             </Col>
//             <Col md='6' sm='12'>
//               <FormGroup>
//                 <Label for='CompanyMulti'>Company</Label>
//                 <Input type='text' name='company' id='CompanyMulti' placeholder='Company' />
//               </FormGroup>
//             </Col>
//             <Col md='6' sm='12'>
//               <FormGroup>
//                 <Label for='EmailMulti'>Email</Label>
//                 <Input type='email' name='Email' id='EmailMulti' placeholder='Email' />
//               </FormGroup>
//             </Col>
//             {/* <Col sm='12'>
//               <FormGroup className='d-flex mb-0'>
//                 <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
//                   Submit
//                 </Button.Ripple>
//                 <Button.Ripple outline color='secondary' type='reset'>
//                   Reset
//                 </Button.Ripple>
//               </FormGroup>
//             </Col> */}
//           </Row>
//         </Form>
//       </CardBody>
//     </Card>
//   )
// }
// export default MultipleColumnForm
