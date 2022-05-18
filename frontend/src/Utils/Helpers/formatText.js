export const formatUpperCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const formatLowerCase = (text) => {
    return text.charAt(0).toLowerCase() + text.slice(1)
}

export const formatTrim = (text) => {
    return text.toLowerCase().replace(/\s+/g, "");
}