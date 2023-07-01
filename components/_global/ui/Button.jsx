import { cx } from "@emotion/css";

export default function Button({ children, className, type }) {
    if (type === "contained") {
        return (
            <button className={cx(
                "bg-white text-black hover:brightness-90 transition",
                "py-1.5 px-3", "rounded-md",
                "text-sm font-semibold", className)}>
                {children}
            </button>
        )
    }
    else if (type === "filled") {
        return (
            <button className={cx(
                "bg-transparent text-c2", "border border-c2",
                "hover:brightness-90 transition",
                "py-1.5 px-3",
                "rounded-md",
                "text-sm font-semibold", className)}>
                {children}
            </button>
        )
    }
}
