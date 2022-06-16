/* eslint-disable react/prop-types */
import React from 'react';
import UpdateProduct from '../components/UpdateProduct';

const UpdatePage = ({ query }) => (
  <>
    <UpdateProduct id={query.id} />
  </>
);

export default UpdatePage;
