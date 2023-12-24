import { useParams } from "react-router-dom";

const ItemPage = ({}) => {

  const {tableId} = useParams()


 // Fetch the item's data from your server or state using the id

 return (
  <div>
    <p>Item page</p>
        <p>Item {tableId}</p>
  </div>
 );
};

export default ItemPage;
