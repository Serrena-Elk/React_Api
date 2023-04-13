import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import "./tableStyle.css";

function Table() { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);

  const columns = [
    {
      name: "Coach No",
      selector: (row) => row.vehicleNo,
    },
    {
      name: "Vehicle Type",
      selector: (row) => row.vehicleType,
    },
    {
      name: "IMEI",
      selector: (row) => row.imei,
    },
    {
      name: "Sim No",
      selector: (row) => row.simno,
    },

    {
      name: "Device Mode",
      selector: (row) => row.Devicemode,
    },

    // {
    //   name: "Action",
    //   selector: (row) => row.email,
    // },
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    setLoading(true);
    const URL = "https://gps-v2.zig-app.com/api/getdeviceDetails/1";
    const response = await fetch(URL);

    const users = await response.json();
    setData(users);
    setLoading(false);
  }

  return (
    <>
      <div className="table-container">
        <DataTable
          className="tableStyle"
          title="Fleet Tracking"
          columns={columns}
          data={data}
          progressPending={loading}
          pagination
        />
      </div>
    </>
  );
  
}

export default Table;
