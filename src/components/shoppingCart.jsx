import { useState } from 'react';

const ShoppingCart = ()=> {
    const [count, setCount] = useState(0);
    const plus = () => {
            setCount(count + 1)
    }

    const minus = () => {
        if(count > 0) {
                setCount(count - 1)
        }
    }

    const addCart = () => {
        alert(`${count} 個の商品をカートに入れました。 !`);
    }

    return (
        <div>
            <h2>ショッピングカート</h2>
            <p>現在の選択個数：{count}個</p>

            <button onClick={plus}>個数を増やす</button>
            <button onClick={minus}>個数を減らす</button>
            <button onClick={addCart}>カートに入れる</button>
        </div>
    )
}

export default ShoppingCart;