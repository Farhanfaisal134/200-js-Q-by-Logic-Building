Intractive Shapes

const [grid, setGrid] = useState(Array.from({length: 3}, () => Array(3).fill(false)));
const queueRef = useRef([]);
const timerRef = useRef([]);
const [isQueueFull, setIsQueueFull] = useState(false);

const handleClick = (rowIdx, colIdx, flag) => {
if(timerRef.current.length > 0 && flag) return;
if(grid[rowIdx][colIdx] && flag) return;
const gridDeepCopy = [...grid];
gridDeepCopy[rowIdx][colIdx] = flag;
if(flag) {
queueRef.current.push([rowIdx, colIdx]);
if(queueRef.current.length === 9) setIsQueueFull(true);
}
setGrid(gridDeepCopy);
};

useEffect(() => {
if(isQueueFull){
queueRef.current.forEach(([rowIdx, colId], idx) => {
timerRef.current[idx] = setTimeout(() => {
handleClick(rowIdx, colIdx, true);
if(idx === timerRef.current.length - 1){
timerRef.current = [];
setIsQueueFull(false)
}
}, 1000 \* (idx + 1));

});
queueRef.current = [];
}
}, [isQueueFull]);

useEffect(() => {
timerRef.current.forEach((id) => clearTimeout(id));
}, []);
