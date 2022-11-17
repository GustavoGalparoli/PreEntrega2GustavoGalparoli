import { useState, useEffect } from 'react'
import {data} from '../../data/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);
  const { categoryName } = useParams();
  
  
  const getProducts = new Promise ((res, rej) => {
    setTimeout(() => {
      if(categoryName) {
        const filteredData = data.filter((producto) => {
          return producto.category === categoryName;
        });
      res(filteredData);
    } else {
      res(data);
    }
  }, 1000);
  });
  useEffect (() => {
    getProducts.then((res) => setItems(res));
  }, [categoryName])
  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;