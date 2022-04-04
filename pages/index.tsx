import {  motion } from 'framer-motion';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <motion.div
    layoutId="underline"
    initial
    animate={{ backgroundColor: "#ff0000" }}
    className="container rounded-full text-center text-white p-5 w-1/4 m-10"
  >
    HEY!
  </motion.div>
  )
}



export default Home
