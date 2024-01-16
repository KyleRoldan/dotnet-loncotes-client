import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { deactivatePatron, getPatrons } from "../../data/patronsData";



export default function PatronsList() {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    getPatrons().then(setPatrons);
  }, []);


  ////////HANDLER TO DEACTIVATE--NOT NEEDED HAPPENING IN THE ONCLICK////////////////////////
  // const deactivatePatronHandler = async (patronId) => {
  //   try {
  //     await deactivatePatron(patronId);
  //     const updatedPatrons = patrons.map((p) =>
  //       p.id === patronId ? { ...p, isActive: false } : p
  //     );
  //     setPatrons(updatedPatrons);
  //   } catch (error) {
  //     console.error("Error deactivating patron:", error);
  //   }
  // };


////////ASYNCHRONOUS--HANDLER TO DEACTIVATE--NOT NEEDED HAPPENING IN THE ONCLICK/////////////
//const deactivatePatronHandler = (patronId) => {
//   deactivatePatron(patronId)
//   .then(() => {
//     const updatedPatrons = patrons.map((p) =>
//       p.id === patronId ? { ...p, isActive: false } : p
//     );
//     setPatrons(updatedPatrons);
//   })
//   .catch((error) => {
//     console.error("Error deactivating patron:", error);
//   });
// };


  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
        
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              {p.isActive === true ? (
                <td>True</td>
                ) : (
                <td>False</td>
                )}
                <td>
                  <Link to={`/patrons/update/${p.id}`}>Edit</Link>   
                </td>


              {/* <td>Edit</td> */}
              {/* <td>
              {p.isActive ? (
                <button onClick={() => deactivatePatronHandler(p.id)}>
                  Deactivate
                </button>
              ) : (
                <span>Deactivated</span>
              )}
            </td> */}
<td>
{p.isActive ? (
                <button
                  onClick={() =>
                    deactivatePatron(p.id)
                      .then(() => {
                        setPatrons((prevPatrons) =>
                          prevPatrons.map((prevP) =>
                            prevP.id === p.id
                              ? { ...prevP, isActive: false }
                              : prevP
                          )
                        );
                      })
                      .catch((error) => {
                        console.error("Error deactivating patron:", error);
                      })
                  }
                >
                  Deactivate
                </button>
              ) : (
                <span>Deactivated</span>
              )}
            </td>
              {/* <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td> THIS ACCESS MATERILID THAT IS NESTED IN THE OBJECT*/}

              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
