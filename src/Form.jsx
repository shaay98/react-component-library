import FormBS from 'react-bootstrap/Form';

export default function Form (){
return (
    <FormBS>
      <FormBS.Group className="mb-3" controlId="formGroupEmail">
        <FormBS.Label>Email address</FormBS.Label>
        <FormBS.Control type="email" placeholder="" />
      </FormBS.Group>
      <FormBS.Group className="mb-3" controlId="formGroupPassword">
        <FormBS.Label>Password</FormBS.Label>
        <FormBS.Control type="password" placeholder="" />
      </FormBS.Group>
    </FormBS>
  );
}
