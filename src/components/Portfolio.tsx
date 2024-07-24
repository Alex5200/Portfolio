import {animate, motion} from 'framer-motion'

export default function Portfolio(){
    const imges = [
        {
            img: "https://img.freepik.com/free-photo/abstract-wavy-background_23-2150534138.jpg?t=st=1721829266~exp=1721832866~hmac=67a190a40f2cef3c2a0f0dc89c78e0f5c26640fddc30439110b43608c05163a0&w=740",
            text: "React Admin panel",
            description: ""
        },
        {
            img:"https://img.freepik.com/free-photo/abstract-wavy-background_23-2150534051.jpg?t=st=1721829503~exp=1721833103~hmac=399ecb35b9a753196f28dfa7629fa29099b123c0f4ca54efbbb2c005ad8478e6&w=740",
            text: "React Admin panel",
            description: ""
        },
        {
            img: "https://img.freepik.com/free-photo/abstract-wavy-background_23-2150534021.jpg?t=st=1721829582~exp=1721833182~hmac=55c1ea4bc42609df9e26f53cc64e2b4b9f25a39558e55c28e70c0a643f1a06ec&w=740",
            text: "React Admin panel",
            description: ""
        }
    ]
    const RenderList = imges.map(e =>
        <motion.div
        key={Date.now() + e.description}
        animate={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-25}}
        whileHover={{ scale: 1.2 }}
        className="w-1/3  
        px-4
        border p-2 border-4 rounded-xl border-dashed border-[#1e40af]/20 hover:border-[#1e40af]/60">
            <img className="w-[300px] rounded-2xl" src={e.img} alt="pic"/>
            <h1 className="text-xl text-center font-bold mt-4 text-black/80">{e.text}</h1>
        </motion.div>
        )
    return(
    <div className="flex p-4 gap-12 flex-wrap justify-center items-center my-12">
       {RenderList}
    </div>
    )
}