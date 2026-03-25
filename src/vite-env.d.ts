/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: unknown, vars?: unknown);
    chars: unknown[];
    words: unknown[];
    lines: unknown[];
    revert(): void;
  }
}
