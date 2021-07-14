export default function pickTargetColor(limit){
    limit--;
    return Math.ceil(Math.random() * (limit - 0) + 0);
}