import { useState } from "react";
import App from "../../App"


function CtaLink(){

const links = [
    {id: 1, link: 'linkedin.com' , text: 'linkedin'},
    {id: 2, link: 'github.com' , text: 'github'}
];


    return (
        <>
            <div className="flex gap-2 content-between w-[100%] justify-center">
            {
                
                links.map( (e) => ( 
                    <div key={e.id} className="border-1  border-slate-500 rounded-xl px-5 py-1 text-color-base min-w-[150px] text-center">
                        <a 
                            href={e.link}
                        >
                            {e.text}  
                        </a>
                    </div>
                
                    ))}
            </div>
        </>
    );
}

export default CtaLink;