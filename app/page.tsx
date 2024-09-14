"use client";

import { useEffect, useState } from "react";

type Element = {
    x: number;
    y: number;
};

export default function Home() {
    const [arr, setArr] = useState<Element[]>([]);

    // Funzione che genera un numero casuale tra 0 e 16
    const ran = () => Math.random() * 16;

    // Funzione che genera un numero casuale tra 0 e 100
    const ran100 = () => Math.random() * 100;

    // Effetto che genera i dati e imposta l'aggiornamento ogni 4 secondi
    useEffect(() => {
        const render = () => {
            const array: Element[] = [];
            for (let i = 0; i < 20000; i++) {
                array.push({ x: ran(), y: ran() });
            }
            return array;
        };

        const run = () => {
            setArr(render());
        };

        // Prima esecuzione
        run();

        // Aggiorna i dati ogni 4 secondi
        const intervalId = setInterval(run, 4000);

        // Pulizia dell'intervallo quando il componente viene smontato
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-wrap">
            {arr?.map((element, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center size-4"
                >
                    <div
                        style={{
                            opacity: `${ran100()}%`,
                            height: `${element.y}px`,
                            minWidth: `${element.x}px`,
                        }}
                        className="bg-black"
                    ></div>
                </div>
            ))}
        </div>
    );
}
