


let timer=null;
let ref_para = null;
let content = null;
let ref_array = null;
let span_ele = null;

let lock_index = 0; 
let lock_value= "";
let index = 0;
let text_value = null;
let text_array = null;
let child = null;
let text_last_ele = null;
let ref_ele = null;
let time = null;
let no_of_words = null;
let test_start = null;

let seconds= null;
let minutes = null;
let wrong_counter = null;


let typing_para = null;
let acc = null;
let wpm = null;
let clock = null;

let ele = null;

let dynamic_array = ["Executives frequently emphasize maximizing efficiency across every department, yet only those who exhibit zeal, patience, and flexibility can truly navigate quirky challenges without jeopardizing team morale.", "The quick brown fox performed a surprisingly elegant leap over a famously lazy dog, drawing puzzled glances from experts who questioned how such agility emerged without rigorous training.","Every qualified analyst must promptly evaluate bizarre workflow puzzles with zero hesitation, for a single overlooked query may quietly escalate into a far more complex dilemma." , "While exploring quaint villages during her lengthy expedition, Zara found a unique box filled with vintage quartz jewelry and puzzling handwritten notes." , "Achieving exemplary results in any grand venture demands discipline, agility, and unwavering focus, for shortcuts and whimsical distractions rarely lead to long-term success."];

let para_ind = null;


typing_para = document.getElementById("text_area");
typing_para.addEventListener("input",()=>{

    if(lock_index+1> typing_para.value.length){
        typing_para.value = lock_value;
        }// this if block executes when we the length of typing gets decreased than lock index(that is previous backspace)


    text_value = typing_para.value;
    text_array = text_value.split("");
    index = text_array.length-1 
    // this block code to get the present index of typing text
    


    // the below code block checks whether the timer started if not started it starts and stores the memory that timer started and timer goes on till the restart button clicks
    if(!test_start){
        clearInterval(timer);
        test_start = true;
        timer = setInterval(()=>
        {
            clock = document.getElementById('timer');
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
            ele = document.getElementsByClassName(ind)[0];
            ele.classList.remove("correct_ele", 'wrong_ele');      

        }
    })
    text_last_ele = text_array[index]; //getting the last element and the reference element
    ref_ele = ref_array[index];

    if(text_last_ele===ref_ele){// this if block executes if the element matches


        if(text_last_ele === " ")// if the space is clicked and matched it locks value and index 
        {
            lock_index = index;
            lock_value = typing_para.value;
        }


        child = document.getElementsByClassName(index)[0];
        //getting the reference element to highlight

        if(child.classList.contains("wrong_ele")){
            child.classList.remove("wrong_ele");
        }// to remove red highlight if it is a wrong element in previous type

        child.classList.add("correct_ele");// now adds green


    }
    else{
        child = document.getElementsByClassName(index)[0];

        wrong_counter++;
        child.classList.add("wrong_ele");
    }// highlights wrong when the element is wrong
    


    //this if block executes the user types complete test
    if(test_start && index>=content.length-1){
        clearInterval(timer);
        typing_para.disabled =true; 
        //disabling the input field

        acc = document.getElementById("accuracy");
        acc.textContent=`Accuracy: ${(((ref_array.length-wrong_counter)/ref_array.length)*100).toFixed(2)}%`;
        //printing accuracy value


        wpm = document.getElementById("wpm");
        time = minutes + (seconds/60);
        no_of_words = ref_array.length/7;
        wpm.textContent = `WPM: ${(no_of_words/time).toFixed(2)}`;
        //printing wpm value

    }
})




start();// this function runs loads the new para, resets timer, start timer, empties the text field, sets accuracy and wpm field with default value.


function start(){
para_ind = Math.floor(Math.random()*dynamic_array.length);

ref_para = document.getElementById("ref_para");

content = dynamic_array[para_ind];
ref_array = content.split("");
// getting the para element setting the para into the 



ref_para.textContent = ""; 
// clearing the para field such that when we restart it clears the para


ref_array.forEach((item, index)=>{
    span_ele = document.createElement("span");
    span_ele.textContent=item;
    span_ele.classList.add(index);
    ref_para.appendChild(span_ele);
})
// this adds the letters of para(which are already stored in the array) in to the para field as the spans such that we can style or retrieve it seperately, we also provide classes for spans with the index of array

lock_index = 0; 
lock_value= "";

test_start = false; // test_start false, such that we can restart timer 

seconds= 0;
minutes = 0;
wrong_counter = 0; //counting starts from beginning

if(timer){
    clearInterval(timer)
}
//this block is for stoping the previous timer.


typing_para = document.getElementById("text_area");
typing_para.value = "";
acc = document.getElementById("accuracy");
acc.textContent="Accuracy: ...";
wpm = document.getElementById("wpm");
wpm.textContent="WPM: ...";
clock = document.getElementById("timer");
clock.textContent= "00:00"
//This block of above code sets the values to default value to as the typing starts again



typing_para.disabled=false;
// this enables typing field because we disabled the typing field(if it is not the first typing test) 


ref_array.forEach((item, ind)=>{
            ele = document.getElementsByClassName(ind)[0];
            ele.classList.remove("correct_ele", 'wrong_ele');      
    })
// this clears all the para highlights(since after highlights remain after first typing test)


// this event executes when an input is given to test field


}

