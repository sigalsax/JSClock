
      function setDate(){

            // find element with class that is 'second-hand'
            const secondHand=document.querySelector('.second-hand');
            const minsHand=document.querySelector('.min-hand');
            const hourHand=document.querySelector('.hour-hand');


              // grab date
              const now = new Date();
              const seconds= now.getSeconds();
              const secondsDegrees= ((seconds/60) * 360)+90;

              const minutes = now.getMinutes();
              const minutesDegrees= ((minutes/60)*360)+90;

              const hours = now.getHours();
              const hoursDegrees= ((minutes/12)*360)+90;
              // taking in parameter that is changing
              // ` allow you to have access to variables in strings
              // add style transform with whatever seconds it is, changing css every second 
              secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
              minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
              hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      }
      setInterval (setDate, 1000);
