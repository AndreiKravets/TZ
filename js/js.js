"use strict";

(function start() {
    var n = prompt("введите количество игроков", "от 2 до 5");
        
        if (n < 6 && n > 0 ) {                                        //проверяем допустимое значение игроков  
    
    var newCardsArray =[[6, 'spades',1],[7 ,'spades',2],[8 , 'spades',3],[9 , 'spades',4],[10 , 'spades',5],['J','spades',6], ['D','spades',7], ['K','spades',8], ['T','spades',9],
                       [6, 'clubs',1],[7 ,'clubs',2],[8 , 'clubs',3],[9 , 'clubs',4],[10 , 'clubs',5],['J','clubs',6], ['D','clubs',7], ['K','clubs',8], ['T','clubs',9],
                       [6, 'hearts',1],[7 ,'hearts',2],[8 , 'hearts',3],[9 , 'hearts',4],[10 , 'hearts',5],['J','hearts',6], ['D','hearts',7], ['K','hearts',8], ['T','hearts',9],
                       [6, 'diamonds',1],[7 ,'diamonds',2],[8 , 'diamonds',3],[9 , 'diamonds',4],[10 , 'diamonds',5],['J','diamonds',6], ['D','diamonds',7], ['K','diamonds',8], ['T','diamonds',9]]; 
    
    var  realCardsArray = [];

        function get_random_card(cardArray){                         //функция удаления из массива случайного элемента
                 return cardArray.splice(Math.ceil(Math.random()*cardArray.length-1),1);
                }
 
   
    for(i=0; i<=35; i++){
         realCardsArray.push(get_random_card(newCardsArray));       //создаем новый перемешанный массив
         };
  
   
    var trump = get_random_card(realCardsArray);                    //выбираем козырную масть
    console.log('козырь ' + trump [0] [0] [1]);

   

    for(var j=1; j<=n; j++) {                                        
                
              var player=[],                                        //создаем массив для раздачи карт n-ое количество раз
                  kpd = 0;                                          //и переменную для подсчёта силы руки

        for(i=0;i<6;i++){
    
            player.push(realCardsArray.shift());                    // добавляем первые 6 карт с колоды в руки n игроку
   
            kpd += (player[player.length - 1] [0] [1] == trump[0] [0] [1]) ? (player[player.length - 1] [0] [2] + 9) : player[player.length - 1] [0] [2];
                                                                   // суммируем силу карт, проверяя на совпадение с козырем
            window['kpd'+j] = kpd;                                 //для каждого игрока создаем итоговую сумму силы карт
              };
          console.log('игрок '+j+' :'
              +'   ' +player[0] [0] [0] +'-'+ player[0] [0] [1] +'   ' + player[1] [0] [0] +'-'+ player[1] [0] [1] 
	            +'   ' +player[2] [0] [0] +'-'+ player[2] [0] [1] +'   ' + player[3] [0] [0] +'-'+ player[3] [0] [1]       // выводим в консоль карты игрока
	            +'   ' +player[4] [0] [0] +'-'+ player[4] [0] [1] +'   ' + player[5] [0] [0] +'-'+ player[5] [0] [1] +';'); 
    // console.log(kpd);
      };

 var tmp_kpd = 0;
 var index_max_kpd;                                                  //создаем переменные для сравнения силы рук
 var index_2max_kpd;
     
 for (var i = 1 ; i <= n; i++) {                                    //находим самую сильную руку
      if (window['kpd'+i] > tmp_kpd) {
          tmp_kpd = window['kpd'+i]
          index_max_kpd = i;
          }  
      else if (window['kpd'+i] == tmp_kpd) {                         //проверяем нет ли двух фаворитов
		      index_2max_kpd = i;
          }};

  
  if (window['kpd'+index_max_kpd] == window['kpd'+index_2max_kpd]) {
      console.log('у игрока №' + index_max_kpd + ' и №' + index_2max_kpd + ' самые сильные руки');
		  }
                                                                    //выводим итог в консоль
  else {
      console.log('у игрока №' + index_max_kpd + ' самая сильная рука');
      };





 }                                                                       

  else {
  	alert('будьте благоразумны, введите подходящее число игроков');   //если пользователь ввел неподходящее значение,
  start();                                                            //после уточняющего сообщения вызывает функцию заново.
};
   
  })();                                                         
