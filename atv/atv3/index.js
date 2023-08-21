function createCard(img_path, title_text, link, row_id) {
    // Row
    const row = document.getElementById(row_id);
    // Col
    const col = document.createElement("div");
    col.classList.add("col-lg-3");
    col.classList.add("col-md-6");
    // Div
    const card = document.createElement("div");
    card.classList.add("card");
    // Img link
    const imgLink = document.createElement("a");
    imgLink.href = "view/index.html?page=" + link;
    imgLink.target = "_blank";
    // Img
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("grid-img");
    img.src = img_path;
    img.alt = title_text;
    // Body
    const body = document.createElement("div");
    body.classList.add("card-body");
    // Title
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = title_text;
    // Links
    const links = document.createElement("div");
    links.classList.add("row", "text-center");
    // Details container
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("col");
    // Details
    const details = document.createElement("a");
    details.href = link;
    details.classList.add("btn", "btn-danger");
    details.textContent = "Detalhes";
    details.target = "_blank";
    // Trailer container
    const trailerContainer = document.createElement("div");
    trailerContainer.classList.add("col");
    // Trailer
    const trailer = document.createElement("a");
    trailer.href = link;
    trailer.classList.add("btn", "btn-danger");
    trailer.textContent = "Trailer";
    trailer.target = "_blank";
    // Putting it all together
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(imgLink);
    imgLink.appendChild(img);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(links);
    links.appendChild(detailsContainer);
    links.appendChild(trailerContainer);
    detailsContainer.appendChild(details);
    trailerContainer.appendChild(trailer);
}