export const validateUrlProtocol = (url) => {
    if (url.length <= 0 || typeof url != "string")
        return false

    return url.startsWith("http://") || url.startsWith("https://")
}