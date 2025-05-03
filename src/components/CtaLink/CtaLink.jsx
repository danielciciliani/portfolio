
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
                    <div key={e.id} className="border-1  border-slate-500 rounded-2xl px-5 py-1 text-color-base min-w-[150px] text-center hover:bg-blue-500 transition-all">
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