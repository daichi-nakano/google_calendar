import React from "react";
import { useState } from "react";
import PracticeButton from "../atoms/PracticeButton";

const Practice = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickChange = () => setIsAdmin(!isAdmin);
  return (
    <div>
      {/* 管理者の切り替え処理 */}
      <button onClick={onClickChange}>切り替え</button>
      <PracticeButton isAdmin={isAdmin} />
    </div>
  );
};

export default Practice;
