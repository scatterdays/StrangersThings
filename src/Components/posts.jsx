import React, { useState } from "react";
import { fetchAllPosts } from "../api/postfetch";

export default function posts() {
  return (
    <div>
      <postfetch />{" "}
    </div>
  );
}
