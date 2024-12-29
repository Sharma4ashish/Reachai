import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ 
    label,
    type = 'text',
    classname = "",
    ...props
 }, ref) => {
    const id = useId();
    return (
        <div className=" w-full">
            {label && <label className=" inline-block mb-1 pl-1" htmlFor={id}>{label}</label>}
            <input 
            className={`${classname}`}
            type={type}
            id={id}
            {...props}
            
            />

            
        </div>
    );
  }
);

export default input;
