document.getElementsByTagName("button")[0].addEventListener("click",
  function () {
    var input_num = document.getElementById("value_num");
    var h1 = document.getElementById("text_for_user");

    var PHRASES = {
      not_right_input: "вы должны ввести одно число",
      say_avarage_num: "Среднее число "
    }

    allResult = function() {
      if (isInputNum()) {
        addAvarageNumAndCreateBase();
        input_num.value = "";
      }else{
        h1.innerText = PHRASES.not_right_input;
      }
    }

    isInputNum = function() {
      if (input_num.value != "" && !isNaN(input_num.value)) {
        return true;
      }else {
        return false;
      }
    }

    addAvarageNumAndCreateBase = function(){
      if (!localStorage.numbers) {
        localStorage.numbers = toJSON([input_num.value]);
        h1.innerText = PHRASES.say_avarage_num + input_num.value;
      }else {
        var elem = parseJSON(localStorage.numbers);
        elem.push(input_num.value);
        localStorage.numbers = toJSON(elem);
        computationAvarageNum(elem);
      }
    }

    computationAvarageNum = function(arr_nums){
      var all_sum = arr_nums.reduce(function(sum, item) {
        return sum + (+item);
      }, 0);
      var result_avarage = Math.round(all_sum / arr_nums.length);
      h1.innerText = PHRASES.say_avarage_num + result_avarage;
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
