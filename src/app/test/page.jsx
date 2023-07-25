'use client';
import React, { useState } from 'react';

export default function Form() {
    const [inputs, setInputs] = useState({
        input1: { value: '', borderColor: '' },
        input2: { value: '', borderColor: '' },
        input3: { value: '', borderColor: '' },
    });

    const handleBlur = (event) => {
        const inputName = event.target.name;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [inputName]: { ...prevInputs[inputName], borderColor: 'white' },
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: { ...prevInputs[name], value },
        }));
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="input1"
                    value={inputs.input1.value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ borderColor: inputs.input1.borderColor }}
                />
                <br />
                <input
                    type="text"
                    name="input2"
                    value={inputs.input2.value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ borderColor: inputs.input2.borderColor }}
                />
                <br />
                <input
                    type="text"
                    name="input3"
                    value={inputs.input3.value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ borderColor: inputs.input3.borderColor }}
                />
            </form>
        </div>
    );
}
