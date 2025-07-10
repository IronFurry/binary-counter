let bits = [0, 0, 0, 0];
let prevBits = [...bits];
let n = 0;
function flipBlock() {
    let i = bits.length - 1;
    n++;
    while (i >= 0) {
        if (bits[i] === 0) {
            bits[i] = 1;
            console.log(bits);
            break;
        }
        else {
            bits[i] = 0;
            i--;
            console.log(bits);
        }
    }
    if (i < 0) {
        bits.unshift(1);
    }
    updateDOM();
}

function updateDOM() {
    document.querySelector(".decimal_value").textContent = n;

    const bitElements = document.querySelectorAll(".bit");

   
    if (bitElements.length !== bits.length) {
        rebuildBits();
        return;
    }

    
    bits.forEach((bitValue, index) => {
        const bitDiv = bitElements[index];
        const front = bitDiv.querySelector('.front');
        const back = bitDiv.querySelector('.back');

          if (bitValue !== prevBits[index]) {
        front.textContent = bitValue;
        back.textContent = bitValue === 0 ? "1" : "0";

        
        bitDiv.classList.add('flip');

        
        setTimeout(() => {
            bitDiv.classList.remove('flip');
        }, 600);
      }
    });
     prevBits = [...bits];
}

function rebuildBits() {
    const container = document.querySelector(".containor");
    
    const button = container.querySelector("button");
    container.innerHTML = ''; // clear all
    bits.forEach((bit, index) => {
        const bitDiv = document.createElement("div");
        bitDiv.className = "bit";
        bitDiv.setAttribute("data-index", index);

        const front = document.createElement("div");
        front.className = "front";
        front.textContent = bit;

        const back = document.createElement("div");
        back.className = "back";
        back.textContent = bit === 0 ? 1 : 0;

        bitDiv.appendChild(front);
        bitDiv.appendChild(back);
        container.appendChild(bitDiv);
    });

    container.appendChild(button); 
}

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector('.theme-toggle');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = "☀️"; // Optional: swap emoji
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleBtn.textContent = "🌙";
  }
}
