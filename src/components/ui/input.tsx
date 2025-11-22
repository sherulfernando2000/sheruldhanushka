import { useState } from "react";

type inputProps = {
  label: string;
  type?: string;
  required: boolean;
  placeholder: string;
  value?: string | boolean
  onChange: (value: string) => void;
}

export default function InputField({ label, type = "text", required = false, placeholder = "", value, onChange }: inputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const isActive = isFocused || hasContent;

  return (
    <div className="relative pt-6">
      <div
        className={`absolute left-0 text-gray-300 transition-all duration-200 pointer-events-none ${isActive ? 'top-5 text-xs' : ' text-base'
          }`}
      >
        {label} {required && <span className="text-gray-400">*</span>}
      </div>
      {type === "textarea" ? (
        <textarea
          value={value as string || ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
          placeholder={isFocused ? placeholder : ''}
          className="bg-transparent border-b border-gray-600 text-white pt-5 px-0 focus:outline-none focus:border-gray-400 transition-colors min-h-[50px] w-full resize-none"
        />
      ) : (
        <input
          type={type}
          value={value as string || ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
          placeholder={isFocused ? placeholder : ''}
          className="bg-transparent border-b border-gray-600 text-white pt-5 px-0 focus:outline-none focus:border-gray-400 transition-colors w-full"
        />
      )}
    </div>
  );
};