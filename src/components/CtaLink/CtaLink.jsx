
function CtaLink(){

const links = [
    {id: 1, link: 'linkedin.com' , text: 'linkedin'},
    {id: 2, link: 'github.com' , text: 'github'}
];


    return (
        <>
            <div className="flex gap-4 content-between w-[100%] justify-center">
            {
                
                links.map( (e) => ( 
                    <div key={e.id} className="border-1  border-blue-500 rounded-2xl px-5 py-1 text-color-base min-w-[150px] text-center hover:border-pink-500 hover:scale-110 transition-all">
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