import React from 'react';
import { Query } from 'raect-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionsOverviewContainer = () => {
  <Query query={GET_COLLECTIONS}>
    {
      ({ loading, errr, data }) => {
        console.log({ error });
        if (loading) return <Spinner />;
        return <CollectionsOverview collections={ data. collections } />
      }
    }
  </Query>
}

export default CollectionsOverviewContainer;