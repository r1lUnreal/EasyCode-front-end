// let ready_robot = 0;

// while (true) {
//     let robot = prompt('Робот готов к работе? (да / нет. стоп - выйти из программы)');

//     if (robot == 'стоп') {
//         break;
//     }
//     else if (robot == 'да') {
//         ready_robot++;
//     }
//     else if (robot == 'нет') {
//         alert('Робот готов к работе? (да / нет. стоп - выйти из программы)');
//     }
// }

// alert(`Колличество готовый роботов: ${ready_robot}`);


// let ready_robot = 0; // готовы
// let needsRepair_robot = 0; // требуется ремонт
// let decommissioned_robot = 0; // списаны

// while (true) {
//     let robot = prompt('Какое состояние у робота?');

//     if (robot == 'stop') {
//         break;
//     }
//     else if (robot == 'ready') {
//         ready_robot++;
//     }
//     else if (robot == 'needsRepair') {
//         needsRepair_robot++;
//     }
//     else if (robot == 'decommissioned') {
//         decommissioned_robot++;
//     }
// }

// alert(`Состояние роботов: готовы к работе: ${ready_robot}, требуется ремонт: ${needsRepair_robot}, списаны с работы: ${decommissioned_robot}`);

let ready_robot = 0; // готовы
let needsRepair_robot = 0; // требуется ремонт
let decommissioned_robot = 0; // списаны

function inventoryRobots() {
    while (true) {
        let robot = prompt('Какое состояние у робота?');

        if (robot == 'stop') {
            break;
        }
        else if (robot == 'ready') {
            confirm('Confirm this action?');
            if (confirm == true) {
                ready_robot++;
            }
            else {

            }
        }
        else if (robot == 'needsRepair') {
            confirm('Confirm this action?');
            if (confirm == true) {
                needsRepair_robot++;
            }
            else {

            }
        }
        else if (robot == 'decommissioned') {
            confirm('Confirm this action?');
            if (confirm == true) {
                decommissioned_robot++;
            }
            else {
                
            }
        }
    }
    alert(`Состояние роботов: готовы к работе: ${ready_robot}, требуется ремонт: ${needsRepair_robot}, списаны с работы: ${decommissioned_robot}`);
}

inventoryRobots();
