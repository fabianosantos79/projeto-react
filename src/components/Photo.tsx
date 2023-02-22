import { ReactNode } from 'react';

type Props = {
    url: string,
    legend: string,
    children: ReactNode
}

export const Photo = ( { legend, children }:Props ) => {
    return(
        <div>
            {children}
            <p>{ legend }</p>
        </div>
    )
}