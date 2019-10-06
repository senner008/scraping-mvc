function extractnumber(val : string) {
    if (!val) return Number.MAX_VALUE
    var match = val.toString().match(/\d+/);
    if (match) return Number(match[0]);
    return null;

}

export default function titleComparer(a,b) {
    const aNumber = extractnumber(a.title);
    const bNumber = extractnumber(b.title);
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    return aNumber > bNumber ? 1 : aNumber === bNumber ? ((aTitle > bTitle) ? 1 : -1) : -1;
}