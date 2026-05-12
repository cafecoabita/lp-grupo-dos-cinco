/// <reference types="vite/client" />

declare global {
  interface Window {
    gtagSendEvent?: (url: string, eventName?: string) => void;
  }
}
