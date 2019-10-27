import React from 'react'
import ReactDOM from 'react-dom';
import './confirm.css';

// 异步加载一个组件
function Confirm(props) {
    const { text, onClick } = props
    return (
        <div>
            <div className="mb"></div>
            <div className="tc">
                <div className="tc-cfm" >
                    <div>{text}</div>
                    <hr />
                    <div style={{ textAlign: "right" }}>
                        <button onClick={e => { onClick(true) }}>确定</button>
                        <button onClick={e => { onClick(false) }}>取消</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const confirm = (str) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const onClose = () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    }


    return new Promise((resolve) => {
        ReactDOM.render(
            <Confirm
                text={str}
                onClick={e => {
                    resolve(e)
                    onClose()
                }} />, div)
    })
}

export { confirm }