import { useState } from "react";

function Content() {

    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center pt-12 gap-6">
            <h1>Vite + React</h1>
            <div className="flex flex-col gap-6">
                <button type="button" onClick={() => setCount(() => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default Content;