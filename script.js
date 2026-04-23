/**
 * Terminal CLI - Carta de Presentación
 * Franco Rule Calvi
 */

// ===== Configuration =====
const CONFIG = {
    bootSeenKey: 'devos_boot_seen',
    animationsEnabledKey: 'devos_animations_enabled',
    typingSpeed: 20, // ms per character - más rápido
    typingSpeedFast: 10,
    scrollThreshold: 0.2
};

// ===== DOM Elements =====
const bootScreen = document.getElementById('boot-screen');
const terminal = document.getElementById('terminal');
const inputCursor = document.querySelector('.input-cursor');
const commandOutput = document.getElementById('command-output');

// ===== Easter Egg Commands =====
const COMMANDS = {
    help: {
        description: 'Show available commands',
        execute: () => {
            return `<strong class="section-title">Available commands:</strong>
<span class="cmd-name">help</span>       <span class="cmd-desc">Show this help message</span>
<span class="cmd-name">neofetch</span>   <span class="cmd-desc">Display system information</span>
<span class="cmd-name">uptime</span>     <span class="cmd-desc">Show system uptime</span>
<span class="cmd-name">uname</span>      <span class="cmd-desc">Show system name</span>
<span class="cmd-name">sudo</span>       <span class="cmd-desc">Try to gain superuser access</span>
<span class="cmd-name">matrix</span>     <span class="cmd-desc">Activate matrix mode</span>
<span class="cmd-name">restart</span>    <span class="cmd-desc">Reboot the system</span>

<strong class="section-title">Navigation:</strong>
<span class="cmd-desc">Scroll down to view sections</span>
<span class="cmd-desc">All content loads automatically as you scroll</span>`;
        }
    },
    
    clear: {
        description: 'Clear terminal',
        execute: () => {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return 'Terminal cleared. Scroll down to reload content.';
        }
    },
    
    neofetch: {
        description: 'System info',
        execute: () => {
            return `<strong>    .---.        franco@dev</strong>
<strong>   /     \\       -----------</strong>
   \\     /       <span class="cmd-name">OS:</span>        <span class="cmd-desc">DEVOS v1.0</span>
    \\   /        <span class="cmd-name">Host:</span>      <span class="cmd-desc">Franco Rule Calvi</span>
     \\ /         <span class="cmd-name">Location:</span>  <span class="cmd-desc">Mendoza, AR</span>
      v          <span class="cmd-name">Uptime:</span>    <span class="cmd-desc">${getUptime()}</span>
                 <span class="cmd-name">Shell:</span>     <span class="cmd-desc">bash 5.1.16</span>
                 <span class="cmd-name">Terminal:</span> <span class="cmd-desc">web-terminal</span>
                 <span class="cmd-name">CPU:</span>       <span class="cmd-desc">PHP Brain 8.2</span>
                 <span class="cmd-name">Memory:</span>    <span class="cmd-desc">Laravel Powered</span>`;
        }
    },
    
    uptime: {
        description: 'System uptime',
        execute: () => {
            return `System uptime: ${getUptime()}`;
        }
    },
    
    uname: {
        description: 'System name',
        execute: () => {
            return 'DEVOS v1.0 franco-dev generic x86_64 GNU/Linux';
        }
    },
    
    sudo: {
        description: 'Superuser access',
        execute: () => {
            return `<span class="cmd-name">[sudo]</span> password for visitor: ********

<span class="cmd-desc">franco is not in the sudoers file. This incident will be reported.</span>

<strong>Nice try, hacker 😉</strong>`;
        }
    },
    
    matrix: {
        description: 'Matrix mode',
        execute: () => {
            activateMatrixMode();
            return 'Matrix mode activated for 5 seconds...';
        }
    },
    
    restart: {
        description: 'Reboot the system',
        execute: () => {
            // Limpiar localStorage y recargar con param
            localStorage.removeItem(CONFIG.bootSeenKey);
            localStorage.removeItem(CONFIG.animationsEnabledKey);
            
            setTimeout(() => {
                window.location.href = window.location.pathname + '?reboot=true';
            }, 500);
            
            return 'Rebooting system...';
        }
    },
    
    whoami: {
        description: 'User identity',
        execute: () => {
            return 'visitor (authenticated guest)';
        }
    },
    
    ls: {
        description: 'List directory',
        execute: () => {
            return 'about.txt  achievements.log  contact  methodology.md  stack/';
        }
    },
    
    pwd: {
        description: 'Print working directory',
        execute: () => {
            return '/home/franco/dev';
        }
    },
    
    date: {
        description: 'Show date',
        execute: () => {
            return new Date().toString();
        }
    }
};

