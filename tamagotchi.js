const tamogotchi = {
    name: 'Mich',
    meal: 1,
    energy: 2,
    mood: 4,
    haveCar:false,
    modelCar:'none',
    money:0,
    health:'alive',
    cheating(){
        if(this.money=0){
            this.money += 1000000
            this.mood += 10
        }
        else {
            this.mood = 0
        }
    },
    giveCar(){
    if (this.energy=0){
        this.haveCar = true
        this.modelCar = 'Ford'
    }

},
    checkingHealth(){
        if(this.energy<0 && this.mood<0){
            this.health = 'dead'
        return 'i am so sorry,bro'
        }
    },
}
  console.log(tamogotchi)