// function Factory() { }
        // const item = new Factory();

        // function NewFactory(name) {
        //     this.name = name;
        //     this.sayYourName = function () {
        //         console.log(`삐리비리비리 제 이름은 ${this.name}입니다.`);
        //     }
        // }

        // const robot1 = new NewFactory('재현');

        const foods = ['짜장면', '뽁음밥', '해장국', '치킨'];

        function FoodBot(foodNames) {
            this.menu = foodNames;
            this.sayMenu = function () {
                console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
            }
        }

        const foodBotMark1 = new FoodBot(foods);