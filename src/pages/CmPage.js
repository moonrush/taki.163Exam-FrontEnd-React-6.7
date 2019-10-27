import React, { useState, useEffect } from 'react'
import { confirm } from '../components/Confirm'

function CmPage() {
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let res = await confirm("确定删除吗？")
            if (res) {
                console.log("是")
                setValue('是')

            } else {
                console.log("否")
                setValue('否')
            }
        }

        if (!value) {
            fetchData()
        }
    })

    return (
        <div>
            <h1>题目7：confirm方法调用组件</h1>
            {!!value ? <div>用户的选择是：{value}</div> : ''}
        </div>
    )
}

export default CmPage