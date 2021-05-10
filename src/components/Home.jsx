import React,{useState} from "react";
import CryptoTile from "./CryptoTile";
import BuyForm from './BuyForm'
import Transaction from './Transaction';

import Btc from "../assets/Btc.png";
import Etherium from "../assets/Etherium.png";
// import lite from '../assets/lite.png'
import Xem from "../assets/Xem.png";

const Home = () => {
  const tiles = [
    { id: 1, icon: Btc, name: "BTC", rate: 33834 },
    { id: 2, icon: Etherium, name: "ETH", rate: 1394 },
    { id: 3, icon: Xem, name: "XEM", rate: 0.2708 },
  ];


  const[selectedTile, setSelectedState] = useState(tiles[0]);

  const [list, setList] = useState([]);

  const handleSelect = (data)=>{
      setSelectedState(data);
  }

  const buildList = (list) =>{
    setList(list);
  }

  // console.log(selectedTile);


  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            {tiles.map((items) => (
              <CryptoTile 
              key={items.id} 
              data={items}  
              onClick={handleSelect}
              selected = {items.id === selectedTile.id}
              />
              ))}
          </div>
          <BuyForm data={selectedTile} onPurchase={buildList}/>
        </div>
        <div className="col-6">
          <Transaction list = {list}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
