function formatToList() {

}

async function arrayToList(arr : any) {
    var resultarr = await arr;
    // shouldnt be named li-
    return resultarr.map((item : any) => "<tr><td class='li-category'>" + item.category + "</td>" +
    "<td class='li-title'>" + item.title + "</td>" +
    "<td class='li-description'>" + item.description + "</td>" +
    "<td class='li-price'>" + item.price + "Dk</td></tr>"
    );
}

export default async function renderlist(list: any) {

    var top = `
    <table class='table'>
    <thead>
        <tr>
            <th scope="col">Kategori</th>
            <th scope="col">Titel</th>
            <th scope="col">Indhold</th>
            <th scope="col">Pris</th>
        </tr>
    </thead>
    <tbody>`;

    const bottom = "</tbody></table>";
    const  middle = (await arrayToList(list)).join("");

    document.querySelector("#listUl").innerHTML = top + middle + bottom;
}