import "./layout.css";

import Header from "@components/layout/Header";
import Content from "@components/layout/Content";

function Layout() {

    return (
        <div className="layout">
            <Header heading="Vite React TS Tailwind boilerplate" />
            <Content />
        </div>
    );
};

export default Layout;