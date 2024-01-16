import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom/dist";
import { createCheckout } from "../../data/checkoutsData";
import { getMaterials } from "../../data/materialsData";
import { getPatrons } from "../../data/patronsData";

export default function CreateCheckoutForm() {
  const navigate = useNavigate();

  const [materials, setMaterials] = useState([]);
  const [patrons, setPatrons] = useState([]);
  const [material, setMaterial] = useState(null); // Change to null
  const [patron, setPatron] = useState(null); // Change to null

  useEffect(() => {
    getMaterials().then(setMaterials);
    getPatrons().then(setPatrons);
  }, []);

  const submit = () => {
    if (!material || !patron) {
      // Handle case where material or patron is not selected
      return;
    }
  
    const newCheckout = {
      MaterialId: material.id,
      PatronId: patron.id,
      CheckoutDate: new Date().toISOString(),
      ReturnDate: null,
    };
  
    createCheckout(newCheckout).then(() => {
      navigate("/materials/available");
    });
  };

  return (
    <div className="container">
      <h4>Add a New Checkout</h4>
      <Form>
        <FormGroup>
          <Label htmlFor="patronId">Patron</Label>
          <Input
            type="select"
            name="patronId"
            value={patron ? patron.id : ""}
            onChange={(e) => {
              const selectedPatron = patrons.find(
                (p) => p.id.toString() === e.target.value
              );
              setPatron(selectedPatron);
            }}
          >
            <option value="">Select Patron</option>
            {patrons.map((p) => (
              <option key={p.id} value={p.id}>
                {p.firstName}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="materialId">Material</Label>
          <Input
            type="select"
            name="materialId"
            value={material ? material.id : ""}
            onChange={(e) => {
              const selectedMaterial = materials.find(
                (m) => m.id.toString() === e.target.value
              );
              setMaterial(selectedMaterial);
            }}
          >
            <option value="">Select Material</option>
            {materials.map((m) => (
              <option key={m.id} value={m.id}>
                {m.materialName}
              </option>
            ))}
          </Input>
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
