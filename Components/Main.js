import AddStore from '../Components/AddStore'
import Table from '../Components/Table'
function Main({newStore, stores, deleteStore}) {
  const hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  return(
    <>
      <AddStore newStore={newStore}/>
      <Table stores={stores} hoursOpen={hoursOpen} deleteStore={deleteStore}/>
    </>
  )
}

export default Main