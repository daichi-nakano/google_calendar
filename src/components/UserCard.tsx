import React from "react";
import type { User } from "./types/User";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Props = {
  user: User;
};

const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <dl>
          <dt>名前</dt>
          <dt>{user.name}</dt>
          <br />
          <dt>メール</dt>
          <dt>{user.email}</dt>
          <br />
          <dt>住所</dt>
          <dt>{user.address}</dt>
        </dl>
      </CardContent>
    </Card>
  );
};

export default UserCard;
