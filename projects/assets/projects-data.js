window.PROJECTS = {
    'py-telegram-alert': {
        displayName: 'py-telegram-alert',
        repoName: 'py-telegram-alert',
        repoUrl: 'https://github.com/cainky/py-telegram-alert',
        category: 'Developer Tools',
        status: 'Stable',
        stack: ['Python', 'Telegram Bot API', 'Automation'],
        eyebrow: 'Automation Toolkit',
        summary: 'Send Telegram alerts from Python workflows with minimal setup and clean integration points.',
        tagline: 'Realtime alerts, zero dashboard overhead.',
        mood: 'Ship scripts that report critical events instantly and stay reliable in production routines.',
        signals: ['Event-driven', 'Low friction setup', 'Ops friendly'],
        highlights: [
            'Connects monitoring or workflow events directly to Telegram notifications.',
            'Designed for practical reliability in scripts and lightweight services.',
            'Simple integration pattern keeps deployment and maintenance straightforward.'
        ],
        theme: {
            accent: '#22d3ee',
            motif: 'signal',
            icon: 'simple-icons:telegram',
            orb1: 'rgba(34, 211, 238, 0.34)',
            orb2: 'rgba(59, 130, 246, 0.26)',
            orb3: 'rgba(45, 212, 191, 0.2)'
        }
    },
    'midigen': {
        displayName: 'midigen',
        repoName: 'midigen',
        repoUrl: 'https://github.com/cainky/midigen',
        category: 'Music',
        status: 'Active',
        stack: ['Python', 'MIDI', 'CLI'],
        eyebrow: 'Music Generator',
        summary: 'Generate and transform MIDI content quickly for composition experiments and production workflows.',
        tagline: 'Generative MIDI ideas at producer speed.',
        mood: 'Prototype hooks, chords, and rhythmic motifs fast with scriptable composition helpers.',
        signals: ['Pattern engine', 'Composer workflow', 'Batch generation'],
        highlights: [
            'Creates repeatable MIDI patterns for rapid idea generation.',
            'Helps automate tedious sequence editing tasks.',
            'Useful for producers who want scriptable composition helpers.'
        ],
        theme: {
            accent: '#f59e0b',
            motif: 'wave',
            icon: 'ph:waveform-duotone',
            orb1: 'rgba(245, 158, 11, 0.3)',
            orb2: 'rgba(251, 191, 36, 0.24)',
            orb3: 'rgba(244, 114, 182, 0.16)'
        }
    },
    'counterstrikeinterface': {
        displayName: 'CounterStrikeInterface',
        repoName: 'CounterStrikeInterface',
        repoUrl: 'https://github.com/cainky/CounterStrikeInterface',
        category: 'Gaming',
        status: 'Active',
        stack: ['Python', 'Game Telemetry', 'Desktop UI'],
        eyebrow: 'Gaming Interface',
        summary: 'A focused interface layer for Counter-Strike workflows and game-adjacent tooling.',
        tagline: 'Competitive overlay control tuned for fast rounds.',
        mood: 'Performance-focused interface tooling built for responsive in-match usage.',
        signals: ['Round timing', 'UI overlays', 'Fast inputs'],
        highlights: [
            'Surfaces game-related controls and state in one clean interface.',
            'Built for low-friction usage during gameplay sessions.',
            'Prioritizes responsiveness and practical utility over complexity.'
        ],
        theme: {
            accent: '#f97316',
            motif: 'reticle',
            icon: 'simple-icons:counterstrike',
            orb1: 'rgba(249, 115, 22, 0.34)',
            orb2: 'rgba(239, 68, 68, 0.24)',
            orb3: 'rgba(251, 191, 36, 0.16)'
        }
    },
    'quakeliveinterface': {
        displayName: 'QuakeLiveInterface',
        repoName: 'QuakeLiveInterface',
        repoUrl: 'https://github.com/cainky/QuakeLiveInterface',
        category: 'Gaming',
        status: 'Active',
        stack: ['Python', 'Game Integration', 'Desktop UI'],
        eyebrow: 'Arena Interface',
        summary: 'Interface tooling for Quake Live that streamlines player-focused workflows and automation.',
        tagline: 'Arena-grade interface tooling for Quake Live.',
        mood: 'Keep movement-heavy sessions clean with utilities optimized for real-time control.',
        signals: ['Low latency', 'Session tools', 'Player focused'],
        highlights: [
            'Provides quick access to common tasks around Quake Live sessions.',
            'Supports cleaner operation for repetitive interface actions.',
            'Keeps interaction fast and lightweight for daily use.'
        ],
        theme: {
            accent: '#ef4444',
            motif: 'reticle',
            icon: 'ph:crosshair-duotone',
            orb1: 'rgba(239, 68, 68, 0.34)',
            orb2: 'rgba(249, 115, 22, 0.24)',
            orb3: 'rgba(244, 63, 94, 0.2)'
        }
    },
    'pdfsigner': {
        displayName: 'PDFSigner',
        repoName: 'PDFSigner',
        repoUrl: 'https://github.com/cainky/PDFSigner',
        category: 'Utilities',
        status: 'Stable',
        stack: ['Python', 'PDF', 'File Processing'],
        eyebrow: 'Document Utility',
        summary: 'Sign and process PDF documents with a utility-first flow focused on speed and reliability.',
        tagline: 'Sign documents in minutes, not meetings.',
        mood: 'A clean utility flow for practical local document work with predictable output.',
        signals: ['PDF pipeline', 'Local first', 'Reliable output'],
        highlights: [
            'Handles practical PDF signing workflows without heavyweight tooling.',
            'Built for repeatable local document operations.',
            'Keeps the user flow simple for non-technical day-to-day use.'
        ],
        theme: {
            accent: '#38bdf8',
            motif: 'grid',
            icon: 'ph:file-pdf-duotone',
            orb1: 'rgba(56, 189, 248, 0.34)',
            orb2: 'rgba(14, 165, 233, 0.22)',
            orb3: 'rgba(125, 211, 252, 0.16)'
        }
    },
    'envlint': {
        displayName: 'envlint',
        repoName: 'envlint',
        repoUrl: 'https://github.com/cainky/envlint',
        category: 'Developer Tools',
        status: 'Active',
        stack: ['Python', 'CLI', 'Environment Validation'],
        eyebrow: 'Developer Tooling',
        summary: 'Validate environment configuration files before deploy so teams catch mistakes early.',
        tagline: 'Catch bad env vars before production does.',
        mood: 'Developer-first linting that hardens configuration hygiene in local and CI flows.',
        signals: ['Preflight checks', 'CI ready', 'Config safety'],
        highlights: [
            'Flags missing or malformed environment variables quickly.',
            'Fits naturally into local dev checks and CI pipelines.',
            'Promotes consistent configuration hygiene across projects.'
        ],
        theme: {
            accent: '#34d399',
            motif: 'matrix',
            icon: 'ph:terminal-window-duotone',
            orb1: 'rgba(52, 211, 153, 0.34)',
            orb2: 'rgba(16, 185, 129, 0.24)',
            orb3: 'rgba(20, 184, 166, 0.18)'
        }
    },
    'soundclouddownloader': {
        displayName: 'SoundcloudDownloader',
        repoName: 'SoundcloudDownloader',
        repoUrl: 'https://github.com/cainky/SoundcloudDownloader',
        category: 'Utilities',
        status: 'Stable',
        stack: ['Python', 'Media Processing', 'CLI'],
        eyebrow: 'Media Utility',
        summary: 'Utility for downloading and organizing SoundCloud tracks with a straightforward workflow.',
        tagline: 'Pull tracks quickly for streamlined local workflows.',
        mood: 'Practical media utility behavior for one-off and batch download sessions.',
        signals: ['Batch jobs', 'Track handling', 'Fast utility flow'],
        highlights: [
            'Automates repetitive track download tasks.',
            'Keeps process simple for one-off and batch usage.',
            'Useful as a local utility in broader audio workflows.'
        ],
        theme: {
            accent: '#fb923c',
            motif: 'wave',
            icon: 'simple-icons:soundcloud',
            orb1: 'rgba(251, 146, 60, 0.34)',
            orb2: 'rgba(249, 115, 22, 0.22)',
            orb3: 'rgba(253, 186, 116, 0.16)'
        }
    },
    'replacetext': {
        displayName: 'ReplaceText',
        repoName: 'ReplaceText',
        repoUrl: 'https://github.com/cainky/ReplaceText',
        category: 'Utilities',
        status: 'Stable',
        stack: ['Python', 'Text Processing', 'CLI'],
        eyebrow: 'Text Utility',
        summary: 'Fast text replacement utility for batch edits and repetitive content cleanup.',
        tagline: 'Bulk text edits with surgical speed.',
        mood: 'Run predictable replacement passes across files without manual cleanup fatigue.',
        signals: ['Batch replace', 'Content cleanup', 'Repeatable runs'],
        highlights: [
            'Speeds up broad find-and-replace operations across files.',
            'Useful for content cleanup and repetitive transformation tasks.',
            'Keeps editing workflows scriptable and predictable.'
        ],
        theme: {
            accent: '#a78bfa',
            motif: 'matrix',
            icon: 'ph:textbox-duotone',
            orb1: 'rgba(167, 139, 250, 0.34)',
            orb2: 'rgba(139, 92, 246, 0.24)',
            orb3: 'rgba(99, 102, 241, 0.18)'
        }
    }
};
