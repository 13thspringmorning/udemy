/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    // Vars
    const promoImg = document.querySelectorAll('.promo__adv img'), 
                promo = document.querySelector('.promo__adv-title'),
                bg = document.querySelector('.promo__bg'),
                genre = bg.querySelector('.promo__genre'), 
                movieList = document.querySelector('.promo__interactive-list'), 
                addForm = document.querySelector('form.add'), 
                addInput = addForm.querySelector('.adding__input'),
                checkbox = addForm.querySelector('[type="checkbox"]');


  // Add new movie

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newMovie = addInput.value;
        const fav = checkbox.checked;

        if(newMovie) {

            if(newMovie.length > 21) {
                newMovie = `${newMovie.slice(0,21)}...`;
            }

            if(fav) {
                console.log('Fav movie has been added');
            }

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);
                
            addMovie(movieDB.movies, movieList);
        }

        e.target.reset();
    });
    

// Delete adds 
    const deleteAdv = (arr, title) => {
        arr.forEach(item => item.remove());
        title.remove();
    };


    // Make changes 
    const makeChanges = (genre, bg) => {
        genre.textContent = 'Drama';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    
    // Sort and print
    const sortArr = (arr) => arr.sort();


    // Add a novie to the DB and the list
    function addMovie(movies, parent) {
        parent.innerHTML = "";
        sortArr(movies);

        movies.forEach((movie, i) => {
            parent.innerHTML +=  `
                <li class="promo__interactive-item">${i+1}.  ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addMovie(movies, parent);
            });
        });
        
    }
    
    addMovie(movieDB.movies, movieList);
    makeChanges(genre, bg);
    deleteAdv(promoImg, promo);
});

