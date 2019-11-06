cs.innerHTML = "Changed";

cs.innerHTML = "<p>Now a Paragraph</p>";

cs.append("New");

// setTimeout(() => {
//     cs.append("Later")
// }, 2000);

// let x = 0;


// setInterval(() => {
//     empty.innerHTML = x + " seconds";
//     x++;
//     if (x > 5) {
//         cs.innerHTML = "Done Counting";
//     } else {
//         cs.innerHTML = "Not Done Counting";
//     }
// }, 1000);

let say = function(word) {
    cs.append("Saying " + word)
};

say("hi");
say("sup");
say("yo");
say("hello");

let list = [1, 2, 3];

let i = 0
while(i < list.length); {
    console.log("Logging" + list[i])
    i++;
}