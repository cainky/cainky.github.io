(() => {
    const projects = window.PROJECTS || {};
    const projectId = document.documentElement.dataset.project || '';
    const project = projects[projectId];

    const byId = (id) => document.getElementById(id);
    const setText = (id, value) => {
        const el = byId(id);
        if (el) el.textContent = value;
    };

    const sponsorUrl = 'https://github.com/sponsors/cainky';
    document.querySelectorAll('[data-sponsor-link]').forEach((link) => {
        link.setAttribute('href', sponsorUrl);
    });

    const hexToRgb = (hex) => {
        const normalized = (hex || '').replace('#', '').trim();
        const value = normalized.length === 3
            ? normalized.split('').map((c) => c + c).join('')
            : normalized;

        if (!/^[0-9a-fA-F]{6}$/.test(value)) {
            return null;
        }

        return {
            r: parseInt(value.slice(0, 2), 16),
            g: parseInt(value.slice(2, 4), 16),
            b: parseInt(value.slice(4, 6), 16),
        };
    };

    const rgba = (hex, alpha) => {
        const rgb = hexToRgb(hex);
        if (!rgb) return null;
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    };

    const lighten = (hex, amount) => {
        const rgb = hexToRgb(hex);
        if (!rgb) return null;
        const mix = (value) => Math.min(255, Math.round(value + (255 - value) * amount));
        return `rgb(${mix(rgb.r)}, ${mix(rgb.g)}, ${mix(rgb.b)})`;
    };

    const defaultTheme = {
        accent: '#818cf8',
        motif: 'grid',
        icon: 'ph:cube-duotone',
        orb1: 'rgba(99, 102, 241, 0.34)',
        orb2: 'rgba(56, 189, 248, 0.26)',
        orb3: 'rgba(14, 165, 233, 0.2)',
    };

    const applyTheme = (theme = {}) => {
        const merged = { ...defaultTheme, ...theme };
        const accentSoft = theme.accentSoft || rgba(merged.accent, 0.18);
        const accentBorder = theme.accentBorder || rgba(merged.accent, 0.42);
        const accentBright = theme.accentBright || lighten(merged.accent, 0.45);
        const motifA = theme.motifA || rgba(merged.accent, 0.18);
        const motifB = theme.motifB || rgba(merged.accent, 0.08);

        const root = document.documentElement;
        root.style.setProperty('--accent', merged.accent);
        if (accentSoft) root.style.setProperty('--accent-soft', accentSoft);
        if (accentBorder) root.style.setProperty('--accent-border', accentBorder);
        if (accentBright) root.style.setProperty('--accent-bright', accentBright);
        root.style.setProperty('--orb-1', merged.orb1);
        root.style.setProperty('--orb-2', merged.orb2);
        root.style.setProperty('--orb-3', merged.orb3);
        if (motifA) root.style.setProperty('--motif-a', motifA);
        if (motifB) root.style.setProperty('--motif-b', motifB);

        document.body.dataset.motif = merged.motif;

        const iconEl = byId('project-icon');
        if (iconEl) {
            iconEl.setAttribute('icon', merged.icon || defaultTheme.icon);
        }
    };

    if (!project) {
        document.title = 'Project Not Found | Kyle Cain';
        setText('project-name', 'Project Not Found');
        setText('project-summary', 'This project landing page is not configured yet.');
        setText('meta-category', 'Unknown');
        setText('meta-status', 'Missing config');
        setText('repo-name', 'missing-project');
        setText('repo-name-meta', 'missing-project');
        setText('project-tagline', 'Add this project to the data manifest.');
        setText('project-mood', 'Populate projects/assets/projects-data.js to render this page.');
        setText('project-eyebrow', 'Project Landing');
        setText('panel-category-pill', 'Unknown');

        const list = byId('project-highlights');
        if (list) {
            list.innerHTML = '<li>Add this project to projects/assets/projects-data.js.</li>';
        }

        const signals = byId('project-signals');
        if (signals) {
            signals.innerHTML = '';
        }

        applyTheme();
        return;
    }

    applyTheme(project.theme);

    document.title = `${project.displayName} | Kyle Cain`;
    setText('project-name', project.displayName);
    setText('project-summary', project.summary);
    setText('project-eyebrow', project.eyebrow || project.category || 'Project Landing');
    setText('project-tagline', project.tagline || project.summary);
    setText('project-mood', project.mood || 'Focused on practical outcomes and clean implementation.');
    setText('panel-category-pill', project.category || 'Project');

    setText('meta-category', project.category);
    setText('meta-status', project.status || 'Active');
    setText('repo-name', project.repoName || project.displayName);
    setText('repo-name-meta', project.repoName || project.displayName);

    const repoLink = byId('repo-link');
    if (repoLink) {
        repoLink.setAttribute('href', project.repoUrl);
    }

    const repoLinkSecondary = byId('repo-link-secondary');
    if (repoLinkSecondary) {
        repoLinkSecondary.setAttribute('href', project.repoUrl);
    }

    const stack = byId('project-stack');
    if (stack) {
        stack.innerHTML = '';
        (project.stack || []).forEach((item) => {
            const chip = document.createElement('span');
            chip.className = 'stack-chip';
            chip.textContent = item;
            stack.appendChild(chip);
        });
    }

    const signals = byId('project-signals');
    if (signals) {
        signals.innerHTML = '';
        const source = (project.signals && project.signals.length)
            ? project.signals
            : (project.stack || []).slice(0, 3);

        source.forEach((item) => {
            const chip = document.createElement('span');
            chip.className = 'signal-chip';
            chip.innerHTML = '<span class="signal-dot"></span>';
            chip.append(document.createTextNode(item));
            signals.appendChild(chip);
        });
    }

    const highlights = byId('project-highlights');
    if (highlights) {
        highlights.innerHTML = '';
        (project.highlights || []).forEach((point) => {
            const li = document.createElement('li');
            li.textContent = point;
            highlights.appendChild(li);
        });
    }
})();
