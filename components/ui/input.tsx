interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    label?: string;
    name: string;
    placeholder?: string;
    hidden?: boolean;
    className?: string;
}
export default function Input({ 
    type = "text",
    name,
    label,
    hidden = false,
    placeholder,
    className = "",
    ...props
 }: Props) {
    return (
        <label className="flex flex-col mb-4 w-full">
            <span className={`capitalize- text-sm font-bold mb-2 ${hidden && 'sr-only'}`}>{label || name}</span>
            <input
                {...props}
                type={type || "text"}
                name={name}
                className={`py-2 px-3 h-10 rounded border text-base focus:outline-none ${className}`}
                placeholder={placeholder}
            />
        </label>
    )
}