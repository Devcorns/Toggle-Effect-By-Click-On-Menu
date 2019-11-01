function aside(event) {
    if(event.target.tagName=='A') {
        console.log(event.target.getAttribute("data-parent"), event.target.hash);
        let dataParent = event.target.getAttribute("data-parent");
        let getDp = document.querySelectorAll(dataParent);
        let getCurrentAnchor = getDp[0].querySelectorAll("[href='"+event.target.hash+"']");
        console.log(getCurrentAnchor[0].click());
    }
}