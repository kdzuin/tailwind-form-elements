import classNames from 'classnames';
import React from 'react';

interface TextInputProps {
    placeholder?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    error?: string;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
    placeholder,
    label,
    value,
    error,
    onChange,
    className,
}) => {
    return (
        <label className="grid gap-2">
            <div>{label}</div>
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => typeof onChange !== 'undefined' && onChange(e.target.value)}
                    className={classNames('block px-5 py-3 w-full', 'rounded-sm ring-1', className)}
                />
            </div>
            {error && <div className="text-red-500 text-xs">{error}</div>}
        </label>
    );
};

export default TextInput;
