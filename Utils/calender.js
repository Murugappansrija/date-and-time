function getFilename(date = new Date()){
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`
}

module.exports = {
    getFilename
}