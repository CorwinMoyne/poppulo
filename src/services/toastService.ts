import { toast, TypeOptions } from "react-toastify";

export const showToast = (message: string, type: TypeOptions = "success") => {
  toast(message, { type: type });
};
