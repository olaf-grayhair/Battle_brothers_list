

export const strLength = (str) => {
    if(str.length > 1) {
        return str.split('-').join().split(',').map(Number).reduce((acc, curr) => acc + curr, 0) / 2
    }else{
        return str
    }
}