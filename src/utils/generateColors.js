export default function generateColors(limit) {
    const colors = [];
    for (let i=0;i<limit;++i){
       const first = Math.ceil(Math.random() * (255 - 0) + 0);
       const second = Math.ceil(Math.random() * (255 - 0) + 0);
       const third = Math.ceil(Math.random() * (255 - 0) + 0);
       const color = {first,second,third};
       colors.push(color);
    }
    return colors;
}