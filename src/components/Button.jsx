export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-orange-600 text-stone-50 hover:bg-orange-700 hover:text-stone-50"
      {...props}
    >
      {children}
    </button>
  );
}
