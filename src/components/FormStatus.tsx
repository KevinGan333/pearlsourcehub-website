interface FormStatusProps {
  message: string;
  type: "error" | "success";
  onDismiss?: () => void;
}

export default function FormStatus({ message, type, onDismiss }: FormStatusProps) {
  if (!message) return null;

  return (
    <div
      className={`rounded-lg p-4 text-sm ${
        type === "success"
          ? "bg-green-50 border border-green-200 text-green-800"
          : "bg-red-50 border border-red-200 text-red-800"
      }`}
      role="alert"
    >
      <div className="flex items-start gap-2">
        <svg
          className="mt-0.5 h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          {type === "success" ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          )}
        </svg>
        <span className="flex-1">{message}</span>
        {onDismiss && (
          <button type="button" onClick={onDismiss} className="flex-shrink-0 text-current opacity-60 hover:opacity-100">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-label="Dismiss"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}
