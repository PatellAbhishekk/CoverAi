import { cn } from "@/lib/utils"; // Optional: utility to combine classes

const alertVariants = {
  warning: "alert-warning",
  error: "alert-error",
  success: "alert-success",
  info: "alert-info",
};

export default function Alert({
  message = "Some error occurred!",
  type = "warning", // 'warning', 'error', 'success', 'info'
  className = "",
  icon = true,
}) {
  return (
    <div
      role="alert"
      className={cn(
        "alert",
        alertVariants[type] || alertVariants.warning,
        className
      )}
    >
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      )}
      <span>{message}</span>
    </div>
  );
}
