// MAIN PAGE //
import { about, art, contact, faceBook, insTagram } from './header.js';

const gallery = (function() {

    const pics = [
        'images/babushka.jpg','images/maniak.jpg','images/chegevara.jpg', 
        'images/pastel.jpg', 'images/bonjovimain.jpg', 'images/girlchegevara.jpg',
        'images/rafael.jpg', 'images/georgia.jpg'
    ];

    const price = [
        200, 200, 100, 
        'sold', 400, 300,
        400, 400
    ];

    let currentIndex;
    let currentName;
    let currentPrice;
    let currentSize;

    const loadImage = (img) => {
        currentIndex = img.dataset.index;
        currentName = img.dataset.name;
        currentPrice = img.dataset.price;
        currentSize = img.alt;
        document.querySelector('.modal img').src = img.src;
        document.querySelector('.modal').style.display = "block";
    }

    // const modal = document.getElementById('myModal'); 
    const captionText = document.getElementById('caption');
    const sizeText = document.getElementById('size');
    const priceText = document.getElementById('price');

    function loadImages() {
        document.querySelectorAll('.mini-gallery img').forEach(
            function (item, i) {
                item.addEventListener('click', function () {
                    loadImage(this);
                    captionText.textContent = currentName.charAt(0).toUpperCase() + currentName.slice(1);
                    (currentPrice === "sold") ? priceText.textContent = `sold` : priceText.textContent = `$${currentPrice}`;
                    sizeText.textContent = `${currentSize} sm`;
                });
            });


            const zoomin = (img) => {
                let modalImg = document.getElementById('img01');
                let currWidth = modalImg.clientWidth;
                if (currWidth === 500) {
                    currWidth;
                } else {
                    modalImg.style.width = (currWidth + 70) + "px";
                }
            }

            const zoomout = (img) => {
                let modalImg = document.getElementById('img01');
                let currWidth = modalImg.clientWidth;
                if (currWidth === 50) {
                    currWidth;
                } else {
                    modalImg.style.width = (currWidth - 70) + "px";
                }
            }


            document.querySelector('.modal').addEventListener('click', function () {
                this.style.display = "none";
            });

            document.querySelector('.right').addEventListener('click', function (e) {
                e.stopPropagation();
                loadImage(document.querySelector('img[data-index="' + ((++currentIndex + pics.length) % pics.length) + '"]'));
                captionText.textContent = currentName.charAt(0).toUpperCase() + currentName.slice(1);;
                (currentPrice === "sold") ? priceText.textContent = `sold` : priceText.textContent = `$${currentPrice}`;
                sizeText.textContent = `${currentSize} sm`;
            });

            document.querySelector('.left').addEventListener('click', function (e) {
                e.stopPropagation();
                loadImage(document.querySelector('img[data-index="' + ((--currentIndex + pics.length) % pics.length) + '"]'));
                captionText.textContent = currentName.charAt(0).toUpperCase() + currentName.slice(1);;
                priceText.textContent = currentPrice;
                (currentPrice === "sold") ? priceText.textContent = `sold` : priceText.textContent = `$${currentPrice}`;
                sizeText.textContent = `${currentSize} sm`;
            });

            document.querySelector('.zoomin').addEventListener('click', (e) => {
                e.stopPropagation();
                let modalImg = document.getElementById('img01');
                zoomin(modalImg);    
            });

            document.querySelector('.zoomout').addEventListener('click', (e) => {
                e.stopPropagation();
                let modalImg = document.getElementById('img01');
                zoomout(modalImg);    
            });
    }

    loadImages();
    
    return {
        pics: pics
    };
})(); 














