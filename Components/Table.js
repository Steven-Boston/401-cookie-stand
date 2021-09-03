import { useState } from "react";

function Table({stores, hoursOpen, deleteStore}) {

  console.log(stores);
  const sales = stores.map(store=>store.hourlySales)
  let dayTotal = 0;
  sales.forEach(storeArr=>dayTotal+=storeArr.reduce((a,b)=>a+b,0));

  return(
    stores.length ?
    <>
      <link rel="stylesheet" href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Adelete%3A"/>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Location</th>
            {hoursOpen.map((hour, idx)=>
            <th key={idx}>{hour}</th>  
            )}
            <th>Day Total</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, idx)=>
          <tr key={idx}>
            <td>{store.location} <button onClick={()=>deleteStore(store.id)}>delete</button></td>
            {sales[idx].map(sales=>
              <td>{sales}</td>
              )}
            <td>{sales[idx].reduce((a, b) => a + b, 0)}</td>
          </tr>
          )}
        </tbody>
        <tfoot>
        <tr>
          <td>Totals</td>
            {hoursOpen.map((time, idx)=>{
              let hourTotal = 0;
              sales.forEach(store=>{
                hourTotal+=store[idx];
              });
              return <td>{hourTotal}</td>
            })}
            <td>{dayTotal}</td>
          </tr>
        </tfoot>
      </table>
    </>
    :
    <h3>Sorry, there are no stores to display</h3>
  )
}

export default Table