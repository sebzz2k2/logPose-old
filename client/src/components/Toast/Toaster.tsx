import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/Toast/Toast";
import { useToast } from "@/components/Toast/useToast";
import { RiErrorWarningLine, RiCheckboxCircleLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
export function Toaster() {
  const { toasts } = useToast();

  const getIcon = (type: string) => {
    type = type.toLowerCase();
    const defaultIconStyles = "text-3xl mr-2";
    switch (type) {
      case "success":
        return (
          <RiCheckboxCircleLine
            className={cn(defaultIconStyles, "text-green-500")}
          />
        );
      case "warning":
        return (
          <IoWarningOutline
            className={cn(defaultIconStyles, "text-yellow-500")}
          />
        );
      case "error":
        return (
          <RiErrorWarningLine
            className={cn(defaultIconStyles, "text-red-500")}
          />
        );
    }
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center">
              {title && getIcon(title.toString())}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
