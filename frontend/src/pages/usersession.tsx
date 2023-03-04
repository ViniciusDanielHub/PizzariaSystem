import { getTokenLocalStorage } from "context/auth/util";
import { useEffect, useState } from "react";

export default function UserSession () {
  const [user, userData] = useState('')

  useEffect(() => {
    const data = getTokenLocalStorage();

    if (data) {
      return;
    } else {
      const mainURL = window.location.origin
      window.location.href = `${mainURL}`
    }
  })
}