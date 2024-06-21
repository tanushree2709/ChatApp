import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorE1={anchorE1} open={false}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis totam
        odit esse!
      </div>
    </Menu>
  );
};

export default FileMenu;
