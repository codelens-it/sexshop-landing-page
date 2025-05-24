  import { useCallback, useEffect, useState } from "react"

export const useWindowSize = () => {

  const tabletMedia = 768
  const desktopMedia = 1440

  const getDeviceSizes = (width) => {
    return { 
      width: width,
      isMobile: width < tabletMedia,
      isTablet: width >= tabletMedia && width < desktopMedia ,
      isDesktop: width >= desktopMedia
      }
  }

  const [sizes, setSizes] = useState(getDeviceSizes(window.innerWidth))

  const handleResize = useCallback(() => {
    setSizes(getDeviceSizes(window.innerWidth))
    return 
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

    return sizes
}