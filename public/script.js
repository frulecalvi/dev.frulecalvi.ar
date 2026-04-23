// ===== Translations =====
const TRANSLATIONS = {
    es: {
        boot: {
            init: 'INICIANDO DEVOS v1.0...',
            mount: 'MONTANDO SISTEMA DE ARCHIVOS',
            loading: 'CARGANDO PERFIL',
            location: 'UBICACIÓN',
            access: 'ACCESO CONCEDIDO. BIENVENIDO, VISITANTE.',
            press: 'Presiona [ENTER] para continuar...'
        },
        tagline: 'Backend Developer | Laravel | Data Processing',
        hero: {
            title: 'Franco Rule Calvi',
            role: 'Desarrollador Backend especializado en PHP, Laravel y procesamiento de datos.',
            passion: 'Apasionado por el pensamiento lógico, el orden y las buenas prácticas.',
            email: 'hola@frulecalvi.ar'
        },
        about: {
            curiosity: 'La curiosidad es mi motor principal. No me conformo con "que funcione" - quiero entender POR QUÉ funciona.',
            teamwork: 'Soy un firme creyente de que el compromiso y la empatía son los mejores aliados en el trabajo en equipo. Programar no es solo escribir código: es resolver problemas reales de forma elegante y mantenible.',
            balance: 'En el código encuentro el equilibrio perfecto entre lógica, creatividad y utilidad. Cada proyecto es una oportunidad de desafiarme y crecer profesionalmente.',
            locationLabel: 'Ubicación:',
            location: 'Mendoza, Argentina',
            locationFull: 'Mendoza, Argentina',
            languagesLabel: 'Idiomas:',
            languages: 'Español (nativo) | Inglés (intermedio-avanzado)',
            languagesFull: 'Español (nativo) | Inglés (intermedio-avanzado)'
        },
        formation: {
            selfTaught: {
                title: '# CAMINO AUTODIDACTA',
                desc1: 'Inicié en 2005, a los 13 años, con un CD del viejo SuSE Linux que llegó a casa.',
                desc2: 'Aprendí leyendo manpages con conexión dial-up. Durante mi adolescencia mantuve un blog sobre Linux y participé en foros e intercambios con la comunidad de blogueros de Linux en español.',
                desc3: 'Mi paso por la Escuela de Comercio Martín Zapata (UNCuyo) me introdujo al mundo de la web y el desarrollo de aplicaciones, consolidando mi camino en la programación.'
            },
            academic: {
                title: '# FORMACIÓN ACADÉMICA',
                desc1: 'Actualmente me encuentro cursando la Licenciatura en Análisis y Gestión de Datos en la Universidad Nacional de San Luis.'
            }
        },
        stack: {
            principal: [
                { name: 'php8', level: 'Experiencia sólida' },
                { name: 'laravel12', level: 'Framework principal' },
                { name: 'mysql', level: 'Diseño y optimización' },
                { name: 'linux', level: 'Uso diario' },
                { name: 'git', level: 'Colaboración' },
                { name: 'docker', level: 'Contenedores' },
                { name: 'phpunit', level: 'TDD' }
            ],
            secondary: [
                { name: 'bash', level: 'Automatización' },
                { name: 'jenkins', level: 'Pipelines CI/CD' },
                { name: 'gcp', level: 'Google Cloud' },
                { name: 'python', level: 'BigQuery, scraping y análisis de datos' },
                { name: 'nginx/apache', level: 'Servidores web' },
                { name: 'react/vue', level: 'Frontend básico' }
            ]
        },
        methodology: {
            logical: {
                title: '# PENSAMIENTO LÓGICO',
                desc: 'Abordo los problemas analizando primero, escribiendo el código después. Una hora de diseño ahorra diez de debugging.'
            },
            practices: {
                title: '# BUENAS PRÁCTICAS',
                desc: 'Código limpio, documentado y testeable. Uso TDD con PHPUnit para asegurar calidad desde el inicio.'
            },
            linux: {
                title: '# LINUX COMO ENTORNO',
                desc: 'Uso Linux diariamente. Trabajar cerca del sistema me permite entender mejor la infraestructura que sostiene las aplicaciones.'
            },
            collaboration: {
                title: '# COLABORACIÓN',
                desc: 'Git para control de versiones. Apuesto a la revisión constructiva del código y la comunicación clara con el equipo.'
            }
        },
        achievements: {
            idealsur: {
                role: 'Desarrollador Backend',
                location: 'Remoto',
                period: '2023-2026',
                items: [
                    'Optimización de procesamiento de datos a gran escala con PHP + Bash + BigQuery',
                    'Implementación de soluciones Laravel para servicios de atención al cliente',
                    'Mejoras en CRM corporativo optimizando código server-side'
                ]
            },
            ecosintesis: {
                location: 'Híbrido',
                period: '2023-Presente',
                items: [
                    'Diseño y desarrollo de sistema de reservas multipropósito',
                    'Pipeline CI/CD automatizado con Docker + Jenkins',
                    'Proyectos de web scraping usando Python, Bash, RDBMS, GCP'
                ]
            },
            circlan: {
                role: 'Desarrollador Fullstack',
                period: '2010-2013',
                items: [
                    'Desarrollo de sitios para diversos clientes usando WordPress, Joomla, PHP, MySQL, JS, HTML, CSS',
                    'Soluciones a medida permitiendo autogestión de contenido por parte de clientes'
                ]
            }
        },
        contact: {
            email: 'email:',
            linkedin: 'linkedin:',
            github: 'github:',
            telegram: 'telegram:',
            location: 'ubicación:',
            invitation: '¿Tenés un proyecto o idea en mente? Escribime y charlamos.'
        },
        commands: {
            help: 'Muestra los comandos disponibles',
            clear: 'Limpia la terminal',
            neofetch: 'Muestra información del sistema',
            uptime: 'Muestra el tiempo de actividad',
            uname: 'Muestra el nombre del sistema',
            sudo: 'Intenta obtener acceso de superusuario',
            matrix: 'Activa el modo matrix',
            restart: 'Reinicia el sistema',
            whoami: 'Identidad del usuario',
            ls: 'Lista el directorio',
            pwd: 'Muestra el directorio actual',
            date: 'Muestra la fecha'
        },
        output: {
            availableCommands: 'Comandos disponibles:',
            navigation: 'Navegación:',
            scrollToView: 'Desplázate hacia abajo para ver las secciones',
            contentLoads: 'Todo el contenido se carga automáticamente al hacer scroll',
            terminalCleared: 'Terminal limpiada. Desplázate hacia abajo para recargar el contenido.',
            rebooting: 'Reiniciando sistema...',
            commandNotFound: 'Comando no encontrado',
            typeHelp: "Escribe '<span class=\"cmd-name\">help</span>' para ver los comandos disponibles.",
            possibleCommands: 'Comandos posibles:',
            systemUptime: 'Tiempo de actividad:',
            sudoPassword: '[sudo] contraseña para visitante: ********',
            sudoError: 'franco no está en el archivo sudoers. Este incidente será reportado.',
            niceTry: 'Buen intento, hacker 😉',
            matrixActivated: 'Modo matrix activado por 10 segundos...',
            visitor: 'visitante (invitado autenticado)',
            os: 'SO',
            host: 'Host',
            location: 'Ubicación',
            uptime: 'Actividad',
            shell: 'Shell',
            terminal: 'Terminal',
            cpu: 'CPU',
            memory: 'Memoria'
        },
        footer: {
            version: 'DEVOS v1.0 - Franco Rule Calvi - 2026'
        }
    },
    en: {
        boot: {
            init: 'INITIALIZING DEVOS v1.0...',
            mount: 'MOUNTING FILESYSTEM',
            loading: 'LOADING PROFILE',
            location: 'LOCATION',
            access: 'ACCESS GRANTED. WELCOME, VISITOR.',
            press: 'Press [ENTER] to continue...'
        },
        tagline: 'Backend Developer | Laravel | Data Processing',
        hero: {
            title: 'Franco Rule Calvi',
            role: 'Backend Developer specialized in PHP, Laravel and data processing.',
            passion: 'Passionate about logical thinking, order and best practices.',
            email: 'hola@frulecalvi.ar'
        },
        about: {
            curiosity: 'Curiosity is my main driver. I don\'t settle for "it works" - I want to understand WHY it works.',
            teamwork: 'I firmly believe that commitment and empathy are the best allies in teamwork. Programming is not just about writing code: it\'s about solving real problems in an elegant and maintainable way.',
            balance: 'In code I find the perfect balance between logic, creativity and utility. Each project is an opportunity to challenge myself and grow professionally.',
            locationLabel: 'Location:',
            location: 'Mendoza, Argentina',
            locationFull: 'Mendoza, Argentina',
            languagesLabel: 'Languages:',
            languages: 'Spanish (native) | English (upper-intermediate)',
            languagesFull: 'Spanish (native) | English (upper-intermediate)'
        },
        formation: {
            selfTaught: {
                title: '# SELF-TAUGHT PATH',
                desc1: 'Started in 2005, at age 13, with a CD of the old SuSE Linux that arrived home.',
                desc2: 'Learned by reading manpages with dial-up connection. During adolescence I maintained a Linux blog and participated in forums and exchanged with the Spanish-speaking Linux bloggers community.',
                desc3: 'My time at Escuela de Comercio Martín Zapata School (UNCuyo) introduced me to the world of web and application development, consolidating my path in programming.'
            },
            academic: {
                title: '# ACADEMIC BACKGROUND',
                desc1: 'I am currently pursuing the Bachelor\'s degree in Data Analysis and Management at Universidad Nacional de San Luis.'
            }
        },
        stack: {
            principal: [
                { name: 'php8', level: 'Solid experience' },
                { name: 'laravel12', level: 'Main framework' },
                { name: 'mysql', level: 'Design and optimization' },
                { name: 'linux', level: 'Daily driver' },
                { name: 'git', level: 'Collaboration' },
                { name: 'docker', level: 'Containers' },
                { name: 'phpunit', level: 'TDD' }
            ],
            secondary: [
                { name: 'bash', level: 'Automation' },
                { name: 'jenkins', level: 'CI/CD pipelines' },
                { name: 'gcp', level: 'Google Cloud' },
                { name: 'python', level: 'BigQuery, scraping & data analysis' },
                { name: 'nginx/apache', level: 'Web servers' },
                { name: 'react/vue', level: 'Basic frontend' }
            ]
        },
        methodology: {
            logical: {
                title: '# LOGICAL THINKING',
                desc: 'I approach problems by analyzing first, coding later. One hour of design saves ten hours of debugging.'
            },
            practices: {
                title: '# BEST PRACTICES',
                desc: 'Clean, documented and testable code. I use TDD with PHPUnit to ensure quality from the start.'
            },
            linux: {
                title: '# LINUX AS ENVIRONMENT',
                desc: 'I use Linux daily. Working close to the system allows me to better understand the infrastructure that supports applications.'
            },
            collaboration: {
                title: '# COLLABORATION',
                desc: 'Git for version control. I believe in constructive code review and clear communication with the team.'
            }
        },
        achievements: {
            idealsur: {
                role: 'Backend Developer',
                location: 'Remote',
                period: '2023-2026',
                items: [
                    'Optimization of large-scale data processing using PHP + Bash + BigQuery',
                    'Implementation of Laravel solutions for customer service',
                    'Improvements in corporate CRM optimizing server-side code'
                ]
            },
            ecosintesis: {
                location: 'Hybrid',
                period: '2023-Present',
                items: [
                    'Design and development of multi-purpose reservation system',
                    'Automated CI/CD pipeline with Docker + Jenkins',
                    'Web scraping projects using Python, Bash, RDBMS, GCP'
                ]
            },
            circlan: {
                role: 'Fullstack Developer',
                period: '2010-2013',
                items: [
                    'Development of websites for various clients using WordPress, Joomla, PHP, MySQL, JS, HTML, CSS',
                    'Custom solutions allowing clients to self-manage content'
                ]
            }
        },
        contact: {
            email: 'email:',
            linkedin: 'linkedin:',
            github: 'github:',
            telegram: 'telegram:',
            location: 'location:',
            invitation: 'Have a project or idea in mind? Write to me and let\'s chat.'
        },
        commands: {
            help: 'Show available commands',
            clear: 'Clear terminal',
            neofetch: 'Display system information',
            uptime: 'Show system uptime',
            uname: 'Show system name',
            sudo: 'Try to gain superuser access',
            matrix: 'Activate matrix mode',
            restart: 'Reboot the system',
            whoami: 'User identity',
            ls: 'List directory',
            pwd: 'Print working directory',
            date: 'Show date'
        },
        output: {
            availableCommands: 'Available commands:',
            navigation: 'Navigation:',
            scrollToView: 'Scroll down to view sections',
            contentLoads: 'All content loads automatically as you scroll',
            terminalCleared: 'Terminal cleared. Scroll down to reload content.',
            rebooting: 'Rebooting system...',
            commandNotFound: 'Command not found',
            typeHelp: "Type '<span class=\"cmd-name\">help</span>' to see available commands.",
            possibleCommands: 'Possible commands:',
            systemUptime: 'System uptime:',
            sudoPassword: '[sudo] password for visitor: ********',
            sudoError: 'franco is not in the sudoers file. This incident will be reported.',
            niceTry: 'Nice try, hacker 😉',
            matrixActivated: 'Matrix mode activated for 10 seconds...',
            visitor: 'visitor (authenticated guest)',
            os: 'OS',
            host: 'Host',
            location: 'Location',
            uptime: 'Uptime',
            shell: 'Shell',
            terminal: 'Terminal',
            cpu: 'CPU',
            memory: 'Memory'
        },
        footer: {
            version: 'DEVOS v1.0 - Franco Rule Calvi - 2026'
        }
    }
};

