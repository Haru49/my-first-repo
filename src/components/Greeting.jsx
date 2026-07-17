const Greeting = ()=> {
    const handleInput = (event) => {
        const text = event.target.value;
        document.getElementById('output').textContent = text;
    };

    const greet = (text) => {
        alert(`Hello, ${text} !`);
    };

    return (
        <div>
            <input onChange={handleInput} />
            <p id="output"></p>
            <button onClick={() => greet(document.getElementById('output').textContent)}>ここに入力</button>
        </div>
    );
}

export default Greeting;