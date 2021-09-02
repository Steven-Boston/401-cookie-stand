import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Home() {
  const [store, setStore] = useState({});
  const [stores, setStores] = useState([]);
  const newStore = (store) => {
    setStore(store);
    setStores([...stores, store]);
  }
  
  const getStoresFake = () => {
    const hourFlux = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
    //TODO: get stores form API
    function CookieStore (location, minCustomers, maxCustomers, avgCart) {
      this.location = location;
      this.minCustomers = minCustomers;
      this.maxCustomers = maxCustomers;
      this.avgCart = avgCart;
      this.hourlySales = hourFlux.map(flux=>getRandomSales(this, flux));
    }
  
  function getRandomSales(store, flux) {
    let sales = Math.floor( flux*store.avgCart * Math.floor(Math.random() * (store.maxCustomers - store.minCustomers) + store.minCustomers));
    console.log(sales);
    return sales;
  }
    const storesList = [
      new CookieStore('Seattle', 23, 65, 6.3),
      new CookieStore('Tokyo', 3, 24, 1.2),
      new CookieStore('Dubai', 11, 38, 3.7),
      new CookieStore('Paris', 20, 38, 2.3),
      new CookieStore('Lima', 2, 16, 4.6)
    ];
    console.log(storesList);
    setStores(storesList);
  }

  const getStores = async () => {
    const response = await axios.get('https://salmon-cookie-api.azurewebsites.net/api/Store');
    setStores(response.data);
  }

  useEffect(()=>{
    console.log('effect is running');
    getStores();
  },[]);
  

  return (
    <>
      <Header/>
      <Main newStore={newStore} stores={stores}/>
      <Footer stores={stores}/>
    </>
  )
}
