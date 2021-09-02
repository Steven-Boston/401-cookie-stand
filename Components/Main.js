import AddStore from '../Components/AddStore'
import Table from '../Components/Table'
function Main(props) {
  return(
    <>
      <AddStore newStore={props.newStore}/>
      <Table stores={props.stores}/>
    </>
  )
}

export default Main