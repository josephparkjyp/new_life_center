import './FadeOnIntersect.css'
import React, { useRef, useEffect, useState } from 'react'

const FadeInOnIntersect = ({ children, shouldWaitForLoad }) => {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      })

      observer.observe(ref.current)

      return () => observer.disconnect()
    }
  }, [loaded])

  useEffect(() => {
    if (!shouldWaitForLoad) {
      setLoaded(true)
    } else {
      const handleLoad = () => {
        setLoaded(true)
      }
      if (document.readyState === 'complete') {
        setLoaded(true)
      } else {
        window.addEventListener('load', handleLoad)
        return () => {
          window.removeEventListener('load', handleLoad)
        }
      }
    }
  }, [shouldWaitForLoad])

  return (
    <div ref={ref} className="FadeInOnIntersect">
      {children}
    </div>
  )
}

export default FadeInOnIntersect