export function dateToString(date: Date){
    const day = date.getDate().toString().padStart(2,"0")
    const month = (date.getMonth()+1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
}

export function dataToStringFullMonth(date: Date){
    const day = date.getDate().toString().padStart(2,"0")
    const month = date.getMonth()
    const year = date.getFullYear()
    return `${day} ${months[month]} ${year}`
}

enum months{
    styczeń,
    luty,
    marzec,
    kwiecień,
    maj,
    czerwiec,
    lipiec,
    sierpień,
    wrzesień,
    paździrnik,
    listopad,
    grudzień
}