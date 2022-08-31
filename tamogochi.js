const tamogotchi = {
    name: 'Алмасхан',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function() {
        const mealStatus = this.meal < 3 ? 'Я голоден' : 'Я сыт';
        const energyStatus = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
        const moodStatus = this.mood < 3 ? 'Мне скучно' : 'Мне весело';
        if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log('Я умер')
        }
        else {
            console.log(`Имя: ${this.name}, Еда: ${mealStatus}(${this.meal}), Энергия: ${energyStatus}(${this.energy}), Настроение: ${moodStatus}(${this.mood}).`)
        }
        if (this.meal < 2 && this.meal > 0) {
            console.log(this.aggression());
        }
        
    },
    setName: function(name) {
        console.log(this.name = name);
    },
    eat: function () {
        if (this.meal < 5) {
          this.meal++;
          this.mood--;
        }
          
    },
    
      sleep: function () {
        if (this.energy < 5) {
          this.energy++;
          this.meal--;
        }
          
    },
    
      play: function () {
        if (this.mood < 5) {
          this.mood++;
          this.energy--;
        }
    },
      aggression: function() {
        if (this.meal < 2 && this.meal > 0) {
            console.log('Хьая яам, Чорт!!!');
        }
    },

} 


    
