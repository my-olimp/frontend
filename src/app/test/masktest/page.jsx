"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { MaskedInput } from "@/shared/MaskedInput/ui/ui";

export default function CursorPositionSaver() {
  const [shownValue, setShownValue] = useState("");
  const [position, setPosition] = useState(0);

  const inputRef = useRef(null);

 

  // применяем простую маску, при которой курсор прыгает в конец
  const handleChange = useCallback((evt) => {
    let value = evt.target.value.replace(/_/g, "");
    let newValue =
      value.length <= 10 ? value + "_".repeat(10 - value.length) : value;
    setShownValue(newValue);
    setPosition(evt.target.selectionStart);
  }, []);

  useEffect(() => {
    if (inputRef !== null) {
      // возвращаем курсор на оригинальную позицию
      inputRef.current.selectionStart = position;
      inputRef.current.selectionEnd = position;
      console.log("position", position);
    }
  }, [position]);

  console.log("inputRef.current", inputRef.current);

  return (
    <>
      <div>
        <MaskedInput
          onBlur={(e) => blurHandler(e)}
          onFocus={() => handleFocus()}
          mask="+7(999) 999 99 99"
          value={shownValue}
          onChange={handleChange}
        >
          <input value={shownValue} ref={inputRef} />
        </MaskedInput>
      </div>
    </>
  );
}
