import React from "react";
import Button from "@mui/material/Button";

const PracticeButton = (props: any) => {
  const { isAdmin } = props;
  return (
    <div>
      <Button variant="text" disabled={!isAdmin}>
        ボタン
      </Button>
    </div>
  );
};

export default PracticeButton;
