import { useState } from "react";

function Table(props) {
  const hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  const hourFlux = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];

  function CookieStore (location, minCustomers, maxCustomers, avgCart) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCart = avgCart;
  }
  
  const GetRandomSales = (store, flux) => {
    let sales = Math.floor( flux*store.avgCart * Math.floor(Math.random() * (store.maxCustomers - store.minCustomers) + store.minCustomers));
    console.log(sales);
    return sales;
  }
  const stores = [...props.stores,
    new CookieStore('Seattle', 23, 65, 6.3),
    new CookieStore('Tokyo', 3, 24, 1.2),
    new CookieStore('Dubai', 11, 38, 3.7),
    new CookieStore('Paris', 20, 38, 2.3),
    new CookieStore('Lima', 2, 16, 4.6)
  ];
  const sales = stores.map(store=>hourFlux.map(flux=>GetRandomSales(store, flux)))
  let dayTotal = 0;
  sales.forEach(storeArr=>dayTotal+=storeArr.reduce((a,b)=>a+b,0));
  return(
    stores.length ?
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
          <td>{store.location}</td>
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
    :
    <h3>Sorry, there are no stores to display</h3>
  )
}

export default Table