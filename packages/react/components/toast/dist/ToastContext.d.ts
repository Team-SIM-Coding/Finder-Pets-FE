/// <reference types="react" />
import { ToastPayload } from "./types";
export type ToastConfigProps = {
    payload: ToastPayload;
    duration?: number;
};
export type ToastContextType = {
    toast: (toastProps: ToastConfigProps) => void;
};
export declare const ToastContext: import("react").Context<ToastContextType>;
