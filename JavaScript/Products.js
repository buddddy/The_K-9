function clickLike(event) {
    let target = event.target;

    // If they clicked in the heart icon instead of the "li" tag,
    // then we need to find the "li" tag, which is the parent of the heart icon
    if (target !== this) {
        target = target.parentNode;
    };

    let added = target.classList.toggle("red-heart");
    let span = target.querySelector("span");
    if (added) {
        span.textContent = "Remove from Wishlist";
    } else {
        span.textContent = "Add to Wishlist";
    }
}

let lis = document.querySelectorAll(".action li:first-child");
for (let li_like of lis) {
    li_like.addEventListener("click", clickLike, true);
}