import React from "react";
import { useState } from "react";
import type { Userprofile } from "../components/types/api/UserProfile";
import type { User } from "../components/types/User";
import axios from "axios";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    axios
      .get<Array<Userprofile>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { userProfiles, loading, error, onClickFetchUser };
};
