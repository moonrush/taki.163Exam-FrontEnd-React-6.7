import React, { useState } from 'react'
import InputNumber from '../components/InputNumber'

function InPage() {
    const [value, setValue] = useState('0')

    return (
        <div>
            <h1>题目6：实现InputNumber组件</h1>
            <div>受控InputNumber组件：<InputNumber value={value} onChange={e => { setValue(e) }} /></div>
            <div>非受控InputNumber组件：<InputNumber defaultValue={value} onChange={e => { }} /></div>
        </div>
    )
}

export default InPage