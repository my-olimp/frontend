"use client";

import { useState } from "react";
import styles from "./index.module.scss";
import {LoginForm} from '@/widgets/AuthForm/LoginForm/ui/ui';

export default function Auth() {
  return (
    <div className={styles.wrap}>
      <LoginForm/>
    </div>
  );
}
