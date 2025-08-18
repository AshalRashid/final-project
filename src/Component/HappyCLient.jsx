import image12 from '../assets/Shop/Cardimage12.png'
import image14 from '../assets/Shop/Cardimage14.png'
import image10 from '../assets/Shop/Cardimage10.png'
import { CopyCheck } from 'lucide-react'

export default function HappyClient() {
    const Products = [
        {
            id: 1,
            Skill: "Custom Support",
            description: "Customer support was amazingly fast, personal response via skype and helped me within minutes, thank you so much!!",
            name: 'JANE SMITH',
            post: "Founder and CEO",
            image: image12
        },
        {
            id: 2,
            Skill: "Design Quality",
            description: "Its just super to work with, easy support & fast, and just makes everything possible. We very happy with this.",
            name: 'ROBERT JOHNSON',
            post: "Marketing Director",
            image: image14,
        },
        {
            id: 3,
            Skill: "Customizability",
            description: "I'm rating this theme 5 stars for design and quality and also customer support were excellent and very responsive.",
            name: 'AMANDA WHITE',
            post: "Head of Customer Relations",
            image: image10,
        },
    ]

    return (
        <div className="w-full mt-4 shadow-lg group p-10 bg-gray-200 overflow-hidden ">
            {/* Container for all cards */}
                <p className='text-[36px] font-serif text-center font-medium'>Happy Client</p>
            <div className="flex flex-wrap gap-6 justify-center">
                {Products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md p-6 max-w-sm flex flex-col justify-between"
                    >
                        {/* Stars */}
                        <div className="flex justify-center mb-3 text-yellow-400">
                            ★★★★★
                        </div>

                        {/* Title */}
                        <p className="text-[14px] font-semibold mb-2 text-center">{product.Skill}</p>

                        {/* Review */}
                        <p className="text-gray-600 font-sans italic font-medium mb-2 text-center">
                            {product.description}
                        </p>

                        {/* Name & Role */}
                        <div className="mb-4">
                            <p className="font-medium text-center text-[12px]">{product.name} <br />
                                <span className="text-[10px] text-gray-500 text-center">{product.post}</span>
                            </p>
                        </div>

                        {/* Product & Icon */}
                        <div className="flex justify-between items-center border-t border-t-gray-300 pt-4">
                            <div className="flex items-center gap-2">
                                <img src={product.image} alt="Earbuds" className="w-8 h-8" />
                                <span className="text-sm text-gray-700">High-fidelity ANC earbuds</span>
                            </div>
                            <div className="bg-yellow-400 text-white rounded-full p-2 cursor-pointer">
                                <CopyCheck/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
