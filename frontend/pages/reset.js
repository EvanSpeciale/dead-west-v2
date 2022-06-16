import React from 'react';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

const ResetPage = ({ query }) => {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must supply token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>Reset Your Password</p>
      <Reset token={query.token} />
    </div>
  );
};

export default ResetPage;
