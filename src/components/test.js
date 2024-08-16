const days = ['August, 18, 2024', 'August, 17, 2024', 'August, 16, 2024']
const obj = [{content: "Hey am texting you, don't reply", day: 'August, 18, 2024', time: '09:43 PM', userId: '8db1da512fcb4a56bc6947f787a8eb4b', userName: 'Marvin'},
{content: 'sdsd', day: 'August, 17, 2024', time: '09:35 PM', userId: '22b66c4991524f9489e0c96f07883659', userName: 'Israel'},
{content: 'sdsdf', day: 'August, 17, 2024', time: '09:35 PM', userId: '22b66c4991524f9489e0c96f07883659', userName: 'Israel'},
{content: 'sdfsfdsdf', day: 'August, 16, 2024', time: '09:35 PM', userId: '22b66c4991524f9489e0c96f07883659', userName: 'Israel'},{content: 'saqawrq23', day: 'August, 16, 2024', time: '04:52 PM', userId: '22b66c4991524f9489e0c96f07883659', userName: 'Israel'}]


days.forEach(items => {
    console.log('head' , items)
    obj.forEach(item1 => {
        if (item1.day == items) {
            console.log(item1)
        }

    })

})

// const new_list = obj.forEach(items => {
//     for (let i = 0; i < days.length; i++) {
//         if (items.day === days[i]) {
      
//                 ({
//                     date : items.day, 
//                     content : items.content
//                 })

//         }
//     }
// }
    
// )

// console.log(new_list)