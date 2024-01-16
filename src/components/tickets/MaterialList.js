import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getMaterials, softDeleteMaterial } from "../../data/materialsData";
import { useNavigate } from "react-router-dom/dist";
import { Link } from "react-router-dom";

export default function MaterialList() {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then(setMaterials);
  }, []);

  console.log(materials)

  const outOfCirculationSince = new Date(); // or whatever value you want to set

  const removeMaterialHandler = (id, updatedData) => {

    softDeleteMaterial(id, updatedData)
      .then(() => {
       console.log(updatedData)
        navigate("/materials");
      })
      .catch((error) => {
        console.error("Error removing material from circulation:", error);
        console.log(updatedData)
      });
  };

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td>
              {m.outOfCirculationSince == null ? (
                <button onClick={() => removeMaterialHandler(m.id, outOfCirculationSince)}>
                  Remove from Circulation
                </button>
              ) : (
                <p>{m.outOfCirculationSince} out of circulation</p>
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
