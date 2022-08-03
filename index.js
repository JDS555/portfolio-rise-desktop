"use strict";

// The script is executed in the console and shows the number of points for the requirement item

// const elemsCount = (selector) => document.querySelectorAll(selector).length;
// const predicate = (configItem) => {
//     const count = elemsCount(configItem[0]);
//     return count >= configItem[1] && count <= configItem[2];
// };
// const evaluate = (isFullfilled) => (isFullfilled ? 2 : 0);
// const isArray = (item) => Array.isArray(item[0]);
// const config = [
//     [
//         ['header', 1, 1],
//         ['main', 1, 1],
//         ['footer', 1, 1],
//     ],
//     ['section', 6, Infinity],
//     ['h1', 1, 1],
//     ['h2', 5, Infinity],
//     ['nav', 1, 1],
//     ['ul', 2, Infinity],
//     ['button', 10, Infinity],
//     [
//         ['input[type="email"]', 1, Infinity],
//         ['input[type="tel"]', 1, Infinity],
//     ],
//     ['textarea', 1, Infinity],
//     ['input, textarea[placeholder]', 3, Infinity],
// ];
// config.reduce((sum, configItem) => sum + (isArray(configItem)
//     ? evaluate(configItem.every(predicate))
//     : evaluate(predicate(configItem))), 0);

// Output to the console the result of self-test:

let scoreOfTaskPoints;

scoreOfTaskPoints = `Здравствуйте!
Итоговый результат самопроверки:
100 баллов \(110 в сумме но максимум же 100\)

	Вёрстка валидная без ошибок и предупреждений + 20
	
	Вёрстка семантическая + 20 
	
	Вёрстка соответствует макету + 48 \(в сумме\):
	
		блок header + 6
		секция hero + 6 
		секция skills + 6
		секция portfolio + 6
		секция video + 6
		секция price + 6
		секция contacts + 6
		блок footer + 6
		
	Требования к css + 12 \( в сумме \):
	
		для построения сетки используются флексы или гриды + 2
		при уменьшении масштаба страницы браузера вёрстка размещается
		по центру,а не сдвигается в сторону + 2
		фоновый цвет тянется на всю ширину страницы + 2
		иконки добавлены в формате .svg + 2
		изображения добавлены в формате .jpg + 2
		есть favicon + 2
		
	Интерактивность, реализуемая через css + 20 \( в сумме \):
	
		плавная прокрутка по якорям +5
		ссылки в футере ведут на гитхаб автора проекта и на страницу курса + 5
		интерактивность включает в себя не только изменение внешнего вида курсора,
		например, при помощи свойства cursor: pointer, но и другие визуальные эффекты + 5
		обязательное требование к интерактивности: плавное изменение внешнего вида элемента
		при наведении и клике не влияющее на соседние элементы + 5
		
	Все пункты выполнены полностью :\)
Благодарю вас за оценку! Успехов вам :\)!
`;

console.log ( scoreOfTaskPoints );
