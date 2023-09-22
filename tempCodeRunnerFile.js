const map = new Map()
map.set('US',"hola")
map.set('IN',"hollaa")
map.set('BN',"hello")



for (const [key , value] in map) {
    console.log(key);
}