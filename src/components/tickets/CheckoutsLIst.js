import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData";

export default function CheckoutList() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getCheckouts().then(setMaterials);
  }, []);

  const returnHandler = (id, returnDate) => {

    returnCheckout(id, returnDate)
      .then(() => {
        // Navigate to the materials page
      })
      .catch((error) => {
        console.error("Error removing material from circulation:", error);
      });
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material Id</th>
            <th>Patron Id</th>
            <th>Checkout Datee</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`checkouts-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.material.materialName}</td>
              <td>{m.patron.firstName} {m.patron.lastName}</td>
              <td>{m.checkoutDate}</td>
              <td>{m.returnDate ? (
                <p>{m.returnDate}</p>
              ) : (
                <button onClick={() => returnHandler(m.id, m.returnDate)}>
                Return
              </button>
              )}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}