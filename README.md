Cinemact - сервис по подбору фильмов

В нем вы можете отфильтровать фильмы по жанрам, отсортировать по году, алфавиту и рейтингу, добавлять фильмы в избранное. 

Также есть страница избранных фильмов, в котором они отображаются списком, а также общее их количество и общая продолжительность фильмов.

Фильмы хранятся на сервере (пока что просто в mock.ts файле) и оттуда отправляются клиенту при загрузке страницы (сервер сделан на express).

Чтобы при перезагрузке страницы список избранных фильмов сохранялся, использую localstorage для хранения
