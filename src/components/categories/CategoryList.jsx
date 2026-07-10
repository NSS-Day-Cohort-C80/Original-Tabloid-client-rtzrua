import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCategories } from "../../managers/categoryManager";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="container">
      <h2>Category Management</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}