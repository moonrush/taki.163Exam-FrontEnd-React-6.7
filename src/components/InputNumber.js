import React from 'react'

function InputNumber(props) {
    const { value, defaultValue, onChange } = props
    return (
        <input value={value} defaultValue={defaultValue} onChange={e => {
            // e.target.value是个数值
            if (!!e.target.value && !(/^\d+$/.test(e.target.value))) {
                alert('请输入数值')
            } else {
                onChange(e.target.value)
            }
        }} />
    )
}

export default InputNumber