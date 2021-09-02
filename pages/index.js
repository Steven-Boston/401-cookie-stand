import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import { useState, usestate } from 'react'

export default function Home() {
  const [store, setStore] = useState({});
  const [stores, setStores] = useState([]);

  const newStore = (store) => {
    setStore(store);
    setStores([...stores, store]);
  }

  return (
    <>
      <Header/>
      <Main newStore={newStore} stores={stores}/>
      <Footer stores={stores}/>
    </>
  )
}
