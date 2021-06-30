// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const prom = new Promise((resolve, reject) => {
setTimeout(() => {
     resolve("Success")
}, 6000)
});

prom.then((showModal) => {
    const modalElement = document.querySelector(".modal");
    modalElement.style.display = "initial";

    const close = document.querySelector(".close");
    close.addEventListener("click", (e) => {
        const closeBtn = e.target;
        closeBtn.parentElement.style.display = "none";
        modalElement.style.backgroundColor ="initial";
    })
})