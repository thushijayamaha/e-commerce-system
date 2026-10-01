'use client'

import { motion, useReducedMotion } from 'framer-motion'

const Reveal = ({ children, className = '', delay = 0 }) => {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.16 }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal