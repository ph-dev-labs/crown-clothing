import React from "react";
import SHOP_DATA from "./shop.data.js";

import PreviewCollection from "../../component/preview-collection/preview-collection-component.jsx";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           collections: SHOP_DATA   
        }

       
    }

    render() {

      const {collections} = this.state;
      return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionsProps}) =>(
            <PreviewCollection key={id} {...otherCollectionsProps} />
          ))
        }
      </div>
      )
    }

   
}


export default ShopPage;