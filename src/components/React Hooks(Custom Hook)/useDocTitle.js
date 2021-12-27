import React, { useEffect } from "react";

const useDocTitle = (count) => {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
};

export default useDocTitle;
