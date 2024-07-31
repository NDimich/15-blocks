export default function sortDesk(cur, next) {
    if (cur.currentPosition[0] === next.currentPosition[0]) {
        return cur.currentPosition[1] - next.currentPosition[1]
    }
    return cur.currentPosition[0] - next.currentPosition[0]
}
