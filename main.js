//! ---------------------------------------------------
// ? diffing the id
let name = document.getElementById('name');
let p_name = document.getElementById('p_name');
let phone = document.getElementById('phone');
let age = document.getElementById('age');
let l_e = document.getElementById('l_e');
let btn_c = document.getElementById('btn_c');
let btn_s = document.getElementById('btn_s');
//! -----------------------------------------
//? create mood
let mood = 'create';
let tmp;
// ! -----------------------------------------------
// ? create a new object
//*  the loop below
let student_data;
if(localStorage.main != null) {
    student_data = JSON.parse(localStorage.main)
}else{
    student_data = [];
}
// *when you are clicked on the button
btn_c.onclick = function() {
    let new_student = {
            // * the now object 
            name:name.value,
            p_name:p_name.value,
            phone:phone.value,
            age:age.value,
            l_e:l_e.value,
        }

        if(mood === 'create'){
            student_data.push(new_student)
        }else{
            student_data[   tmp  ] = new_student;
            mood ='create';
            btn_c.innerHTML = 'create';
        }

        // *save local storage
        localStorage.setItem('main', JSON.stringify(student_data))

        // *calling function
        clear_data()
        show_data()
}
// ! ----------------------------------------------------------------
// ? clear 
function clear_data(){
    name.value = '';
    p_name.value = '';
    phone.value = '';
    age.value = '';
    l_e.value = '';
}
// ! ----------------------------------------------------------------
// ? RED
function show_data()
{
    let table = '';
    for (let i = 0; i <student_data.length; i++) {
        table += `
            <tr>
                <td>${i}</td>
                <td>${student_data[i].name}</td>
                <td>${student_data[i].p_name}</td>
                <td>${student_data[i].phone}</td>
                <td>${student_data[i].age}</td>
                <td>${student_data[i].l_e}</td>
                <td><button id="update" onclick="update_data(${i})">UPDATE</button></td>   
                <td><button id="delete" onclick="delete_data(${i})">DELETE</button></td>   
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('delete_all');
    if(student_data.length > 0) {
        btnDelete.innerHTML = `
        <button onclick="delete_all()" >DELETE ALL</button>
        `
    }else{
        btnDelete.innerHTML = '';
    }
}
show_data()
// * delete 
function delete_data(i) {
    student_data.splice(i,1);
    localStorage.main =  JSON.stringify(student_data);
    show_data()
}
//* DELETE ALL
function delete_all(){
    localStorage.clear()
    student_data.splice(0)
    show_data()
}
//* UPDATE ALL
function update_data(i){
    name.value = student_data[i].name;
    p_name.value = student_data[i].p_name;
    phone.value = student_data[i].phone;
    age.value = student_data[i].age;
    l_e.value = student_data[i].l_e;

    btn_c.innerHTML = 'update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}
// //*search mood
// let search_mood = 'name';

// function getSearch_mood(id) {
//     let search = document.getElementById('search');
//     if(id ==  'btn_s_n'){
//         search_mood = 'name';
//         search.Placeholder = 'search by name';
//     }else{
//         search_mood = 'phone';
//         search.Placeholder = 'search by phone';
//     }
// search.focus()


// }

// //* search data
// function search_data(value){
    
// }