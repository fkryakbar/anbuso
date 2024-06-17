export const timeFormat = function (timeString: string) {
    var d = new Date(timeString);
    return `${d.toLocaleTimeString('id-ID', {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    })}`
}
