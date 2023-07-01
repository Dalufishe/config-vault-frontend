import { css, cx } from "@emotion/css";
import Button from "../ui/Button";

export default function Navbar() {
    return (
        // Wrapper
        <div className={cx(
            "h-[64px]",
            "border-b border-b-c1",
            "flex justify-center items-center",
            "mx-4")}>
            {/* Main Part */}
            <div className={cx(
                "w-[1400px]",
                "flex items-center justify-between")}>
                {/* Left Box */}
                <div className="flex items-center gap-9">
                    {/* Logo */}
                    <h1 className="text-2xl font-semibold">
                        Config Vault
                    </h1>
                    {/* Menu */}
                    <nav className="text-c2 text-sm">
                        <ul className="flex justify-start items-center gap-3">
                            <li><a href="">探索</a></li>
                            <li><a href="">你的合集</a></li>
                            <li><a href="">版本</a></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>
                {/* Right Box */}
                <div className="flex items-center gap-5">
                    {/* Register Btn */}
                    <Button type="filled" className="text-sm">註冊</Button>
                    {/* Login Btn */}
                    <Button type="contained" className="text-sm">登入</Button>
                </div>
            </div>
        </div>
    )
}
