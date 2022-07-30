import reactLogo from "@assets/images/react.svg";

type Props = {
    heading: string
}

function Header({ heading }: Props) {
    return (
        <header className="flex flex-col items-center">
            <div className="content-center">
                <h1>{heading}</h1>
            </div>
            <div className="flex gap-6 p-6">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
        </header>
    );
}

export default Header;