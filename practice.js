// cs.innerHTML = "Changed";

// cs.innerHTML = "<p>Now a Paragraph</p>";

// cs.append("New");

// // setTimeout(() => {
// //     cs.append("Later")
// // }, 2000);

// // let x = 0;


// // setInterval(() => {
// //     empty.innerHTML = x + " seconds";
// //     x++;
// //     if (x > 5) {
// //         cs.innerHTML = "Done Counting";
// //     } else {
// //         cs.innerHTML = "Not Done Counting";
// //     }
// // }, 1000);

// let say = function(word) {
//     cs.append("Saying " + word)
// };

// say("hi");
// say("sup");
// say("yo");
// say("hello");

// let list = [1, 2, 3];

// let i = 0
// while(i < list.length); {
//     console.log("Logging" + list[i])
//     i++;
// }

function ready() {
    console.log("page ready");

    let favs = document.forms.favs;

    let colorEl = favs.elements.color;

    console.log(colorEl.value)

    colorEl.onchange = function() {
        console.log(colorEl.value);
        let el = document.createelement("p")
        el.innerHTML = "You typed " + colorEl.value;

        today.append(el);
    };

    go.onclick = function() {
        alert("Please don't go!");
    }

    weekend.onclick = function() {
        alert("It's the Weekend!")
    }
}

document.addEventListener("DOMContentLoaded", ready);

// console.log("page ready");

//     today.innerHTML = "Tomorrow";

//     let elem = document.createElement('div');
//     elem.innerHTML = "<p>Hi <strong>There</strong><p>";
//     elem.className = "special important";
    
//     today.prepend(elem);

//     today.classList.add("highlighted");
//     today.classList.remove("normal");