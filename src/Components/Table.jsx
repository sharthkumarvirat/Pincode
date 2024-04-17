import React from 'react'

export default function Table({ data }) {
  return (
    <div>
      <div>
        <table border={1}>
          <thead>
            <th>Name</th>
            <th>District</th>
            <th>State </th>
            <th>Branch Type</th>
            <th>Pincode </th>
            <th>Block</th>
          </thead>
          <tbody>
          {
            data.map((ele,index)=>{
            return(
              <tr key={index}>
                <td>{ele.Name}</td>
                <td>{ele.District}</td>
                <td>{ele.Division}</td>
                <td>{ele.Country}</td>
                <td>{ele.DeliveryStatus}</td>
                <td>{ele.Pincode}</td>
              </tr>
            )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
