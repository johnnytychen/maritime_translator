export function Input({ placeholder, value, onChange }) {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border p-2 rounded-md w-full"
        />
    );
}
