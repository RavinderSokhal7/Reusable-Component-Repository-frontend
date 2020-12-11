import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Loading() {
  return (
    <div>
      <Skeleton variant="rect" width={400} height={40} />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={400} height={400} />
    </div>
  );
}
