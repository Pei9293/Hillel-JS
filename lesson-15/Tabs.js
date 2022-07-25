class Tabs {
    #rootEl

    static CLASS_ITEM = 'tabs-item';
    static CLASS_HEADER = 'nav-item-active';
    static CLASS_CONTENT = 'content-item';
    static CLASS_ACTIVE = 'content-item-active';


    constructor(rootEl) {
        this.#rootEl = rootEl;

        this.bindStyles();
        this.bindEvents();
    }

    bindStyles() {
        for (const tabsItemEl of this.#rootEl.children) {
            tabsItemEl.classList.add(Tabs.CLASS_ITEM);
            const [headerEl, contentEl] = tabsItemEl.children;
            headerEl.classList.add(Tabs.CLASS_HEADER);
            contentEl.classList.add(Tabs.CLASS_CONTENT);
        }
        this.#rootEl.querySelector(':first-child').querySelector(`.${Tabs.CLASS_HEADER}`).classList.add(Tabs.CLASS_ACTIVE)
        this.#rootEl.querySelector(':first-child').querySelector(`.${Tabs.CLASS_CONTENT}`).classList.add(Tabs.CLASS_OPEN)
    }
    bindEvents() {
        this.#rootEl.addEventListener('click', this.onRootElClick.bind(this));
    }

    onRootElClick(e) {
        const headerEl = e.target;

        if (headerEl.classList.contains(Tabs.CLASS_HEADER)) {
            this.toggleContent(headerEl);
        }
    }

    toggleContent(headerEl) {
        const openContentEl = this.findOpenContentEl();
        const activeHeaderEl = this.findActiveHeaderEl();
        const currentContentEl = this.findCurrentContentEl(headerEl);

        if (openContentEl && openContentEl !== currentContentEl) { 
            this.hideContent(openContentEl);
        }

        if (activeHeaderEl && activeHeaderEl !== currentContentEl) { 
            this.deActiveHeader(activeHeaderEl);
        }

        headerEl.classList.add(Tabs.CLASS_ACTIVE);
        currentContentEl.classList.add(Tabs.CLASS_OPEN);
    }

    findOpenContentEl() {
        return this.#rootEl.querySelector(`.${Tabs.CLASS_OPEN}`);
    }

    findActiveHeaderEl() {
        return this.#rootEl.querySelector(`.${Tabs.CLASS_ACTIVE}`);
    }

    findCurrentContentEl(headerEl) {
        return headerEl
            .closest(`.${Tabs.CLASS_ITEM}`)
            .querySelector(`.${Tabs.CLASS_CONTENT}`);
    }

    hideContent(contentEl) {
        contentEl.classList.remove(Tabs.CLASS_OPEN);
    }

    deActiveHeader(headerEl) {
        headerEl.classList.remove(Tabs.CLASS_ACTIVE)
    }
}

export default Tabs;