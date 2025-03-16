import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation, useInView } from "framer-motion"

/**
 * Reveal Component
 * ----------------
 * This component animates its children when they enter the viewport.
 * It uses Framer Motion for smooth entrance animations and resets the animation when out of view.
 * 
 * Features:
 * - Animates elements each time they come into view
 * - Uses `useInView` to track visibility
 * - Controlled with `useAnimation` for flexibility
 * - Fully compatible with ThemeForest coding standards
 */

const Reveal = ({ children }) => {
    // Create a reference to track the component
    const ref = useRef(null)

    // Detect when the element enters the viewport
    const isInView = useInView(ref)

    // Animation control hook
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible") // Start animation when in view
        } else {
            mainControls.start("hidden") // Reset animation when out of view
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className='relative w-full'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 }, // Initial state (hidden)
                    visible: { opacity: 1, y: 0 }  // Target state (visible)
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className='h-full w-full'
            >
                {children} {/* Render child elements inside the animated wrapper */}
            </motion.div>
        </div>
    )
}

// ✅ Prop Validation (Ensures `children` is a valid React node)
Reveal.propTypes = {
    children: PropTypes.node.isRequired, // Only valid React elements are allowed
}

export default Reveal
