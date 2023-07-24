"use client";
import { MaskedInput } from "@/shared/MaskedInput/ui/ui";
import { useState } from "react";
export default function Test() {
    const [text, setText] = useState();
  return (
    <>
      <MaskedInput mask="7 999 999 99 99">
        <input
          style={{ height: "44px", width: "400px", border: "1px solid #222" }}
          type="text"
          value={text}
        />
      </MaskedInput>
    </>
  );
}

/*$inputBorder: #ddd;
$input-height: 44px;

.input {
  height: $input-height;
  border: 1px solid $inputBorder;
  outline: none;
  border-radius: 8px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: "SF_Regular", sans-serif;
  color: #222;
}*/
