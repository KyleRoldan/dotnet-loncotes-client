import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom/dist";
import { getPatron, updatePatron } from "../../data/patronsData";

////////////NEEDS FIXING SYNTAX ERROR ON SUBMIT////////////////////////////


export default function UpdatePatron() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [patron, setPatron] = useState({ address: "", email: "" });

  useEffect(() => {
    getPatron(id).then((data) => {
      setPatron(data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatron((prevPatron) => ({
      ...prevPatron,
      [name]: value,
    }));
  };

  const submit = () => {
    const updatedPatron = {
      ...patron,
      // Include other properties if needed
    };

    updatePatron(id, JSON.stringify(updatedPatron)).then(() => {
      navigate(`/patrons/${id}`);
    });
  };

  return (
    <div className="container">
      <h4>Update</h4>
      <Form>
        <FormGroup>
          <Label htmlFor="patronName">Address</Label>
          <Input
            type="text"
            placeholder="First Name"
            name="address"
            value={patron.address}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="genre">Email</Label>
          <Input
            placeholder="Last Name"
            type="text"
            name="email"
            value={patron.email}
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
