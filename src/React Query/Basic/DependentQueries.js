import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUser = (email) => {
  return axios.get(`http://localhost:4000/user/${email}`);
};

const fetchChannel = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUser(email));
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchChannel(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQueries</div>;
};

export default DependentQueries;
