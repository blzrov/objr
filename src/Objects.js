/*
В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
необходимо удалить свойство age, если оно есть.
Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
что в этом объекте есть свойство income. Если его нет, необходимо его добавить
и присвоить начальное значение 100000.
Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
    }
    if (data.gender == 'male') {
        if (!data.hasOwnProperty('income')) {
            data.income = 100000;
        }
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
  */
export function objectFieldsList(obj1, obj2, obj3) {
    let res = [];
    for (let key in obj1) {
        res.push(key);
    }
    for (let key in obj2) {
        res.push(key);
    }
    for (let key in obj3) {
        res.push(key);
    }
    return res.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
  */
export function objectClone(obj, count) {
    let res = [];
    for (let i = 0; i < count; i++) {
        let dest = JSON.parse(JSON.stringify(obj));
        dest.id = i;
        res.push(dest);
    }
    return res;
}
