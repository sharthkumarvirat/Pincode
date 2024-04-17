import React from 'react'

export default function Inputs({data}) {
  
  console.log(data);
  return (
    <div>
        {
          data?.map((ele, id) => {
            return (
              <details>
                <summary> {ele.Name}</summary>
                <p>District :{ele.District}</p>
                <p> State : {ele.State}</p>
                <p>Branch Type : {ele.BranchType}</p>
                <p> Pincode : {ele.Pincode}</p>
                <p>Block : {ele.Block}</p>
                <p> Region : {ele.Region}</p>
                <p>DeliveryStatus : {ele.DeliveryStatus}</p>
                <p> Country : {ele.Country}</p>
                <p> Division :{ele.Division}</p>
                <p>Circle : {ele.Circle}</p>
              </details>  
            )
          })
        }
    </div>
  )
}
