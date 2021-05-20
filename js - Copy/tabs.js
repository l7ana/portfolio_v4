const tabs = document.querySelectorAll(".tab-buttons button");
const contents = document.querySelectorAll(".content");

tabs.forEach(el => {
    el.addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        console.log(id);
        // Loop through all tabs
        tabs.forEach(btn => {
            btn.setAttribute('data-tabstate', 'inactive');
        });
        e.target.setAttribute('data-tabstate', 'active');

        // Loop through all contents
        contents.forEach(cnts => {
            cnts.setAttribute('data-contentstate', 'inactive');
        });
        const contentblock = document.getElementById(id);
        contentblock.setAttribute('data-contentstate', 'active');
    });
});

// for (let i = 0, len = tabs.length; i < len; i++) {

// tabs.onclick = e => {
//     const id = e.target.dataset.id;
//     console.log(id);
//     if (id) {
//         tabs.forEach(btn => {
//             btn.setAttribute('data-tabstate', 'inactive');
//         });
//         e.target.setAttribute('data-tabstate', 'active');
//     }
// }