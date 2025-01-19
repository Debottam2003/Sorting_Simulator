let arr = [];
            let root = document.querySelector(".root");
            let form = document.querySelector("form");
            let data_set = document.querySelector(".data_set");

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                console.log(event.target.elements);
                console.log(event.target.elements[0].value, event.type);
                let {name, value} = data_set;
                console.log(data_set, name, value);
                root.innerHTML = ""; // Clear previous results
                let data_string = data_set.value.trim();
                data_set.value = "";
                arr = data_string.split(" ").map(Number);
                render();
            });

            async function render() {
                let arr_string = arr.join(" ");
                let step = document.createElement("h2");
                step.innerHTML = arr_string;
                root.appendChild(step);

                for (let i = 0; i < arr.length - 1; i++) {
                    let temp = 0;
                    let iteration = document.createElement("h2");
                    iteration.innerHTML = "After " + (i + 1) + " iteration";
                    root.appendChild(iteration);
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                        let step = document.createElement("h2");
                        let str = "";
                        for(let i = 0; i < arr.length; i++){
                            str += `<span class="box">${arr[i]}</span>`
                        }
                        step.innerHTML = str;
                        root.appendChild(step);
                        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
                    }
                }
            }
        