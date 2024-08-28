"use client";
import { useLayoutEffect, useState } from "react";

type props = {
  id: string;
};

export function useWindowPosition(props: props): boolean {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(
        props.id
      )?.offsetHeight;
      if (window.pageYOffset > (offsetSetHeight ?? 0) * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [props.id]);
  return animation;
}
