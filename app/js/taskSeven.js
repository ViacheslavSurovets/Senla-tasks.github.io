
function createHolder (arg) {

    return {

        log: arg,
         getValue() {
            return this.log;
        },
         setValue(value) {
            return this.log = value
        }
    }

}



//
// class createHolder {
//     constructor(value) {
//         this.value = value;
//     }
//     getValue() {
//         return this.value;
//     }
//     setValue(value) {
//         this.value = value;
//     }
// }
//
//
// let obj = new createHolder(5);



