import { useEffect, useState } from "react";

import { echo } from "./services/echo";
import { increment } from "./services/Increment";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function App() {
	const [count, setCount] = useState(0);

	async function handleClick() {
		await increment();
	}

	useEffect(() => {
		echo.channel("Counter").listen("CounterIncremented", () => setCount((prev) => prev + 1));

		return () => echo.leave("Counter");
	}, []);

	return (
		<>
			<img src={viteLogo} className="logo" alt="Vite logo" />
			<img src={reactLogo} className="logo react" alt="React logo" />

			<h1 className="read-the-docs">WebSocket</h1>

			<div className="card">
				<button onClick={handleClick}>{count}</button>
			</div>
		</>
	);
}
