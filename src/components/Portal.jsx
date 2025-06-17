import React from "react";

export const Portal = ({p}) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <div key={p.id}>
                <span className="text-center text-sm px-2">
                    {p.nombre}
                    {p.bloqueado ? (
                        " ❌"
                    ) : (
                        " ✅"
                    )}
                </span>
            </div>
        </div>
    );
}