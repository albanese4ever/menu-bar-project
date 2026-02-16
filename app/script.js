const tables = [
    { id: 1, x:2, y:1, group:null },
    { id: 2, x:2, y:2, group:null },
    { id: 3, x:2, y:4, group:null },

    { id: 4, x:6, y:1, group:null },
    { id: 5, x:7, y:1, group:null },

    { id: 6, x:6, y:3, group:null },
    { id: 7, x:7, y:3, group:null },

    { id: 8, x:7, y:5, group:null }
];

const floor = document.getElementById("floor");

let selected = [];
let dragging = null;
let lastPos = null;
let holdTimer = null;

const modal = document.getElementById("mergeModal");
const confirmMerge = document.getElementById("confirmMerge");
const cancelMerge = document.getElementById("cancelMerge");

let pendingMerge = null;

function render(){
    floor.innerHTML="";

    tables.forEach(t=>{
        const div=document.createElement("div");

        div.className="cell " + (t.group ? "group" : "free");
        div.textContent="T"+t.id;

        div.style.gridColumnStart=t.x;
        div.style.gridRowStart=t.y;

        div.onclick = ()=> !dragging && selectTable(t);

        div.addEventListener("mousedown",e=>startHold(e,t));
        div.addEventListener("touchstart",e=>startHold(e,t));

        div.addEventListener("mouseup",cancelHold);
        div.addEventListener("mouseleave",cancelHold);
        div.addEventListener("touchend",cancelHold);

        floor.appendChild(div);
    });
}

/* ---- SELEZIONE MANUALE ---- */
function selectTable(t){
    selected.push(t);
    if(selected.length===2){
        pendingMerge = [...selected];
        modal.style.display="flex";
    }
}

confirmMerge.onclick=()=>{
    const g = Date.now();
    pendingMerge.forEach(t=>t.group=g);
    selected=[];
    pendingMerge=null;
    modal.style.display="none";
    render();
};

cancelMerge.onclick=()=>{
    selected=[];
    pendingMerge=null;
    modal.style.display="none";
};

/* ---- LONG PRESS ---- */
function startHold(e, table){
    e.preventDefault();
    holdTimer = setTimeout(()=>{
        dragging = table;
        lastPos = { x:table.x, y:table.y };

        window.addEventListener("mousemove",onDrag);
        window.addEventListener("touchmove",onDrag);
        window.addEventListener("mouseup",stopDrag);
        window.addEventListener("touchend",stopDrag);
    },900);
}

function cancelHold(){ clearTimeout(holdTimer); }

/* ---- DRAG ---- */
function onDrag(e){
    if(!dragging) return;

    const rect = floor.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = Math.max(1, Math.round((clientX-rect.left)/68));
    const y = Math.max(1, Math.round((clientY-rect.top)/68));

    dragging.x = x;
    dragging.y = y;

    render();
}

/* ---- DISTANZA MINIMA ---- */
function tooClose(table){
    return tables.some(t=>{
        if(t===table) return false;
        const dx = Math.abs(t.x - table.x);
        const dy = Math.abs(t.y - table.y);
        return (dx<=1 && dy<=1);
    });
}

/* ---- CERCA GRUPPO VICINO ---- */
function adjacentGroup(table){
    for(const t of tables){
        if(t===table) continue;
        const dx = Math.abs(t.x - table.x);
        const dy = Math.abs(t.y - table.y);

        if((dx+dy)===1){
            return t;
        }
    }
    return null;
}

/* ---- RILASCIO (FIX) ---- */
function stopDrag(){
    clearTimeout(holdTimer);

    if(dragging){

        // 1️⃣ prima guardiamo se deve unirsi
        const neighbor = adjacentGroup(dragging);

        if(neighbor){
            pendingMerge = [dragging, neighbor];
            modal.style.display="flex";
        }
        else {

            // 2️⃣ SOLO SE NON C'È UNIONE → controlliamo distanza
            if(tooClose(dragging)){
                dragging.x = lastPos.x;
                dragging.y = lastPos.y;
                render();
            }
        }
    }

    dragging=null;

    window.removeEventListener("mousemove",onDrag);
    window.removeEventListener("touchmove",onDrag);
    window.removeEventListener("mouseup",stopDrag);
    window.removeEventListener("touchend",stopDrag);
}

render();
