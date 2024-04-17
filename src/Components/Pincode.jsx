import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Inputs from './Inputs'
import Table from './Table'

export default function Pincode() {
  const [data, setData] = useState([])
  const [valu, setValu] = useState(573101)
  const [serach, setSerach] = useState(573101)
  const [pending, setPending] = useState("")
  const[showTable, setShowTable]=useState(false)


  useEffect(() => {
    axios.get(`https://api.postalpincode.in/pincode/${serach}`)
      .then((res) => {
        setData(res.data[0].PostOffice), setPending(res.data[0].Message),
        console.log(res.data[0].PostOffice);
      })
      .catch((err) => { console.log(err) })
  }, [serach])

  const handleSerach = () => {
    setSerach(valu)

  }
  

  return (
    <div style={{margin:"50px"}} >
        <div>
          <h1 style={{color:"blue"}}>{pending}</h1>
        </div>

        <div style={{margin:"10px"}}>
          
            <p>Show in the table formate</p>  
          <button style={{background:"blue",color:"white",padding:"5px 30px",border:"none"}} onClick={()=>{setShowTable(!showTable)}}>{showTable?"NO":"Yes"}</button>
          
        </div>

        <div style={{marginBottom:"10px"}}>
          <input type="text" value={valu} onChange={(e) => { setValu(e.target.value) }} />
          <button onClick={handleSerach}>Search</button>
        </div>

      <div>
        {/* {!showTable&&(data && <Inputs data={data} />)}
        {showTable&&(data&& <Table data={data}/>)} */}

        { showTable? (data && <Table data={data}/>) : (data && <Inputs data={data} />) }
      </div>
    </div>
  )
}
