export const getShortCodeFromPath = () => {
    const path = window.location.pathname
    return path && path.length > 1 ? path.substring(1) : null
} 