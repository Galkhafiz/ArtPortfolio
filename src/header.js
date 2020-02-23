// Links to explore the site
const about = () => {
    document.querySelector('.about').addEventListener('click', (e) => {
    location.assign(`/about.html`)
})
}

about()

const art = () => {
document.querySelector('.art').addEventListener('click', (e) => {
    location.assign(`/art.html`)
})
}

art()

const contact = () => {
document.querySelector('.contact').addEventListener('click', (e) => {
    location.assign(`/contact.html`)
})
}

contact()

// To explore Social Links 
const faceBook = () => {
    document.querySelector('.facebook').addEventListener('click', (e) => {
    location.assign('https://www.facebook.com/galina.khafizova')
})
}

faceBook()

const insTagram = () => {
document.querySelector('.instagram').addEventListener('click', (e) => {
    location.assign('https://www.instagram.com/galkhafiz/')
})
}

insTagram()

export { about, art, contact, faceBook, insTagram }; 