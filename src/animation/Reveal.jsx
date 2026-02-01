import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation, useInView } from "framer-motion"

/**
 * Reveal Component
 * ----------------
 * This component animates its children when they enter the viewport.
 * It uses Framer Motion for smooth entrance animations and triggers the animation only once.
 * 
 * Features:
 * - Animates elements only once when they come into view
 * - Uses `useInView` to track visibility
 * - Controlled with `useAnimation` for flexibility
 * - Fully compatible with ThemeForest coding standards
 */

const Reveal = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (isInView && !hasAnimated) {
            mainControls.start("visible")
            setHasAnimated(true) // Prevent further animations
        }
    }, [isInView, mainControls, hasAnimated])

    return (
        <div ref={ref} className='relative w-full'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='h-full w-full'
            >
                {children}
            </motion.div>
        </div>
    )
}

Reveal.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Reveal
