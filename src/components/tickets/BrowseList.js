import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAvailableMaterials } from "../../data/browseData";
import { Link } from "react-router-dom";

export default function BrowseList() {
  const [materialsAvailable, setMaterialsAvailable] = useState([]);

  useEffect(() => {
    getAvailableMaterials().then(setMaterialsAvailable);
  }, []);

  console.log(materialsAvailable);


  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials Available</h4>
        <Link to="/materials/available/addCheckout">Add Checkout</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Genre</th>
            <th>Return Dates</th>
          </tr>
        </thead>
        <tbody>
          {materialsAvailable.map((m) => (
            <tr key={`materialsAvailable-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                {m.checkouts.map((checkout) => (
                  <span key={checkout.returnDate}>{checkout.returnDate}</span>
                ))}
              </td>
              <button>Checkout</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
