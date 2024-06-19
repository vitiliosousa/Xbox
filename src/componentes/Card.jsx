export default function Card({image,title}) {
    const imageUrl = `url(${image})`
    return(
        <>
            <div className="h-[500px] w-80 bg-cover flex items-end justify-center my-10 mx-4 lg:mx-0" style={{ backgroundImage: imageUrl}}>
                <img src={title} className="h-10 mb-10"/>
            </div>
        </>
    )
}