const bracketsConfig = [['(', ')']];
function expressionCalculator(expr) {
    // write your solution here
    if (!expr.includes('/ 0')) {
        if (!check(expr, bracketsConfig)){
            throw("ExpressionError: Brackets must be paired")
        }
        return eval(expr);
    } else {
        throw ("TypeError: Division by zero.")
    }
    
}

module.exports = {
    expressionCalculator
}


function check(str, bracketsConfig) {

    // стек незакрытых скобок
    var st = [];
  
    // бежим по всей строке
    for (var i = 0; i < str.length; ++i) {
      // текущий символ
      var ch = str[i];
      // последний символ из стека 
      var last_br;
  
      var ind = -1;
      //индекс_пары из маски(bracketsConfig) для последнего элемента стека 
      var iLastBr = 0;
      //индекс_пары из маски(bracketsConfig) для текущего элемента
      var iCurrBr = 0;
  
  
      // ищем символ в маске и запоминаем индекс_пары для текущей скобки
      for (iCurrBr = 0; iCurrBr < bracketsConfig.length; ++iCurrBr) {
        ind = bracketsConfig[iCurrBr].indexOf(ch);
        if (ind >= 0) {
          break;
        }
      }
  
      // если скобка вообще найдена в маске
      if (ind >= 0) {
        // если стек не пуст
        if (st.length) {
          // находим индекс в маске для последнего элемента стека
          last_br = st[st.length - 1];
          for (iLastBr = 0; iLastBr < bracketsConfig.length; ++iLastBr) {
            ind = bracketsConfig[iLastBr].indexOf(last_br);
            if (ind >= 0) {
              break;
            }
          }
  
        }
        // удаляем из стека, если это закрывающая скобка и последний 
        // символ в стеке является парой к текущей скобке - 
        if (ch == bracketsConfig[iCurrBr][1] && iCurrBr == iLastBr && st.length) {
          st.pop(ch);
        } else { // иначе - добавляем скобку в стек
          st.push(ch);
        }
      }
    }
    // если после обхода всей строки стек пуст - всё ок
    return !st.length;
  
  }