// ===== Utility Functions =====
function getUptime() {
    const loadTime = performance.timing ? performance.timing.navigationStart : Date.now();
    const uptime = Date.now() - loadTime;
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== Boot Sequence =====
function initBootSequence() {
    const urlParams = new URLSearchParams(window.location.search);
    const isReboot = urlParams.get('reboot') === 'true';
    const hasSeenBoot = localStorage.getItem(CONFIG.bootSeenKey);
    
    if (isReboot) {
        // Viene de comando restart: mostrar boot + animaciones
        localStorage.setItem(CONFIG.animationsEnabledKey, 'true');
        // Limpiar URL param sin recargar
        window.history.replaceState({}, '', window.location.pathname);
        showBoot();
    } else if (!hasSeenBoot) {
        // Primera visita: mostrar boot + animaciones
        localStorage.setItem(CONFIG.animationsEnabledKey, 'true');
        showBoot();
    } else {
        // F5 normal: saltear boot, texto instantáneo
        localStorage.setItem(CONFIG.animationsEnabledKey, 'false');
        skipBoot();
    }
}

function showBoot() {
    bootScreen.style.display = 'flex';
    terminal.classList.add('hidden');
    
    // Wait for boot animation then allow continue
    document.addEventListener('keydown', handleBootKey);
    document.addEventListener('click', handleBootClick);
    
    // Auto-continue after 4 seconds
    setTimeout(() => {
        if (!bootScreen.classList.contains('completed')) {
            completeBoot();
        }
    }, 4000);
}

function skipBoot() {
    bootScreen.style.display = 'none';
    terminal.classList.remove('hidden');
    initTypewriter();
    initScrollObserver();
}

function handleBootKey(e) {
    if (e.key === 'Enter') {
        completeBoot();
    }
}

function handleBootClick() {
    completeBoot();
}

function completeBoot() {
    bootScreen.classList.add('completed');
    localStorage.setItem(CONFIG.bootSeenKey, 'true');
    localStorage.setItem(CONFIG.animationsEnabledKey, 'true'); // Animaciones habilitadas
    
    // Fade out boot screen
    bootScreen.style.opacity = '0';
    bootScreen.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        bootScreen.style.display = 'none';
        terminal.classList.remove('hidden');
        initTypewriter();
        initScrollObserver();
    }, 500);
    
    // Remove listeners
    document.removeEventListener('keydown', handleBootKey);
    document.removeEventListener('click', handleBootClick);
}

// ===== Typewriter Effect =====
function initTypewriter() {
    const typewriters = document.querySelectorAll('.typewriter');
    const animationsEnabled = localStorage.getItem(CONFIG.animationsEnabledKey) === 'true';
    
    typewriters.forEach(el => {
        const text = el.getAttribute('data-text');
        if (!text) return;
        
        if (animationsEnabled) {
            // MODO ANIMADO: como está ahora
            el.textContent = '';
            el.dataset.originalText = text;
            el.classList.add('waiting');
        } else {
            // MODO INSTANTÁNEO: mostrar texto completo
            el.textContent = text;
            el.classList.add('completed');
        }
    });
    
    // Las animaciones son manejadas por IntersectionObserver cuando cada sección entra en viewport
}

function typeVisibleElements() {
    const typewriters = document.querySelectorAll('.typewriter.waiting');
    
    typewriters.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            el.classList.remove('waiting');
            typeElement(el);
        }
    });
}

async function typeElement(el) {
    // Evitar reinicio si ya está animando o completado
    if (el.classList.contains('animating') || el.classList.contains('completed')) {
        return;
    }
    
    const text = el.dataset.originalText;
    let currentText = '';
    
    el.classList.add('typing', 'animating');
    
    // Check if it has a delay class
    let delay = 0;
    if (el.classList.contains('delay-1')) delay = 300;
    else if (el.classList.contains('delay-2')) delay = 600;
    else if (el.classList.contains('delay-3')) delay = 900;
    
    if (delay > 0) {
        await sleep(delay);
    }
    
    // Type each character - procesar en chunks de 2-3 caracteres para reducir reflows
    const chunkSize = 2;
    for (let i = 0; i < text.length; i += chunkSize) {
        const chunk = text.slice(i, i + chunkSize);
        currentText += chunk;
        el.textContent = currentText;
        
        // Variable typing speed
        const speed = chunk.includes(' ') ? CONFIG.typingSpeed : 
                     Math.random() * 10 + CONFIG.typingSpeed;
        await sleep(speed);
    }
    
    el.classList.remove('typing', 'animating');
    el.classList.add('completed');
}

