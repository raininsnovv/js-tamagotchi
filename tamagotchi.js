const tamogotchi = {
  name: "Mich",
  meal: 1,
  energy: 2,
  mood: 4,
  hasFriend: false,
  howMuchMoney: 1000,
  married: "женат",
  nameWife: "Sara",
  getStatus() {
    let meal = "Меца вац со";
    let mood = "Я счастлив";
    let energy = "Энергии полно";
    if (this.meal < 3) {
      meal = `Я голоден(${meal})`;
    }
    if (this.mood < 3) {
      mood = `Мне скучно(${mood})`;
    }
    if (this.energy < 3) {
      energy = `Я хочу спать(${energy})`;
    }
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(
        `${this.name} не заслуживал такого конца, но ты довёл его...`
      );
    } else {
      console.log(
        `Имя: ${this.name}, Еда: ${this.meal}, Энергия:${this.energy}, Настроение: ${this.mood}, Есть друг: ${this.hasFriend}, Сколько денег?: ${this.howMuchMoney}, Женат?: ${this.married}, Имя жены: ${this.nameWife}.`
      );
    }
  },
  setName(newName) {
    this.name = newName;
    console.log(`Теперь у питомца новое имя: ${newName}`);
  },
  eat() {
    if (this.meal < 5) this.meal++;
    this.mood--;
    console.log(`${this.name} вкусно покушал.`);
  },
  sleep() {
    if (this.energy < 5) this.energy++;
    this.meal--;
    console.log(`${this.name} хорошенько поспал.`);
  },
  play() {
    if (this.mood < 5) this.mood++;
    this.energy--;
    console.log(`${this.name} поиграл с женой.`);
  },
  divorcedHisWife() {
    this.married = "не женат";
    console.log("Жена была непослушной!");
  },
};
tamogotchi.setName("Jose");
tamogotchi.getStatus();
tamogotchi.eat();
tamogotchi.getStatus();
tamogotchi.sleep();
tamogotchi.getStatus();
tamogotchi.play();
tamogotchi.getStatus();
tamogotchi.divorcedHisWife();
tamogotchi.getStatus();
