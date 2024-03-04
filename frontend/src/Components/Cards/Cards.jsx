import React, { useState } from 'react'
import './cards.css'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { motion } from 'framer-motion'

const objs = [
    {
        title: "Title 1",
        overview: "Overview 1 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 2",
        overview: "Overview 2 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "4.0"
    },
    {
        title: "Title 3",
        overview: "Overview 3 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 4",
        overview: "Overview 4 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "2.0"
    },
    {
        title: "Title 3",
        overview: "Overview 3 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "5.0"
    },
    {
        title: "Title 4",
        overview: "Overview 4 is of great importance as we dive deeper into it.",
        img: "https://media.contentapi.ea.com/content/dam/eacom/images/2020/09/ea-featured-image-ea-desktop-beta.jpg.adapt.crop191x100.1200w.jpg",
        rating: "2.0"
    },
]

function Cards() {

    const navigate = useNavigate()

    const [openModal, setOpenModal] = useState(true);

    const handleModal = (e) => {
        setOpenModal(true)
        e.stopPropagation()
    }

    const handleCloseModal = (e) => {
        setOpenModal(false)
    }

    const handleGoBack = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        openModal ? (
            <aside
                className='w-screen h-screen bg-transparent flex justify-center items-center absolute p-10'
                onClick={handleCloseModal}
            >
                <div
                    className='w-lg h-auto flex flex-col gap-6 p-5'
                    id='modal'
                    onClick={handleModal}
                >
                    <section className='flex justify-between'>
                        <h1>Hii</h1>
                        <h4>Rating</h4>
                    </section>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eos officiis incidunt hic sint voluptates, distinctio cupiditate ad dolores corrupti libero, animi aliquid eaque exercitationem commodi ut? Nesciunt consequatur temporibus laudantium dolores ullam iusto saepe veritatis, repudiandae sunt totam ipsa fuga hic soluta in optio vero quos sequi est dicta! Nobis voluptatibus veniam consequuntur eveniet, ea, provident officia esse commodi ipsam illum suscipit odit numquam recusandae dolorem incidunt! Nobis ab assumenda a amet mollitia expedita aliquid delectus voluptatem ipsa labore.</p>
                </div>
            </aside>
        ) : (
            <div id='container' className='min-w-screen min-h-screen'>
                <section id='search-section' className='p-8 w-full flex justify-around'>
                    <div id='search-button' className='w-1/2 relative'>
                        <input
                            type="text"
                            id="search"
                            name='search'
                            placeholder='Search movies'
                            className='px-3 py-2 rounded-lg bg-transparent opacity-85 shadow-glow-1 w-full '
                        />
                        <FaSearch
                            className='absolute right-3 top-3 cursor-pointer text-gray-400'
                            onClick={handleSearch}
                        />

                    </div >
                    <button
                        id='go-back-btn'
                        onClick={handleGoBack}
                    >
                        Go Back
                    </button>
                </section >
                <main id='cards' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center p-6'>
                    {objs.map((item, ind) => (
                        <motion.div
                            initial={{ rotateY: -180, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            transition={{ delay: ind * 0.5 + 1.0 }}
                        >
                            <Card key={ind}
                                item={item}
                                handleModal={handleModal}
                            />
                        </motion.div>
                    )
                    )}
                </main>
            </div >
        )
    );

}


export default Cards

{/* <div id = 'container' className = 'min-w-screen min-h-screen'>
                <section id = 'search-section' className = 'p-8 w-full flex justify-around'>
                    <div id = 'search-button' className = 'w-1/2 relative'>
                        <input
                            type = "text"
                            id = "search"
                            name = 'search'
                            placeholder = 'Search movies'
                            className = 'px-3 py-2 rounded-lg bg-transparent opacity-85       shadow-glow-1
                            w-full '
                        />
            <FaSearch
                className='absolute right-3 top-3 cursor-pointer text-gray-400'
                onClick={handleSearch}
            />

        </div >
            <button
                id='go-back-btn'
                onClick={handleGoBack}
            >
                Go Back
            </button>
                </section >
        <main id='cards' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center p-6'>
            {objs.map((item, ind) => (
                <motion.div
                    initial={{ rotateY: -180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ delay: ind * 0.5 + 1.0 }}
                >
                    <Card key={ind}
                        item={item}
                    />
                </motion.div>
            )
            )}
        </main>
            </div > */}


// <aside className='w-screen h-screen bg-transparent flex justify-center items-center absolute p-10'>
//                 <div className='w-lg h-auto flex flex-col gap-6'>
//                     <section className='flex justify-between'>
//                         <h1>Hii</h1>
//                         <h4>Rating</h4>
//                     </section>
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eos officiis incidunt hic sint voluptates, distinctio cupiditate ad dolores corrupti libero, animi aliquid eaque exercitationem commodi ut? Nesciunt consequatur temporibus laudantium dolores ullam iusto saepe veritatis, repudiandae sunt totam ipsa fuga hic soluta in optio vero quos sequi est dicta! Nobis voluptatibus veniam consequuntur eveniet, ea, provident officia esse commodi ipsam illum suscipit odit numquam recusandae dolorem incidunt! Nobis ab assumenda a amet mollitia expedita aliquid delectus voluptatem ipsa labore.</p>
//                 </div>
//             </aside>