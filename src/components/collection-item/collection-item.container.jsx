import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'react-apollo';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {
      addItemToCart => <CollectionItem {...props} addItem={addItemToCart({ variables: { item } })} />
    }
  </Mutation>
);

export default CollectionItemContainer;