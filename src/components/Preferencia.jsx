import React from 'react';

const Preferencia = ({ t }) => {

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <div key={t.id}>
                <span className="text-center text-sm px-2">
                    {t.nombre}
                    {t.interesa ? (
                        " ✅"
                    ) : (
                        " ❌"
                    )}
                </span>
            </div>
        </div>
    );
};

export default Preferencia;
