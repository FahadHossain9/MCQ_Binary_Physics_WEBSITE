    import React from "react";
    import Link from "next/link";
    import { motion } from "framer-motion";
    const MotionDiv = motion.div;
    const card = ({ chapterName }) => {
    return (
        <Link href="#">
        <MotionDiv
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col justify-between items-center bg-white rounded-lg shadow-lg p-6 cursor-pointer w-[320px] h-[170px] hover:shadow-xl transform transition duration-300 ease-in-out"
        >
            <h2 className="text-2xl font-medium text-gray-800 mb-4 text-center">{chapterName}</h2>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            Start Exam
            </button>
        </MotionDiv>
        </Link>
    );
    };
    export default card