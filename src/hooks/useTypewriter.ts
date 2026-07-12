import { useEffect, useState } from "react";

interface Options {
  speed?: number; // ms per character
  startDelay?: number;
  active?: boolean;
}

/**
 * Types a single line of text out character by character.
 * Returns the text typed so far and whether typing has finished.
 */
export function useTypewriter(fullText: string, options: Options = {}) {
  const { speed = 32, startDelay = 0, active = true } = options;
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    setText("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setText(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText, speed, startDelay, active]);

  return { text, done };
}