// ===== Scroll Observer =====
function initScrollObserver() {
    const sections = document.querySelectorAll('.section');
    const animatedSections = new Set();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedSections.has(entry.target.id)) {
                entry.target.classList.add('visible');
                animatedSections.add(entry.target.id);
                
                // Type elements in this section - una sola vez
                const typewriters = entry.target.querySelectorAll('.typewriter.waiting');
                typewriters.forEach((el, index) => {
                    setTimeout(() => typeElement(el), index * 80);
                });
                
                // Dejar de observar esta sección (solo animar una vez)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// ===== Interactive Commands =====
function initInteractiveCommands() {
    if (!inputCursor) return;
    
    inputCursor.addEventListener('keydown', handleCommandInput);
    
    // Prevent HTML paste - only allow plain text
    inputCursor.addEventListener('paste', (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
    });
    
    // Clean any HTML that might have been inserted and ensure cursor at end
    inputCursor.addEventListener('input', () => {
        const text = inputCursor.textContent;
        if (inputCursor.innerHTML !== text) {
            inputCursor.textContent = text;
        }
        // Always move cursor to end after any input
        moveCursorToEnd();
    });
    
    // Focus on click on the command line area (not just the input)
    const commandLine = document.querySelector('#interactive .command-line');
    if (commandLine) {
        commandLine.addEventListener('click', (e) => {
            // Don't focus if selecting text
            if (window.getSelection().toString().length === 0) {
                inputCursor.focus({ preventScroll: true });
                moveCursorToEnd();
            }
        });
    }
    
    // Focus on any key press (except when typing in other inputs)
    document.addEventListener('keydown', (e) => {
        // Ignore if already focused, or if in an input/textarea, or modifier keys
        if (document.activeElement === inputCursor) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        // Ignore special keys
        if (['Tab', 'Escape', 'F5', 'F12'].includes(e.key)) return;
        
        inputCursor.focus({ preventScroll: true });
        moveCursorToEnd();
    });
}

function moveCursorToEnd() {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(inputCursor);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}

function handleCommandInput(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const command = inputCursor.textContent.trim().toLowerCase().replace(/\n/g, '');
        executeCommand(command);
        inputCursor.textContent = '';
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autocompleteCommand();
    }
}

function executeCommand(command) {
    if (!command) return;
    
    commandOutput.classList.remove('hidden', 'error');
    
    if (COMMANDS[command]) {
        commandOutput.innerHTML = COMMANDS[command].execute();
    } else {
        commandOutput.classList.add('error');
        commandOutput.innerHTML = `<strong>Command not found:</strong> <span class="cmd-name">${command}</span>

<span class="cmd-desc">Type '<span class="cmd-name">help</span>' to see available commands.</span>`;
    }
    
    // Scroll to show output
    setTimeout(() => {
        commandOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function autocompleteCommand() {
    const partial = inputCursor.textContent.trim().toLowerCase();
    if (!partial) return;
    
    const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(partial));
    if (matches.length === 1) {
        inputCursor.textContent = matches[0];
        moveCursorToEnd();
    } else if (matches.length > 1) {
        commandOutput.classList.remove('hidden', 'error');
        const matchList = matches.map(cmd => `<span class="cmd-name">${cmd}</span>`).join(', ');
        commandOutput.innerHTML = `<strong>Possible commands:</strong> ${matchList}`;
    }
}

// ===== Matrix Mode =====
function activateMatrixMode() {
    const originalBg = document.body.style.backgroundColor;
    const originalColor = document.body.style.color;
    
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#00ff00';
    
    // Add matrix effect
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const drops = [];
    
    // Create canvas overlay
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = Math.floor(canvas.width / 20);
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    const matrixInterval = setInterval(() => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 50);
    
    // Reset after 5 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        document.body.removeChild(canvas);
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }, 5000);
}

// ===== Easter Egg: Konami Code =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                        'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateMatrixMode();
        commandOutput.classList.remove('hidden');
        commandOutput.textContent = '🎮 Konami Code activated! Cheat mode unlocked!';
    }
});

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initBootSequence();
    initInteractiveCommands();
    
    // Animations are now handled only by IntersectionObserver - no need for visibility check
});

// Note: Scroll-triggered typing is handled by IntersectionObserver above