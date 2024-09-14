"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [arr, setArr] = useState();

    const ran = () => {
        return Math.random() * 16;
    };

    const ran100 = () => {
        return Math.random() * 100;
    };

    useEffect(() => {
        const render = () => {
            const array:any = [];

            for (let i = 0; i < 20000; i++) {
                array[i] = { x: ran(), y: ran() };
            }

            return array;
        };

        const run = () => {
            setArr(render());
        };

        run();

        setInterval(() => {
            run();
        }, 4000);
    }, [setArr]);

    return (
        <div className="flex flex-wrap">
            {arr?.map((element: any, index: any) => (
                <div
                    key={index}
                    className="flex justify-center items-center size-3"
                >
                    <div
                        style={{
                            opacity: `${ran100()}%`,
                            height: `${element.y}px`,
                            minWidth: `${element.x}px`,
                        }}
                        className="bg-white"
                    ></div>
                </div>
            ))}
        </div>
    );
}
