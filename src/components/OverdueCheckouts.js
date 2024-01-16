import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getOverdueCheckouts } from "../data/overdueCheckoutData";

export default function OverdueCheckouts() {
  const [overdues, setOverdues] = useState([]);

  useEffect(() => {
    getOverdueCheckouts().then(setOverdues);
  }, []);


  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4> Overdue Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material</th>
            <th>Patron</th>
            <th>Checkout Datee</th>
          </tr>
        </thead>
        <tbody>
          {overdues.map((m) => (
            <tr key={`overdueCheckouts-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.material.materialName}</td>
              <td>{m.patron.firstName} {m.patron.lastName}</td>
              <td>{m.checkoutDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}