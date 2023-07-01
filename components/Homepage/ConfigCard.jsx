import { cx } from "@emotion/css";
import { MdAdd } from "react-icons/md";

export default function ConfigCard({ className, type, name, description, image, content }) {

    return (
        <div
            className={cx(
                "w-[250px] h-[250px]",
                "hover:brightness-125 transition",
                "border border-c1",
                "text-c2",
                "rounded-lg",
                "flex flex-col justify-center items-center",
                className
            )}
        >
            {(function () {
                if (type === "none") {
                    return <>
                        <MdAdd className="text-3xl" />
                        <h5>添加文件</h5>
                    </>
                } else {
                    return <>
                        <div
                            onClick={() => {

                                fetch(content)

                            }}
                            className="h-[50%] flex justify-center items-center">
                            <img src={image} className={cx()} />
                        </div>
                        <div className="h-[50%] flex flex-col justify-end p-4">
                            <h5 className="font-bold text-2xl">{name}</h5>
                            <h5>{description}</h5>
                        </div>
                    </>
                }
            }
            )()}
        </div>
    )
}
