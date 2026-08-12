const arr1 = 
    [ { id: 1, name: 'li', sex: '男' }, 
    { id: 2, name: '王', sex: '男'}]

const arr2 = arr1.map(({id,name}) => ({id,name}))

console.log(arr2);