// ===== Configuration =====
const CONFIG = {
    bootSeenKey: 'devos_boot_seen',
    animationsEnabledKey: 'devos_animations_enabled',
    languageKey: 'devos_language',
    typingSpeed: 15, // ms per character - optimizado para SEO
    typingSpeedFast: 10,
    scrollThreshold: 0.2
};

// ===== Current Language =====
let currentLang = 'es';

function getText(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(CONFIG.languageKey, lang);
    sessionStorage.setItem(CONFIG.languageKey, lang);
    updateLanguageUI();
}

function updateLanguageUI() {
    // Update boot screen
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getText(key);
        if (text) {
            // Preserve any child elements (like span.success)
            const spanElements = el.querySelectorAll('span');
            if (spanElements.length > 0 && el.getAttribute('data-i18n').startsWith('boot.')) {
                // For boot lines with OK spans, rebuild content
                const parentKey = key.replace('boot.', '');
                const parentText = getText(`boot.${parentKey}`);
                if (parentText) {
                    el.innerHTML = el.innerHTML.replace(/^[^(<]+/, parentText + ' ');
                }
            } else {
                el.textContent = text;
            }
        }
    });

    // Update all elements with data-i18n-key
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.getAttribute('data-i18n-key');
        const text = getText(key);
        if (text !== undefined) {
            const prefix = el.getAttribute('data-prefix') || '';
            const prefixI18nKey = el.getAttribute('data-prefix-i18n');
            const prefixText = prefixI18nKey ? getText(prefixI18nKey) : '';
            const fullPrefix = prefixText ? prefixText + ' ' : prefix;

            if (el.classList.contains('typewriter')) {
                // For typewriters, update data-text and reset animation
                el.setAttribute('data-text', fullPrefix + text);
                el.dataset.originalText = fullPrefix + text;
                // Reset animation state
                el.textContent = '';
                el.classList.remove('completed', 'typing', 'animating');
                el.classList.add('waiting');
            } else {
                // For regular elements
                el.textContent = fullPrefix + text;
            }
        }
    });

    // Restart all visible typewriter animations
    restartVisibleTypewriters();

    // Update tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.textContent = getText('tagline');
    }

    // Update footer
    const footerVersion = document.querySelector('.footer .dim');
    if (footerVersion) {
        footerVersion.textContent = getText('footer.version');
    }

    // Update lang toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        // Los spans están siempre en las mismas posiciones
        const esSpan = langToggle.querySelector('span[data-lang="es"]');
        const enSpan = langToggle.querySelector('span[data-lang="en"]');
        
        if (esSpan && enSpan) {
            if (currentLang === 'es') {
                esSpan.className = 'lang-current';
                enSpan.className = 'lang-option';
            } else {
                esSpan.className = 'lang-option';
                enSpan.className = 'lang-current';
            }
        }
    }
}

