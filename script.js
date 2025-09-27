
// Created the array set for the dynamic paragraphs
let timer=null;
let lock_index = 0; 
let lock_value= "";




start();// this function runs loads the new para, resets timer, start timer, empties the text field, sets accuracy and wpm field with default value.


function start(){
let index = 0;
// getting the random index
let ref_para = document.getElementById("ref_para");

let content = ref_para.textContent;
let ref_array = content.split("");
console.log(ref_array);
// getting the para element setting the para into the 



ref_para.textContent = ""; 
// clearing the para field such that when we restart it clears the para


ref_array.forEach((item, index)=>{
    let span_ele = document.createElement("span");
    span_ele.textContent=item;
    span_ele.classList.add(index);
    ref_para.appendChild(span_ele);
})
// this adds the letters of para(which are already stored in the array) in to the para field as the spans such that we can style or retrieve it seperately, we also provide classes for spans with the index of array

lock_index = 0; 
lock_value= "";

let test_start = false; // test_start false, such that we can restart timer 

let seconds= 0;
let minutes = 0;
let wrong_counter = 0; //counting starts from beginning

if(timer){
    clearInterval(timer)
}
//this block is for stoping the previous timer.


let typing_para = document.getElementById("text_area");
typing_para.value = "";
let acc = document.getElementById("accuracy");
acc.textContent="Accuracy: ...";
let wpm = document.getElementById("wpm");
wpm.textContent="WPM: ...";
let clock = document.getElementById("timer");
clock.textContent= "00:00"
//This block of above code sets the values to default value to as the typing starts again



typing_para.disabled=false;
// this enables typing field because we disabled the typing field(if it is not the first typing test) 


ref_array.forEach((item, ind)=>{
            let ele = document.getElementsByClassName(ind)[0];
            ele.classList.remove("correct_ele", 'wrong_ele');      
    })
// this clears all the para highlights(since after highlights remain after first typing test)


// this event executes when an input is given to test field
typing_para.addEventListener("input",()=>{

    if(lock_index+1> typing_para.value.length){
        typing_para.value = lock_value;
        }// this if block executes when we the length of typing gets decreased than lock index(that is previous backspace)


    let text_value = typing_para.value;
    let text_array = text_value.split("");
    index = text_array.length-1 
    // this block code to get the present index of typing text
    


    // the below code block checks whether the timer started if not started it starts and stores the memory that timer started and timer goes on till the restart button clicks
    if(!test_start){
        clearInterval(timer);
        test_start = true;
        timer = setInterval(()=>
        {
            let clock = document.getElementById('timer');
            clock.textContent = "";
            if(seconds<59)
                {
                    clock.textContent = `${String(minutes).padStart(2,"0")}:${String(++seconds).padStart(2,"0")}`; 
                }    
            else
                {
                    seconds = 0;
                    minutes++;
                    if(minutes === 10)// this checks minutes and stops the timer and disables the text field 
                    {
                        clearInterval(timer);
                        typing_para.disabled =true;
                    }
                    clock.textContent = `${String(++minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;   
                }
            
        },1000)
    }

  


    

    ref_array.forEach((item, ind)=>{
        if(ind>index){// to clear the color when back spaces
            let ele = document.getElementsByClassName(ind)[0];
            ele.classList.remove("correct_ele", 'wrong_ele');      

        }
    })
    let text_last_ele = text_array[index]; //getting the last element and the reference element
    let ref_ele = ref_array[index];

    if(text_last_ele===ref_ele){// this if block executes if the element matches


        if(text_last_ele === " ")// if the space is clicked and matched it locks value and index 
        {
            console.log(lock_index, index);
            lock_index = index;
            lock_value = typing_para.value;
        }


        let child = document.getElementsByClassName(index)[0];
        //getting the reference element to highlight

        if(child.classList.contains("wrong_ele")){
            child.classList.remove("wrong_ele");
        }// to remove red highlight if it is a wrong element in previous type

        child.classList.add("correct_ele");// now adds green


    }
    else{
        let child = document.getElementsByClassName(index)[0];

        wrong_counter++;
        child.classList.add("wrong_ele");
    }// highlights wrong when the element is wrong
    


    //this if block executes the user types complete test
    if(test_start && index>=content.length-1){
        clearInterval(timer);
        typing_para.disabled =true; 
        //disabling the input field

        let acc = document.getElementById("accuracy");
        acc.textContent=`Accuracy: ${(((ref_array.length-wrong_counter)/ref_array.length)*100).toFixed(2)}%`;
        //printing accuracy value


        let wpm = document.getElementById("wpm");
        let time = minutes + (seconds/60);
        let no_of_words = ref_array.length/5;
        wpm.textContent = `WPM: ${(no_of_words/time).toFixed(2)}`;
        //printing wpm value

    }

})

}

