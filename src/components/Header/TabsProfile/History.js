import { Table } from "react-bootstrap";
import "./History.scss";
const History = () => {
  return (
    <>
      <div className="container-history">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Quiz Name</th>
              <th>Total Question</th>
              <th>Total Correct</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default History;