function restartVisibleTypewriters() {
    // Get all visible sections
    const sections = document.querySelectorAll('.section.visible');

    sections.forEach(section => {
        // Reset all typewriters in visible sections
        const typewriters = section.querySelectorAll('.typewriter');
        typewriters.forEach((el, index) => {
            // Reset to waiting state
            el.classList.remove('completed', 'typing', 'animating');
            el.classList.add('waiting');
            el.textContent = '';

            // Restart animation with staggered delay
            setTimeout(() => {
                if (el.classList.contains('waiting')) {
                    el.classList.remove('waiting');
                    typeElement(el);
                }
            }, index * 100);
        });
    });
}

function initLanguage() {
    // Intentar obtener de localStorage primero, luego sessionStorage
    const savedLang = localStorage.getItem(CONFIG.languageKey) || sessionStorage.getItem(CONFIG.languageKey);
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        currentLang = savedLang;
    } else {
        currentLang = 'es'; // Default to Spanish
    }
    updateLanguageUI();
}

function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

// ===== DOM Elements =====
const bootScreen = document.getElementById('boot-screen');
const terminal = document.getElementById('terminal');
const inputCursor = document.querySelector('.input-cursor');
const commandOutput = document.getElementById('command-output');

// ===== Easter Egg Commands =====
const COMMANDS = {
    help: {
        description: () => getText('commands.help'),
        execute: () => {
            const labels = currentLang === 'es' ? 
                { os: 'SO', host: 'Host', location: 'Ubicación', uptime: 'Actividad', shell: 'Shell', terminal: 'Terminal', cpu: 'CPU', memory: 'Memoria' } :
                { os: 'OS', host: 'Host', location: 'Location', uptime: 'Uptime', shell: 'Shell', terminal: 'Terminal', cpu: 'CPU', memory: 'Memory' };
            
            return `<strong class="section-title">${getText('output.availableCommands')}</strong>
<span class="cmd-name">help</span>       <span class="cmd-desc">${getText('commands.help')}</span>
<span class="cmd-name">neofetch</span>   <span class="cmd-desc">${getText('commands.neofetch')}</span>
<span class="cmd-name">uptime</span>     <span class="cmd-desc">${getText('commands.uptime')}</span>
<span class="cmd-name">uname</span>      <span class="cmd-desc">${getText('commands.uname')}</span>
<span class="cmd-name">sudo</span>       <span class="cmd-desc">${getText('commands.sudo')}</span>
<span class="cmd-name">matrix</span>     <span class="cmd-desc">${getText('commands.matrix')}</span>
<span class="cmd-name">restart</span>    <span class="cmd-desc">${getText('commands.restart')}</span>`;
        }
    },
    
    clear: {
        description: () => getText('commands.clear'),
        execute: () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return getText('output.terminalCleared');
        }
    },
    
    neofetch: {
        description: () => getText('commands.neofetch'),
        execute: () => {
            const labels = currentLang === 'es' ? 
                { os: 'SO', host: 'Host', location: 'Ubicación', uptime: 'Actividad', shell: 'Shell', terminal: 'Terminal', cpu: 'CPU', memory: 'Memoria' } :
                { os: 'OS', host: 'Host', location: 'Location', uptime: 'Uptime', shell: 'Shell', terminal: 'Terminal', cpu: 'CPU', memory: 'Memory' };
            
            return `<div class="neofetch-container"><div class="neofetch-star">☆</div><div class="neofetch-info"><strong>franco@dev</strong>
-----------
<div class="neofetch-line"><span class="neofetch-label">${labels.os}:</span><span class="neofetch-value">DEVOS v1.0</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.host}:</span><span class="neofetch-value">Franco Rule Calvi</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.location}:</span><span class="neofetch-value">Mendoza, AR</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.uptime}:</span><span class="neofetch-value">${getUptime()}</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.shell}:</span><span class="neofetch-value">bash 5.1.16</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.terminal}:</span><span class="neofetch-value">web-terminal</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.cpu}:</span><span class="neofetch-value">PHP Brain 8.2</span></div>
<div class="neofetch-line"><span class="neofetch-label">${labels.memory}:</span><span class="neofetch-value">Laravel Powered</span></div></div></div>`;
        }
    },
    
    uptime: {
        description: () => getText('commands.uptime'),
        execute: () => {
            return `${getText('output.systemUptime')} ${getUptime()}`;
        }
    },
    
    uname: {
        description: () => getText('commands.uname'),
        execute: () => {
            return 'DEVOS v1.0 franco-dev generic x86_64 GNU/Linux';
        }
    },
    
    sudo: {
        description: () => getText('commands.sudo'),
        execute: () => {
            return `<span class="cmd-name">[sudo]</span> ${getText('output.sudoPassword')}

<span class="cmd-desc">${getText('output.sudoError')}</span>

<strong>${getText('output.niceTry')}</strong>`;
        }
    },
    
    matrix: {
        description: () => getText('commands.matrix'),
        execute: () => {
            activateMatrixMode();
            return getText('output.matrixActivated');
        }
    },
    
    restart: {
        description: () => getText('commands.restart'),
        execute: () => {
            sessionStorage.removeItem(CONFIG.bootSeenKey);
            sessionStorage.removeItem(CONFIG.animationsEnabledKey);
            
            setTimeout(() => {
                window.location.href = window.location.pathname + '?reboot=true';
            }, 500);
            
            return getText('output.rebooting');
        }
    },
    
    whoami: {
        description: () => getText('commands.whoami'),
        execute: () => {
            return getText('output.visitor');
        }
    },
    
    ls: {
        description: () => getText('commands.ls'),
        execute: () => {
            return 'about.txt  achievements.log  contact  methodology.md  stack/';
        }
    },
    
    pwd: {
        description: () => getText('commands.pwd'),
        execute: () => {
            return '/home/franco/dev';
        }
    },
    
    date: {
        description: () => getText('commands.date'),
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
    const hasSeenBoot = sessionStorage.getItem(CONFIG.bootSeenKey);
    
    if (isReboot) {
        // Viene de comando restart: mostrar boot + animaciones
        sessionStorage.setItem(CONFIG.animationsEnabledKey, 'true');
        // Limpiar URL param sin recargar
        window.history.replaceState({}, '', window.location.pathname);
        showBoot();
    } else if (!hasSeenBoot) {
        // Primera visita: mostrar boot + animaciones
        sessionStorage.setItem(CONFIG.animationsEnabledKey, 'true');
        showBoot();
    } else {
        // F5 normal: saltear boot, texto instantáneo
        sessionStorage.setItem(CONFIG.animationsEnabledKey, 'false');
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
    sessionStorage.setItem(CONFIG.bootSeenKey, 'true');
    sessionStorage.setItem(CONFIG.animationsEnabledKey, 'true'); // Animaciones habilitadas
    
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
    const animationsEnabled = sessionStorage.getItem(CONFIG.animationsEnabledKey) === 'true';

    typewriters.forEach(el => {
        // Check if this typewriter has an i18n key
        const i18nKey = el.getAttribute('data-i18n-key');
        let text = el.getAttribute('data-text') || '';

        if (i18nKey) {
            // Get translated text
            const translatedText = getText(i18nKey);
            if (translatedText) {
                const prefix = el.getAttribute('data-prefix') || '';
                const prefixI18nKey = el.getAttribute('data-prefix-i18n');
                const prefixText = prefixI18nKey ? getText(prefixI18nKey) : '';
                const fullPrefix = prefixText ? prefixText + ' ' : prefix;
                text = fullPrefix + translatedText;
                // Update data-text attribute for future reference
                el.setAttribute('data-text', text);
            }
        }

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
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
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
        const notFound = currentLang === 'es' ? 'Comando no encontrado' : 'Command not found';
        const typeHelp = currentLang === 'es' ?
            `Escribe '<span class="cmd-name">help</span>' para ver los comandos disponibles.` :
            `Type '<span class="cmd-name">help</span>' to see available commands.`;
        commandOutput.innerHTML = `<strong>${notFound}:</strong> <span class="cmd-name">${command}</span>

<span class="cmd-desc">${typeHelp}</span>`;
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
        const possibleCommands = currentLang === 'es' ? 'Comandos posibles' : 'Possible commands';
        commandOutput.innerHTML = `<strong>${possibleCommands}:</strong> ${matchList}`;
    }
}

// ===== Language Toggle =====
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

// ===== Matrix Mode =====
function activateMatrixMode() {
    // No se modifica ni background ni color del texto
    // Solo se muestra el canvas de Matrix encima
    
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
    
    // After 7 seconds, start 3-second fade-out
    setTimeout(() => {
        canvas.style.transition = 'opacity 3s ease-out';
        canvas.style.opacity = '0';
        
        // After fade completes (3s), remove canvas
        setTimeout(() => {
            clearInterval(matrixInterval);
            if (canvas.parentNode) {
                document.body.removeChild(canvas);
            }
            // No se restauran colores porque nunca se cambiaron
        }, 3000);
    }, 7000);
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
    // Marcar que JS está habilitado (oculta contenido <noscript>)
    document.body.classList.add('js-enabled');

    initLanguage();
    initLanguageToggle();
    initBootSequence();
    initInteractiveCommands();

    // Animations are now handled only by IntersectionObserver - no need for visibility check
});

// Note: Scroll-triggered typing is handled by IntersectionObserver above