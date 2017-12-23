document.getElementsByTagName("button")[0].addEventListener("click",
  function () {
    var input_num = document.getElementById("value_num");
    var h1 = document.getElementById("text_for_user");

    var phrases = {
      not_right_input: "вы должны ввести одно число",
      say_avarage_num: "Среднее число "
    }

    allResult = function() {
      if (IsInputNum()) {
        addAvarageNumAndCreateBase();
        input_num.value = "";
      }
    }

    IsInputNum = function() {
      if (input_num.value != "" && !isNaN(input_num.value)) {
        return true;
      }else {
        h1.innerText = phrases.not_right_input;
      }
    }

    addAvarageNumAndCreateBase = function(){
      if (!localStorage.numbers) {
        localStorage.numbers = toJSON([input_num.value]);
        h1.innerText = phrases.say_avarage_num + input_num.value;
      }else {
        var elem = parseJSON(localStorage.numbers);
        elem.push(input_num.value);
        console.log(elem);
        localStorage.numbers = toJSON(elem);
        computationAvarageNum(elem);
      }
    }

    computationAvarageNum = function(arr_nums){
      var sum = 0;
      for (var i = 0; i < arr_nums.length; i++) {
        sum += +arr_nums[i];
      }
      var result_avarage = sum / arr_nums.length;
      h1.innerText = phrases.say_avarage_num +  Math.round(result_avarage);
    }

    toJSON = function(obj){
      return JSON.stringify(obj);
    }

    parseJSON = function(obj){
      return JSON.parse(obj);
    }

    allResult();
  }
);
